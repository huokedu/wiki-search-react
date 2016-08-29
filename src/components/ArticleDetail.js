import React from 'react'

const ArticleDetail = ({ article }) => {

	if(!article) {
		return <div>Loading...</div>
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
