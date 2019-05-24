# 🙅 Environment blending

[![Travis CI](https://img.shields.io/travis/AnandChowdhary/environment-blending.svg)](https://travis-ci.org/AnandChowdhary/environment-blending)
[![Coverage Status](https://coveralls.io/repos/github/AnandChowdhary/environment-blending/badge.svg?branch=master)](https://coveralls.io/github/AnandChowdhary/environment-blending?branch=master)
[![GitHub](https://img.shields.io/github/license/anandchowdhary/environment-blending.svg)](https://github.com/AnandChowdhary/environment-blending/blob/master/LICENSE)
![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/AnandChowdhary/environment-blending.svg)
![NPM type definitions](https://img.shields.io/npm/types/environment-blending.svg)
[![NPM](https://img.shields.io/npm/v/environment-blending.svg)](https://www.npmjs.com/package/environment-blending)
[![Minzipped size](https://img.shields.io/bundlephobia/minzip/environment-blending.svg)](https://www.npmjs.com/package/environment-blending)

[![NPM](https://nodei.co/npm/environment-blending.png)](https://www.npmjs.com/package/environment-blending)

Environment blending is a package that tells you a user's environment blending preferences. It's based on the CSS `@media (environment-blending)`, which is part of [Media Queries Level 5](https://drafts.csswg.org/mediaqueries-5/). It's around 700 bytes minified, 300 bytes gzipped.

## ⭐ Usage

Add the dependency from NPM:

```bash
npm install environment-blending
```

Import the package:

```js
import envBlending from "environment-blending";
```

Then call the function:

```js
const contrastPreference = envBlending();
// Returns "additive", "subtractive" or "opaque"
```

## 💡 Browser support

This package only works in browsers that natively support `@media (environment-blending)`, so it just returns `"opaque"` in unsupported browsers. [Current browser support](https://caniuse.com/#feat=environment-blending)

By passing `false` as the argument, you can get `"unsupported"` as the value for unsupported browsers:

```js
const contrastPreference = envBlending(false);
// Returns "additive", "subtractive", "opaque", or "unsupported"
```

## 🛠️ Development

Install dependencies:

```bash
yarn
```

Compile Typescript to ES6 before publishing to NPM:

```bash
yarn build
```

## 📀 Media Queries Level 5

- `prefers-reduced-motion` · [GitHub](https://github.com/AnandChowdhary/prefers-reduced-motion) · [NPM](https://www.npmjs.com/package/prefers-reduced-motion)
- `prefers-color-scheme` · [GitHub](https://github.com/AnandChowdhary/prefers-color-scheme) · [NPM](https://www.npmjs.com/package/prefers-color-scheme)
- `prefers-contrast` · [GitHub](https://github.com/AnandChowdhary/prefers-contrast) · [NPM](https://www.npmjs.com/package/prefers-contrast)
- `prefers-reduced-transparency` · [GitHub](https://github.com/AnandChowdhary/prefers-reduced-transparency) · [NPM](https://www.npmjs.com/package/prefers-reduced-transparency)
- `inverted-colors` · [GitHub](https://github.com/AnandChowdhary/inverted-colors) · [NPM](https://www.npmjs.com/package/inverted-colors)
- `scripting` · [GitHub](https://github.com/AnandChowdhary/scripting) · [NPM](https://www.npmjs.com/package/scripting)
- `environment-blending` · [GitHub](https://github.com/AnandChowdhary/environment-blending) · [NPM](https://www.npmjs.com/package/environment-blending)
- `light-level` · [GitHub](https://github.com/AnandChowdhary/light-level) · [NPM](https://www.npmjs.com/package/light-level)

## 📝 License

MIT
