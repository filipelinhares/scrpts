#!/usr/bin/env node
const path = require('path');
const fs = require('fs').promises;
const chalk = require('chalk');

const printScripts = file => {
  const {scripts} = file;

  const x = Object.keys(scripts).map(f => {
    return (
      `
   ${chalk.bold(f)}
      ${chalk.dim.italic(scripts[f])}`);
  });

  return (
    `
   ${chalk.bold(`${file.name}@${file.version} - Available scrpts:`)}

    ${x.sort().join('\n')}
`);
};

async function main() {
  const packagePath = path.resolve(process.cwd(), 'package.json');

  try {
    const packageJson = await fs.readFile(packagePath, 'utf8');
    const parsedPackageJson = JSON.parse(packageJson);
    process.stderr.write(printScripts(parsedPackageJson));
    process.exit();
  } catch (error) {
    if (error.code === 'ENOENT') {
      process.stderr.write('You do not have a package.json in this folder');
      process.exit();
    }
  }
}

main();
