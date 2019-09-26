import React from 'react';
interface Props {
    name: string;
    debugChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    open: boolean;
    handleClose: () => void;
    handleRemoveExperiment: (experimentName: string) => void;
    variant: number;
    [x: string]: any;
}
export declare function Debug(props: Props): JSX.Element;
export {};
