[![Build Status](https://travis-ci.org/FDMediagroep/fdmg-ts-react-ab.svg?branch=master)](https://travis-ci.org/FDMediagroep/fdmg-ts-react-ab)
[![Coverage Status](https://coveralls.io/repos/github/FDMediagroep/fdmg-ts-react-ab/badge.svg?branch=master)](https://coveralls.io/github/FDMediagroep/fdmg-ts-react-ab?branch=master)
[![npm version](https://badge.fury.io/js/%40fdmg%2Fab.svg)](https://badge.fury.io/js/%40fdmg%2Fab)
[![Greenkeeper badge](https://badges.greenkeeper.io/FDMediagroep/fdmg-ts-react-ab.svg)](https://greenkeeper.io/)

# fdmg-ab

A/B testing component

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
