import React from 'react'

// use article from props.article and delcare a new variable called article
const ArticleListItem = ({ article }) => {

	return (
		<li className="list-group-item">
			<img src={article.thumbnail.source} height={article.thumbnail.height} width={article.thumbnail.width}/>
			<div className="header">{article.title}</div>
			{/* <div className="description">{article.terms["description"]}</div> */}
		</li>
	)
}

export default ArticleListItem
