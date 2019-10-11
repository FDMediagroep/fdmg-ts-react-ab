[![Build Status](https://www.travis-ci.org/FDMediagroep/fdmg-ts-react-ab.svg?branch=master)](https://www.travis-ci.org/FDMediagroep/fdmg-ts-react-ab)
[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors)
[![Coverage Status](https://coveralls.io/repos/github/FDMediagroep/fdmg-ts-react-ab/badge.svg?branch=master)](https://coveralls.io/github/FDMediagroep/fdmg-ts-react-ab?branch=master)
[![npm version](https://badge.fury.io/js/%40fdmg%2Fab.svg)](https://badge.fury.io/js/%40fdmg%2Fab)
[![Greenkeeper badge](https://badges.greenkeeper.io/FDMediagroep/fdmg-ts-react-ab.svg)](https://greenkeeper.io/)

# fdmg-ab

A/B testing component

# Demo

-   https://fdmg-ts-react-ab.fdmediagroep.now.sh/demo
-   Debug settings: https://fdmg-ts-react-ab.fdmediagroep.now.sh/demo?debugAB=true

# Installation

-   Run `npm i -D @fdmg/ab`

# Usage

```
import { Experiment, Variant, ABProvider } from "@fdmg/ab";
...
    <ABProvider>
...
        <Experiment
            name="Globally unique experiment name"
            debugUriParam="ABdebug=true"
            onClick={console.log}
            onRunExperiment={console.log}
        >
            <Variant name="A" onClick={console.log}>
                <h1>Headline 1</h1>
            </Variant>
            <Variant name="B" onClick={console.log}>
                <h1>Headline 2</h1>
            </Variant>
        </Experiment>
...
    </ABProvider>
...
```

## <ABProvider>

ABProvider component provides a context which manages cookies. The cookies are used to store variants shown to the user
so subsequent visits show the same variants for that user.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="http://www.willim.nl"><img src="https://avatars1.githubusercontent.com/u/974906?v=4" width="100px;" alt="Willem Liu"/><br /><sub><b>Willem Liu</b></sub></a><br /><a href="https://github.com/FDMediagroep/fdmg-ts-react-ab/commits?author=willemliu" title="Code">💻</a> <a href="https://github.com/FDMediagroep/fdmg-ts-react-ab/commits?author=willemliu" title="Documentation">📖</a> <a href="#example-willemliu" title="Examples">💡</a> <a href="#maintenance-willemliu" title="Maintenance">🚧</a></td>
    <td align="center"><a href="http://www.willemliu.nl"><img src="https://avatars0.githubusercontent.com/u/5611802?v=4" width="100px;" alt="Willem Liu"/><br /><sub><b>Willem Liu</b></sub></a><br /><a href="https://github.com/FDMediagroep/fdmg-ts-react-ab/commits?author=willemliufdmg" title="Code">💻</a> <a href="https://github.com/FDMediagroep/fdmg-ts-react-ab/commits?author=willemliufdmg" title="Documentation">📖</a> <a href="#example-willemliufdmg" title="Examples">💡</a> <a href="#maintenance-willemliufdmg" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://greenkeeper.io/"><img src="https://avatars2.githubusercontent.com/u/13812225?v=4" width="100px;" alt="Greenkeeper"/><br /><sub><b>Greenkeeper</b></sub></a><br /><a href="https://github.com/FDMediagroep/fdmg-ts-react-ab/commits?author=greenkeeperio" title="Code">💻</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!