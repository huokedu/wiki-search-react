import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import jsonp from 'jsonp'
import WPQuery from './actions/wpsearch'
import SearchBar from './components/SearchBar'
import ArticleList from './components/ArticleList'

class App extends Component {
	constructor(props) {
		super(props)

		// Initialise state
		this.state = { articles: [] }

		// component will render with its state equal to the Wikipedia Query result
		jsonp(WPQuery({
			action:'query',
			format:'json',
			list:'search',
			srsearch:'shark',
			srwhat:'text',
			utf8:1,
			formatversion:'latest',
			srprop:'timestamp|snippet'
		}), null, (err, articles) => {
			if (err) {
				console.error(err.message)
			} else {
				this.setState({ articles: articles.query.search })
				console.log(this.state.articles)
			}
		});
	}

	render() {
		return (
			<div>
				<SearchBar />
				<ArticleList articles={this.state.articles} />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.querySelector('.container'))
