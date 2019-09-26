import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Experiment, Variant } from '../../components/ab';

describe('Experiment', () => {
    test('should render correctly', async () => {
        const { getByText } = render(
            <Experiment name="Test experiment" pickVariant={() => 0}>
                <Variant name="1">
                    <h1>Headline 1</h1>
                </Variant>
                <Variant name="2">
                    <h1>Headline 2</h1>
                </Variant>
            </Experiment>
        );
        expect(getByText('Headline 1', { exact: false })).toBeTruthy();
    });
});
