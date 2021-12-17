import { Command } from "@oclif/command";
import { cli } from "cli-ux";
import * as pacote from "pacote";
import { builder } from "../clients";

const APP_PATH = "./";

export default class Install extends Command {
  static description =
    "installs a published micro-frontend application on a tenant";

  static examples = [`$ mfe install`];

  static args = [
    {
      name: "tenant",
      required: false,
      description: "output file",
      default: "glowing-fiesta",
      options: ["glowing-fiesta", "vigilant-octo-sniffle", "redesigned-robot"],
    },
  ];

  async run() {
    const { args } = this.parse(Install);

    const manifest = await pacote.manifest(APP_PATH);

    cli.action.start(
      `Installing ${manifest.name}@${manifest.version} on ${args.tenant}`
    );

    const response = await builder.post("/patch-tenant", {
      data: {
        app: `${manifest.name}@${manifest.version}`,
        tenant: args.tenant,
      },
    });

    cli.action.stop(`Done ✨\n${response.data.message}`);

    try {
    } catch (error) {
      throw error;
    }
  }
}
