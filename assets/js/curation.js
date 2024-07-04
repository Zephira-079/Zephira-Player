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
        async add_curation(source) {
            const source_part = source.split(/[/\\]/)

            const curation_frame = document.createElement("div")
            curation_frame.setAttribute("class", "curation_frame")
            curation_frame.setAttribute("data-curation_name", source_part[source_part.length - 1])
        
            const curation_preview = document.createElement("video")
            curation_preview.setAttribute("class", "curation_preview")
            curation_preview.src = `${source}`
            curation_preview.currentTime = 10

            curation_frame.append(curation_preview)
            curation_container.append(curation_frame)

            curation_frame.addEventListener("mouseover", async () => {
                await curation_preview.play()
            })
            curation_frame.addEventListener("mouseout", async () => {
                curation_preview.pause()
                curation_preview.currentTime = 10
            })
        },
        remove_curation(index) {
            curation_container.children[index].remove()
        }
    }
}





