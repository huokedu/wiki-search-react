import React from 'react'
import ArticleListItem from './ArticleListItem'

const ArticleList = ({articles}) => {

	console.log(articles)

	const articleItems = articles.map((article) => {
		return <ArticleListItem article={article} key={article.pageid} />
	})

	return (
		<div className="suggestion-dropdown">
			{articleItems}
		</div>
	)
}
export default ArticleList
