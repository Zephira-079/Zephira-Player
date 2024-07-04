const media_player_event = document.querySelector("[data-media_player_event]")
const media_curation_event = document.querySelector("[data-media_curation_event]")

// wrapper
const media_wrapper = document.querySelector("[data-media_wrapper]")
const curation_wrapper = document.querySelector("[data-curation_wrapper]")

// media_wrapper.style.display = "none"


media_player_event.addEventListener("click", () => {
    hideAllWrapper() 
    media_wrapper.style.display = "flex"
})
media_curation_event.addEventListener('click', () => {
    hideAllWrapper() 
    curation_wrapper.style.display = "block"
})

function hideAllWrapper() {
    const all_wrapper = [media_wrapper, curation_wrapper]
    all_wrapper.forEach(wrapper => {
        wrapper.style.display = "none"
    })
}


