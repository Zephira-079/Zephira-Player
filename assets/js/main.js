window.onload = function() {

}

function OnLoadRequireJS(path) {
    const app = document.createElement("script")
    app.src = `${path}`
    document.head.appendChild(app)
}