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
			action:"query",
			format:"json",
			generator:"prefixsearch",
			prop:"pageprops|pageimages|pageterms",
			ppprop:"displaytitle",
			piprop:"thumbnail",
			pithumbsize:"160",
			pilimit:"6",
			wbptterms:"description",
			gpssearch:"sharks",
			gpsnamespace:"0",
			gpslimit:"6"
		}), null, (err, articles) => {
			if (err) {
				console.error(err.message)
			} else {
				// convert returned objects into an array of objects to be consumed in ArticleList by ArticleListItem
				const resultArray = Object.keys(articles.query.pages).map((k) => articles.query.pages[k])
				this.setState({ articles: resultArray })
			}
		});
	}

	render() {
		return (
			<div>
				<div className="row">
					<SearchBar />
				</div>
				<div className="row">
					<ArticleList articles={this.state.articles} />
    		</div>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.querySelector('.container'))
