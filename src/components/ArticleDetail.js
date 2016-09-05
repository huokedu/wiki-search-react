import React from 'react'

const ArticleDetail = ({ article }) => {

	if(article === null) {
		return (
			<div>
				<div>Start typing to search</div>
				<br />
				<a href="https://secure.wikimedia.org/wikipedia/en/w/index.php?title=Special:Random">Read a random article.</a>
			</div>

		)
	}

	return (
		<div className="article-detail">
			<div className="article-detail-image">
				{article.thumbnail ? <img src={article.thumbnail.source} /> : null}
			</div>
			<div className="article-detail-extract">
				<div>{article.extract}</div>
				<div></div>
			</div>
		</div>
	)
}

export default ArticleDetail
