import React from 'react'

// use article from props.article and delcare a new variable called article
const ArticleListItem = ({ article }) => {

	// ternary conditions can be used within JSX.
	// check if article contains a prop called 'term', if so, render article.terms.description
	return (
		<li className="list-group-item">
			<img src={article.thumbnail.source} height={article.thumbnail.height} width={article.thumbnail.width}/>
			<div className="header">{article.title}</div>
			{article.hasOwnProperty('terms') ? <div className="description">{article.terms.description}</div> : null}
		</li>
	)
}

export default ArticleListItem
