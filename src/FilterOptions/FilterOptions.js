import React, { Component } from 'react'

class FilterOptions extends Component {
    render() {
        return (
            <div>
                <div>
                    <label>
                        <input
                            type='radio'
                            value='All'
                            id='All'
                            name='filter'
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
                        />
                        New
                    </label>
                </div>
            </div>
        )
    }
}

export default FilterOptions