import React, { Component } from 'react';

interface IUstProps {
    alt: JSX.Element,
}

const Ust: React.FunctionComponent<IUstProps> = (props) => {
    return (
        <div>
            <h4>Ust</h4>
            {/* {alt.props.map((x: any) => <div>{x}</div>)} */}
            { props.alt }
        </div>
    )
}

export default Ust;