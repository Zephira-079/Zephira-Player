const curation_icon_collection = document.querySelector("[data-curation_icon_collection]")


function icon_collection(label) {
    const curation_icons_wrapper = document.createElement("div")
    curation_icons_wrapper.setAttribute("class", "curation_icons_wrapper")

    const curation_label = document.createElement("div")
    curation_label.setAttribute("class", "curation_label")
    curation_label.textContent = label

    const curation_container = document.createElement("div")
    curation_container.setAttribute("class", "curation_container")

    curation_icons_wrapper.append(curation_label, curation_container)


    return {
        self() {
            return curation_icons_wrapper
        }, 
        async add_curation(abs_path) {

            const curation_frame = document.createElement("div")
            curation_frame.setAttribute("class", "curation_frame")
            curation_frame.setAttribute("data-curation_name", get_filename(abs_path))
        
            const curation_preview = document.createElement("video")
            curation_preview.setAttribute("class", "curation_preview")
            curation_preview.src = `${abs_path}`
            curation_preview.currentTime = 10
            // curation_preview.preload = "none"
            curation_preview.dataset.src = `${abs_path}`
            curation_preview.poster = get_poster()

            const curation_add = document.createElement("div")
            curation_add.setAttribute("class", "curation_add")
            curation_add.textContent = "+"

            curation_frame.append(curation_preview, curation_add)
            curation_container.append(curation_frame)

            curation_frame.addEventListener("mouseover", async () => {
                // this wasn't even here "pauseAndWait"
                // await pauseAndWait(curation_preview)
                await curation_preview.play()
            })
            curation_frame.addEventListener("mouseout", async () => {
                // curation_preview.pause()
                await pauseAndWait(curation_preview)
                curation_preview.currentTime = 10
            })
            curation_preview.addEventListener("click",async (e) => {
                await play(abs_path)
            })
            curation_add.addEventListener("click",async (e) => {
                await add_track(abs_path)
            })
        },
        remove_curation(index) {
            curation_container.children[index].remove()
        },
        remove_all() {
            curation_container.replaceChildren()
        },
        change_name(text) {
            curation_label.textContent = text
        }
    }
}



