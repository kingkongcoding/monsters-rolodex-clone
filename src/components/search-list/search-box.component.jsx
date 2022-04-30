import { Component } from 'react';

class SearchBox extends Component {

    render() {
        return (
            <input
                clasName={this.props.className}
                type='search'
                placeholder={this.props.placeholder}
                onChange={this.props.onChangeHandler}
            />
        )
    }
}

export default SearchBox;