import React from 'react'

const ArticleDetail = ({ article }) => {

	if(!article) {
		return <div>Loading...</div>
	}

	return (
		<div className="article-detail">
			<div className="embed-responsive">
				<iframe
					src={`http://en.wikipedia.org/wiki/${article.title}`}
					frameborder="0" width="100%"
					className="embed-responsive-item"
					style={{border: 'none'}}
					>
					</iframe>
			</div>
			<div className="details">
				<div></div>
				<div></div>
			</div>
		</div>
	)
}

export default ArticleDetail
