import React from 'react';
import SearchBar from './SearchBar/SearchBar'
import FilterableList from './FilterableList/FilterableList'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      searchTerm: 'cats',
      filterOption: 'Uploaded'
    }
  }

  updateSearchTerm(term) {
    this.setState({
      searchTerm: term
    })
  }

  updateFilterOption(option) {
    this.setState({
      filterOption: option
    })
  }

  render() {
    return (
      <div>
        <SearchBar
          searchTerm={this.state.searchTerm}
          filterOption={this.state.filterOption}
          handleUpdate={term=>this.updateSearchTerm(term)}
          handleFilterChange={option=>this.updateFilterOption(option)}
        />
        <FilterableList
          files={this.props.files}
          searchTerm={this.state.searchTerm}
          filterOption={this.state.filterOption} 
        />
      </div>
    )
  }
}

export default App;
