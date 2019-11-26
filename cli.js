#!/usr/bin/env node
const path = require('path');
const fs = require('fs').promises;

const pkgPath = process.argv[2];

const printScripts = file => {
	const pkgInfo = pkgPath ? file[pkgPath] : file.scripts;

	if (!pkgInfo) {
		console.log('Path not found in package.json');
		process.exit(0);
	}

	const x = Object.keys(pkgInfo).map(f => {
		return `• ${f}: ${pkgInfo[f]}`;
	});

	return `${(`${file.name}@${file.version} - Available scrpts:`)}\n\n    ${x.sort().join('\n    ')}\n`;
};

async function main() {
	const packagePath = path.resolve(process.cwd(), 'package.json');

	try {
		const packageJson = await fs.readFile(packagePath, 'utf8');
		const parsedPackageJson = JSON.parse(packageJson);
		process.stdout.write(printScripts(parsedPackageJson));
		process.exit(0);
	} catch (error) {
		if (error.code === 'ENOENT') {
			process.stderr.write(`You don't have a package.json in this folder`);
			process.exit(0);
		}
		else {
			throw new Error(error);
		}
	}
}

main();
