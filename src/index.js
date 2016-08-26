import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import jsonp from 'jsonp';
import WPQuery from './actions/wpsearch';
import SearchBar from './components/SearchBar';

class App extends Component {
	constructor(props) {
		super(props);

		// Initialise state
		this.state = { articles: [] };

		// component will render with its state equal to the Wikipedia Query result
		jsonp(WPQuery({action: 'opensearch', search:'shark'}), null, (err, articles) => {
			if (err) {
				console.error(err.message);
			} else {
				this.setState({ articles })
				console.log(this.state);
			}
		});
	}

	render() {
		return (
			<SearchBar />
		)
	}
}

ReactDOM.render(<App />, document.querySelector('.container'))
