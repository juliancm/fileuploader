import React, { Component } from 'react'
import SearchBox from '../SearchBox/SearchBox'
import FilterOptions from '../FilterOptions/FilterOptions'

class SearchBar extends Component {
    render() {
        return(
            <div>
                <div>
                    <h1>File Uploader</h1>
                </div>
                <div>
                    <SearchBox searchTerm={this.props.searchTerm} handleUpdate={this.props.handleUpdate}/>
                    <FilterOptions  filterOption={this.props.filterOption} handleFilterChange={option => this.props.handleFilterChange(option)}/>
                </div>
            </div>
        )
    }
}

export default SearchBar