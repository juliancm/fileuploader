import React, { Component } from 'react'

class FilterOptions extends Component {
    render() {
        const { filterOption } = this.props;
        return (
            <div>
                <div>
                    <label>
                        <input
                            type='radio'
                            value='All'
                            id='All'
                            name='filter'
                            checked={filterOption === 'All'}
                            onChange={e => this.props.handleFilterChange(e.target.value)}
                        />
                        All
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type='radio'
                            value='Uploaded'
                            id='Uploaded'
                            name='filter'
                            checked={filterOption === 'Uploaded'}
                            onChange={e => this.props.handleFilterChange(e.target.value)}
                        />
                        Uploaded
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type='radio'
                            value='Synced'
                            id='Synced'
                            name='filter'
                            checked={filterOption === 'Synced'}
                            onChange={e => this.props.handleFilterChange(e.target.value)}
                        />
                        Synced
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type='radio'
                            value='New'
                            id='New'
                            name='filter'
                            checked={filterOption === 'New'}
                            onChange={e => this.props.handleFilterChange(e.target.value)}
                        />
                        New
                    </label>
                </div>
            </div>
        )
    }
}

export default FilterOptions