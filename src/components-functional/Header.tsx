import React, { useState } from 'react'

interface IHeader {
    title: string;
}

export default function Header(props: IHeader) {
    return (
        <div>
            <h3>{props.title}</h3>
        </div>
    )
}
