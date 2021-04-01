const adsBlocks = [
    '#ads_left',
    '.apps_feedRightAppsBlock',
    '#feed_blog_reminder',
    '.ShortVideoStub'
]

const hideAds = () => {
    const style = document.createElement('style')

    adsBlocks.forEach(selector => {
        style.insertAdjacentHTML('beforeend', `
            ${selector} {
                display: none!important;
            }
        `)
    })

    document.head.insertAdjacentElement('beforeend', style)
}

hideAds()