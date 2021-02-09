import { render } from "@testing-library/react";
import React from 'react';

interface IAltProps {
    link: string;
}

const Alt: React.FunctionComponent<IAltProps> = (props) => {
    return (
        <React.Fragment>
            <div>Alt</div>
            <a href="asdasd">{props.link}</a>
        </React.Fragment>
    );
}

export default Alt;