import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { spawn } from "child_process";
import inquirer from "inquirer";
import inquirerAutocompletePrompt from "inquirer-autocomplete-prompt";

inquirer.registerPrompt("autocomplete", inquirerAutocompletePrompt);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const packagesDir = path.join(__dirname, "../packages");

const packages = fs
    .readdirSync(packagesDir)
    .filter((name) => !/^\./.test(name));

const buildPackagePrompt = {
    name: "buildPackage",
    description: "Build package",
    type: "autocomplete",
    source: (answers, input = "") => {
        const startsWith = [];
        const includes = [];
        packages.forEach((name) => {
            if (name.startsWith(input)) {
                startsWith.push(name);
            } else if (name.includes(input)) {
                includes.push(name);
            }
        });
        return startsWith.concat(includes);
    },
};

inquirer.prompt(buildPackagePrompt).then(({ buildPackage }) => {
    const cwd = path.join(__dirname, `../packages/${buildPackage}`);
    spawn("pnpm", ["build"], {
        cwd,
        detached: true,
        stdio: "inherit",
    });
});
