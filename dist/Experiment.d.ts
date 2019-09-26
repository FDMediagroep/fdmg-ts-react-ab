import React from 'react';
import { Props as VariantProps } from './Variant';
import { Props as Variant } from './Variant';
interface Experiment {
    debugRoot?: HTMLElement;
    debugUriParam?: string;
    /**
     * Unique name of the Experiment.
     * Used in reporting.
     */
    name: string;
    onClick?: (event: React.MouseEvent<HTMLElement>, experimentName: string, variantName: string) => void;
    /**
     * This callback is executed when a Variant has been loaded
     */
    onRunExperiment?: (experimentName: string, variantName: string) => void;
    /**
     * Custom variant picker. By default a Variant is chosen with Math.random()
     * By providing your own function you can determine how a Variant is chosen.
     * Variants[] are the Variant components passed as children.
     * Return of the function is the index of the Variant to be run.
     */
    pickVariant?: (variants: React.ReactElement<Variant, any>[]) => number;
    children: React.ReactElement<VariantProps, any>[];
}
export declare function Experiment(props: Experiment): JSX.Element;
export {};
