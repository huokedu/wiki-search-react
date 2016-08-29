import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import jsonp from 'jsonp'
import WPQuery from './actions/wpsearch'
import SearchBar from './components/SearchBar'
import ArticleList from './components/ArticleList'
import ArticleDetail from './components/ArticleDetail'

class App extends Component {
	constructor(props) {
		super(props)

		// Initialise state
		this.state = {
			articles: [],
			firstResult: null
		}


		// component will render with its state equal to the Wikipedia Query result
		jsonp(WPQuery({
			action:"query",
			format:"json",
			generator:"prefixsearch",
			prop:"pageprops|pageimages|pageterms|extracts",
			ppprop:"displaytitle",
			piprop:"thumbnail",
			pithumbsize:"160",
			pilimit:"6",
			exintro:"1",
			explaintext:"1",
			exsentences:"3",
			wbptterms:"description",
			gpssearch:"sharks",
			gpsnamespace:"0",
			gpslimit:"6"
		}), null, (err, articles) => {
			if (err) {
				console.error(err.message)
			} else {
				// convert returned objects into an array of objects to be consumed in ArticleList by ArticleListItem
				const resultArray = Object.keys(articles.query.pages).map((key) => articles.query.pages[key])
				this.setState({
					articles: resultArray,
					firstResult: resultArray[0]
				 })
			}
		});

	}

	render() {
		return (
				<div className="search-container">
					<form action="" className="pure-form" action="//www.wikipedia.org/search-redirect.php">
						<SearchBar />
						<ArticleDetail article={this.state.firstResult} />
						<ArticleList articles={this.state.articles} />
					</form>
				</div>
		)
	}
}

ReactDOM.render(<App />, document.querySelector('.container'))
