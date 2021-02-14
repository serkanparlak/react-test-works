import React, { Component } from 'react';

export interface IUser {
    id: number,
    name: string,
    surname: string,
    birthday?: string
}

export interface IUserContext {
    users: IUser[]
}

const users: IUser[] = [
    { id: 1, name: 'Serkan', surname: 'Parlak', birthday: '21.08.1994' },
    { id: 2, name: 'Ahmet Fatih', surname: 'Avcı', birthday: '21.08.1994' },
    { id: 3, name: 'Mesut', surname: 'Yılmaz', birthday: '21.08.1994' },
];

const UserContext = React.createContext<IUserContext>({
    users: users
});

export class UserProvider extends Component<any, IUserContext> {
    constructor(props: any) {
        super(props)
        this.state = {
            users
        }
    }

    render() {
        return (
            <UserContext.Provider value={this.state}>
                { this.props.children }
            </UserContext.Provider>
        )
    }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;