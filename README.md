[![Build Status](https://travis-ci.org/FDMediagroep/fdmg-ts-react-ab.svg?branch=master)](https://travis-ci.org/FDMediagroep/fdmg-ts-react-ab)
[![Coverage Status](https://coveralls.io/repos/github/FDMediagroep/fdmg-ts-react-ab/badge.svg?branch=master)](https://coveralls.io/github/FDMediagroep/fdmg-ts-react-ab?branch=master)
[![npm version](https://badge.fury.io/js/%40fdmg%2Ffdmg-ab.svg)](https://badge.fury.io/js/%40fdmg%2Ffdmg-ab)
[![Greenkeeper badge](https://badges.greenkeeper.io/FDMediagroep/fdmg-ts-react-ab.svg)](https://greenkeeper.io/)

# fdmg-ab

A/B testing component

# Installation

-   Run `npm i -D @fdmg/ab`

# Usage

```
import { Variant } from "../components/AB/Variant";
import { Experiment } from "../components/AB/Experiment";
import { ABProvider } from "../components/AB/ABProvider";

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
```
