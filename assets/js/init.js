window.onload = function() {
    // fetch, storage, get, ...etc
    OnLoadRequireJS('./assets/js/utility.js')

    // media_manager
    OnLoadRequireJS('./assets/js/media_manager.js')

    // curation
    OnLoadRequireJS('./assets/js/curation.js')

    // activities
    OnLoadRequireJS("./assets/js/activity.js")

    // intersection observer
    OnLoadRequireJS("./assets/js/observer.js")

    // config
    OnLoadRequireJS('./assets/js/config.js')

}

function OnLoadRequireJS(path) {
    const app = document.createElement("script")
    app.src = `${path}`
    document.head.appendChild(app)
}