const blockAds = obj => {
	Object.values(obj).forEach(block => {
		if (block && block.style.display !== 'none') block.style.display = 'none'
	})
}

const adsClear = setInterval(() => {
	const adsFields = {
		leftBlockWithAds: document.querySelector('#ads_left'),
		audioBanner: document.querySelector('.CatalogSection'),
		appsBlock: document.querySelector('.apps_feedRightAppsBlock'),
		feedBlock: document.querySelector('#feed_blog_reminder'),
		shortVideoStub: document.querySelector('.ShortVideoStub'),
	}

	blockAds(adsFields);
}, 500)
