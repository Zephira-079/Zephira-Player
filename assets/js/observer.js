const mediaListCallback = async function (mutationsList, observer) {
    for (const mutation of mutationsList) {
        if (
            (mutation.type === 'childList' && media_list.children.length == 1 && media_visual.ended)
            ||
            (mutation.type === 'childList' && media_list.children.length == 1 && !media_visual.getAttribute("src"))
        ) {
            const mediaElement = media_list.children[0]
            await play(mediaElement.dataset.src)
            mediaElement.remove()
        }
    }
}

const mediaListObserver = new MutationObserver(mediaListCallback)
mediaListObserver.observe(media_list, { childList: true, subtree: true })



const iconCurationWatchList = document.querySelectorAll(".curation_preview")
const intersectionCallback = (entries, observer) => {
    entries.forEach(async entry => {
        if (entry.isIntersecting) {
            entry.target.preload = "auto"
            entry.target.currentTime = 10
        } else {
            entry.target.preload = "none"
        }
        entry.target.src = entry.target.dataset.src
        await sleep(.1)
    })
}
const watchListObserver = new IntersectionObserver(intersectionCallback, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
})

iconCurationWatchList.forEach(target => watchListObserver.observe(target))