import { Component } from "react";

class SearchBox extends Component {
    render() {
        const { onChangeHandler } = this.props;
        return (
            <input 
            className='search-box' 
            type='search' 
            placeholder='Search Monsters' 
            onChange={onChangeHandler}
            />
        )
    }
}

export default SearchBox