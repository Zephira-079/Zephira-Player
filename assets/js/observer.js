const callback = async function(mutationsList, observer) {
    for (const mutation of mutationsList) {
        if (mutation.type === 'childList' && media_list.children.length == 1 && media_visual.ended) {
            const mediaElement = media_list.children[0]
            await play(mediaElement.dataset.src)
            mediaElement.remove()
        }
    }
}

const mutationObserver = new MutationObserver(callback)
mutationObserver.observe(media_list, { childList: true, subtree: true })
