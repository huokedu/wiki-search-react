import React from 'react'
import ArticleListItem from './ArticleListItem'

const ArticleList = ({articles}) => {

	console.log(articles)

	const articleItems = articles.map((article) => {
		return <ArticleListItem article={article} key={article.pageid} />
	})

	return (
		<ul className="col-md-6 list-group">
			{articleItems}
		</ul>
	)
}
export default ArticleList
