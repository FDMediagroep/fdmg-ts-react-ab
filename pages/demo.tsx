import React from 'react';
import { ABProvider, Experiment, Variant } from '../components/ab';
import { parseCookies } from 'nookies';

interface Props {
    cookies: { [cookieName: string]: string };
}

function Demo(props: Props) {
    return (
        <ABProvider initialState={props.cookies}>
            <Experiment name="ab-testing-demo" debugUriParam="debugAB=true">
                <Variant name="headline-variant-1">
                    <h1>Headline variant 1</h1>
                </Variant>
                <Variant name="headline-variant-2">
                    <h1>Headline variant 2</h1>
                </Variant>
                <Variant name="headline-variant-3">
                    <h1>Headline variant 3</h1>
                </Variant>
                <Variant name="headline-variant-4">
                    <h1>Headline variant 4</h1>
                </Variant>
            </Experiment>
            <p>
                Above headlines are wrapped in an experiment. The possible
                outcomes are
                <ul>
                    <li>`Headline variant 1`</li>
                    <li>`Headline variant 2`</li>
                    <li>`Headline variant 3`</li>
                    <li>`Headline variant 4`</li>
                </ul>
            </p>
            <p>
                Once you visit this page a variant will be chosen (client-side)
                and the value set will be set in a cookie. This makes sure that
                your subsequent visits will show you the same outcome. If you
                want to re-roll the outcome you can simply remove the cookie and
                revisit the page.
            </p>
            <p>
                You can also turn on the debug settings by adding `debugAB=true`
                as URL parameter to the URL.
            </p>
            <p>
                Once the cookie has been set it is available server-side. This
                allows us to already render the chosen variant on the
                server-side. Giving the user a faster first-meaningful-paint
                upon subsequent visits.
            </p>
        </ABProvider>
    );
}

Demo.getInitialProps = async (ctx) => {
    return { cookies: parseCookies(ctx) };
};

export default Demo;
