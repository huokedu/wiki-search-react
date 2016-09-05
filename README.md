# WikiWiz
_Incremental Search for Wikipedia Articles_

![React Logo](http://codrspace.com/site_media/media/b66d60cc1ec21.png)
![Babel Logo](http://www.programwitherik.com/content/images/2015/07/babel.png)
![Webpack Logo](http://jstherightway.org/assets/img/webpack-logo.png)


## API
![Wikimedia Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Notification-icon-MediaWiki-logo.svg/200px-Notification-icon-MediaWiki-logo.svg.png)
**MediaWiki**

----

## Notes
This is not a complete app, and I have created it with the main purpose of re-implementing Wikipedia's mobile progressive search dropdown.
The `<ArticleDetail>` component is mainly for testing the [MediaWiki API](https://www.mediawiki.org/wiki/API:Main_page). I wanted to get different information for the first result and will have to think of how to best implement this from an UX perspective.

----

## Todo
- [ ] Hide `<ArticleDetail>` when no description exists. Currently it looks broken if no image exists for the searched article.
- [ ] Show a default image fallback image for `<ArticleListItem>`
- [ ] Implement Redux

----

#### Thanks
I would like to recommend Stephen Grider's Udemy course [Modern React with Redux](https://www.udemy.com/react-redux/) as it helped me quite a bit in getting this done.
