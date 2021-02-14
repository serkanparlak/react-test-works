import React, { Component } from 'react'
import UserConsumer from '../contexts/UserContext'
import User from './User'

export default class UserWrapper extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    value => {
                        const { users } = value;
                        return (
                            <div>
                                {
                                    users.map(user =>
                                        <User
                                            key={user.id}
                                            id={user.id}
                                            name={user.name}
                                            surname={user.surname}
                                            birthday={user.birthday}
                                        ></User>
                                    )
                                }
                            </div>
                        )
                    }
                }
            </UserConsumer>
        )
    }
}
