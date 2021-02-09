import { render } from "@testing-library/react";
import React from 'react';

interface IAltProps {
    asd: string;
}

function Alt({asd}: IAltProps) {
    return (
        <React.Fragment>
            <div>Alt</div>
            <a href="asdasd">{asd}</a>
        </React.Fragment>
    );
}

export default Alt;