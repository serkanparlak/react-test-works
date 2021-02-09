import React, { Component } from 'react';

interface IUstProps {
    alt: JSX.Element,
}

function Ust({ alt }: IUstProps) {
    return (
        <div>
            <h4>Ust</h4>
            {/* {alt.props.map((x: any) => <div>{x}</div>)} */}
            { alt }
        </div>
    )
}

export default Ust;