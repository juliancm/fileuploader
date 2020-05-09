import React, {Component} from 'react'
import ListItem from '../ListItem/ListItem'

class FilterableList extends Component {
    render() {

        // take another look at this method

        const list = this.props.files.map((file, key) => <ListItem {...file} key={key}/>)
        return (
            <div>
                {list}
            </div>
        )
    }
}

FilterableList.defaultProps = {
    files: []
}

export default FilterableList