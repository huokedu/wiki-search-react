import React from 'react'

// use article from props.article and delcare a new variable called article
const ArticleListItem = ({ article }) => {

	// ternary conditions can be used within JSX.
	// NOTE: article.title => link: link to wikipedia page should work with article.title,
	// automatically replacing spaces with '_', but I do this manually here to be safe.
	// NOTE: article.terms:check if article contains a prop called 'term', if so, render article.terms.description
	return (
		<a className="suggestion-link" href={`//en.wikipedia.org/wiki/${article.title.replace(/ /g,'_')}`}>
			<div className="suggestion-text">
				<h3 className="suggestion-title"><em className="suggestion-highlight">{article.title}</em></h3>
				{article.hasOwnProperty('terms') ? <p className="suggestion-description">{article.terms.description}</p> : null}
			</div>
			<div className="suggestion-thumbnail" style={{backgroundImage: `url(${article.thumbnail.source})`}}></div>
		</a>
	)
}

export default ArticleListItem
