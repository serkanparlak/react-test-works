import React, { Component } from 'react';
import { IUser } from '../contexts/UserContext';

export default class User extends Component<IUser> {
    render() {
        const { name, surname, birthday } = this.props;

        return (
            <div>
                <h3>{ name } { surname }</h3>
                <span>{ birthday }</span>
                <hr/>
            </div>
        )
    }
}
