#!/usr/bin/env node
const path = require('path');
const fs = require('fs').promises;
const chalk = require('chalk');

const pkgPath = process.argv[2];

const printScripts = file => {
  const pkgInfo = pkgPath ? file[pkgPath] : file.scripts;

  if (!pkgInfo) {
    console.log('Path not found in package.json');
    process.exit();
  }

  const x = Object.keys(pkgInfo).map(f => {
    return (
      `
   ${chalk.bold(f)}
      ${chalk.dim.italic(pkgInfo[f])}`);
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
