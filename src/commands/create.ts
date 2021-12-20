import { Command, flags } from "@oclif/command";
import { exec } from "child_process";
import cli from "cli-ux";
import * as inquirer from "inquirer";

function clone(appName: string, framework: string, poc: string) {
  cli.action.start(`Creating ${framework} ${appName} for the ${poc} POC`);

  exec(
    `git clone \
  --depth 1  \
  --filter=blob:none  \
  --sparse \
  git@github.com:micro-frontend-frameworks/templates.git ${appName};
cd ${appName}
git sparse-checkout set ${framework}-template
mv ${poc}/${framework}-template/** .
rm -rf nextjs-*
yarn`,
    (error, _, stderr) => {
      if (error) {
        cli.error(`error: ${error.message}`);
      }
      if (stderr) {
        cli.warn(`stderr: ${stderr}`);
        return;
      }

      cli.action.stop(`Done ✨`);
    }
  );
}

export default class Create extends Command {
  static description = "creates a new micro-frontend application";

  static examples = [`$ mfe create`];

  private static frameworkOptions = ["nextjs", "react"];
  private static pocOptions = [
    "nextjs-run-time-integration",
    "nextjs-build-time-integration",
  ];
  static flags = {
    poc: flags.string({
      options: Create.pocOptions,
    }),
  };

  async run() {
    const { flags } = this.parse(Create);
    let framework = "nextjs";
    let poc = flags.poc;

    const appName = await cli.prompt("What is the name of your app?");

    if (!poc) {
      const responses: any = await inquirer.prompt([
        {
          name: "poc",
          message: "What POC would you like to try out?",
          type: "list",
          choices: Create.pocOptions.map((option) => ({ name: option })),
        },
      ]);
      poc = responses.poc;
    }

    switch (poc) {
      case "nextjs-build-time-integration":
        framework = (await inquirer.prompt([
          {
            name: "framework",
            message: "What framework would you like to use?",
            type: "list",
            choices: Create.frameworkOptions.map((option) => ({
              name: option,
            })),
          },
        ])).framework

        break;
      default:
        break;
    }

    clone(appName, framework, poc as string);
  }
}
