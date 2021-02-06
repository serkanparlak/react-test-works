import React, { Component } from 'react';
import PropTypes from 'prop-types';

interface IClockProps {
    title: number[]
}

export class Clock extends Component {

    static propTypes = {
        title: PropTypes.array.isRequired
    }

    render() {
        const {title} = this.props as IClockProps
        return (
            <div>
                {
                    title.map(x => {
                        return (
                        <div>
                            {x}
                        </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Clock
