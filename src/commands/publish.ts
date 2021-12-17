import * as pacote from "pacote";
import * as fs from "fs";
import * as AdmZip from "adm-zip";
import cli from "cli-ux";
import { Command } from "@oclif/command";
import { registry } from "../clients";

const APP_PATH = "./";
const SRC_PATH = "./src";

function patch(version: string) {
  return `0.0.${Number(version.substr(version.lastIndexOf(".") + 1)) + 1}`;
}

export default class Publish extends Command {
  static description =
    "publishes a patched version of the micro-frontend application";

  static examples = [`$ mfe publish`];

  async run() {
    // TODO: Before packing and sending to registry, validate it with @mfe-frameworks/config.
    // TODO: Add patch, minor and major options.
    const manifest = await pacote.manifest(APP_PATH);
    const zipManager = new AdmZip();
    zipManager.addLocalFolder(SRC_PATH);
    const appConfig = fs.readFileSync("./mf-config.ts", {
      encoding: "utf-8",
    });

    const newPatch = patch(manifest.version);
    manifest.version = newPatch;

    fs.writeFileSync("./package.json", JSON.stringify(manifest));

    try {
      cli.action.start(`Publishing ${manifest.name}@${manifest.version}`);

      await registry.post("/publish", {
        data: {
          zip: zipManager.toBuffer(),
          manifest,
          appConfig,
        },
      });

      cli.action.stop("Done ✨");
    } catch (error) {
      throw error;
    }
  }
}
