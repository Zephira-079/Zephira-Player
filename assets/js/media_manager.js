const media_audio = new Audio() 
const media_visual = document.querySelector("[data-media_visual]")

const media_list = document.querySelector("[data-media_list]")

const media_visual_label = document.querySelector("[data-media_visual_label]")
const media_cover = document.querySelector("[data-media_cover]")
const media_title = document.querySelector("[data-media_title]")

const media_progress = document.querySelector("[data-media_progress]")

async function play(abs_path) {
    // media_audio.src = encodeURIComponent(abs_path)
    // await media_audio.play()

    media_visual.src = encodeURI(abs_path)
    media_visual_label.textContent = get_filename(abs_path)

    media_cover.src = await extractImageFromVideo(abs_path)
    media_title.textContent = get_filename(abs_path)
    await media_visual.play()
}

async function add_track(abs_path) {
    const media_track = document.createElement("div")
    media_track.setAttribute("class","media_track")
    media_track.dataset.src = `${abs_path}`

    const track_visual = document.createElement("img")
    track_visual.setAttribute("class", "track_visual")
    track_visual.src = `${await extractImageFromVideo(abs_path)}`
    track_visual.loading = "lazy"
    track_visual.alt = ""
    track_visual.onerror = function () {
        this.onerror = null
        this.src = get_poster()
    }

    const track_title = document.createElement("div")
    track_title.setAttribute("class","track_title")
    track_title.textContent = get_filename(abs_path)

    media_track.append(track_visual, track_title)
    media_list.append(media_track)

}

media_visual.addEventListener("ended",async () => {
    await play(media_list.children[0].dataset.src)
    media_list.children[0].remove()
})
media_cover.onerror = function() {
    this.onerror = null
    this.src = get_poster()
}
media_visual.addEventListener('timeupdate', (e) => {
    const videoElement = e.target
    media_progress.value = (videoElement.currentTime / videoElement.duration) * 100
})
media_progress.addEventListener("input", (e) => {
    media_visual.currentTime = media_visual.duration * (e.target.value / 100)
})