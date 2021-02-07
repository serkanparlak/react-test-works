import React, { Component } from 'react';
import PropTypes from 'prop-types';

interface IClockProps {
    times: string[]
}

export class Clock extends Component {

    static propTypes = {
        times: PropTypes.array.isRequired
    }

    render() {
        const {times} = this.props as IClockProps
        return (
            <div>
                {
                    times.map(x => {
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
