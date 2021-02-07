import React, { Component } from 'react';
import PropTypes from 'prop-types';

interface INumbersProps {
    numbers: { id: number, number: number }[],
    removeNumber: (id: number) => void
}

export class Numbers extends Component {

    static propTypes = {
        numbers: PropTypes.array.isRequired,
        removeNumber: PropTypes.func.isRequired
    }

    removeNumber = (id: number) => {
        const { removeNumber } = this.props as INumbersProps;
        removeNumber(id);
    }

    render() {
        const { numbers } = this.props as INumbersProps
        return (
            <>
                <div>
                    {
                        numbers.map(x => {
                            return (
                                <>
                                    <div id={x.id + ""}>
                                        {x.number}
                                    </div>
                                    <button onClick={this.removeNumber.bind(this, x.id)}>Del</button>
                                </>
                            )
                        })
                    }
                </div>
                <br />
            </>
        )
    }
}

export default Numbers
