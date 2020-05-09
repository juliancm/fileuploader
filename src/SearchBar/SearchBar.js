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
                    <SearchBox />
                    <FilterOptions />
                </div>
            </div>
        )
    }
}

export default SearchBar