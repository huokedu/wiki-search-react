import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props){
		super(props)
		this.state = { term: '' }
	}

	// function to be called when user begins typing into input field
	onInputChange(term) {
		// FIXME: to prevent errors, do not run search with empty string
		if(term !== ''){
			// on change, we set the state to term
			this.setState({term})
			// and call onSearchTermChange which comes from index.js
			// we pass event.target.value to that function
			this.props.onSearchTermChange(term)
		}
	}

	render () {
		return <input className="search-input" name="search"
		onChange={event => this.onInputChange(event.target.value)} />
	}

}

export default SearchBar
