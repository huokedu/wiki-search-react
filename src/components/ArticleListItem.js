import React from 'react'

// use article from props.article and delcare a new variable called article
const ArticleListItem = ({ article }) => {

	return (
		<li className="list-group-item">
			<div className="header">{article.title}</div>
			<div className="description" dangerouslySetInnerHTML={{__html:article.snippet}}></div>
		</li>
	)
}

export default ArticleListItem
