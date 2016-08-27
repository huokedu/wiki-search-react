import React, { Component } from 'react'
import ArticleListItem from './ArticleListItem'

const ArticleList = (props) => {

	// return a new array of list items using timestamp as unique key
	const articleItems = props.articles.map((article) => {
		return <ArticleListItem article={article} key={article.timestamp} />
	})

	return (
		<ul className="list-group">
			{articleItems}
		</ul>
	)
}
export default ArticleList
