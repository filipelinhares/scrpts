# npm scrpts

List npm scripts from `package.json`.

[![npm][npm-image]][npm-url] [![license][license-image]][license-url] [![changelog][changelog-image]][changelog-url] [![travis][travis-img]][travis-url]

## Usage

```
npx scrpts
```

Optionally you can provide a property of package.json as argument:

```
npx scrpts dependencies # print dependencies
npx scrpts devDependencies
```

### Globally

```
npm i -g scrpts

# Inside folder
scrpts
```

## License

[MIT](LICENSE.md) © Filipe Linhares

[travis-img]: https://travis-ci.org/filipelinhares/scrpts.svg?branch=master
[travis-url]: https://travis-ci.org/filipelinhares/scrpts
[changelog-image]: https://img.shields.io/badge/changelog-md-blue.svg?style=flat
[changelog-url]: CHANGELOG.md
[license-image]: https://img.shields.io/npm/l/scrpts.svg?style=flat
[license-url]: LICENSE.md
[npm-image]: https://img.shields.io/npm/v/scrpts.svg?style=flat
[npm-url]: https://www.npmjs.com/package/scrpts
