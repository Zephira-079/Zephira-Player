const media_player_event = document.querySelector("[data-media_player_event]")
const media_curation_event = document.querySelector("[data-media_curation_event]")
const settings_curation_event = document.querySelector("[data-settings_curation_event]")

// wrapper
const media_wrapper = document.querySelector("[data-media_wrapper]")
const curation_wrapper = document.querySelector("[data-curation_wrapper]")
const settings_wrapper = document.querySelector("[data-settings_wrapper]")

// media_wrapper.style.display = "none"


media_player_event.addEventListener("click", () => {
    hideAllWrapper() 
    media_wrapper.style.display = "flex"
})
media_curation_event.addEventListener('click', () => {
    hideAllWrapper() 
    curation_wrapper.style.display = "block"
})
settings_curation_event.addEventListener('click', () => {
    hideAllWrapper() 
    settings_wrapper.style.display = "flex"
})

function hideAllWrapper() {
    const all_wrapper = [media_wrapper, curation_wrapper, settings_wrapper]
    all_wrapper.forEach(wrapper => {
        wrapper.style.display = "none"
    })
}


