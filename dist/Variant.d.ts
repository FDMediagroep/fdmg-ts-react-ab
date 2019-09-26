import React from 'react';
export interface Props {
    name: string;
    onClick?: (event: React.MouseEvent<HTMLElement>, variantName: string) => void;
    onRunVariant?: (variantName: string) => void;
    [x: string]: any;
}
export declare function Variant(props: Props): JSX.Element;
