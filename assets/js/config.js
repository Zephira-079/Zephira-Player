const config_list = document.querySelector("[data-config_list]")
const add_config_instance = document.querySelector("[data-add_config_instance]")

function get_poster() {
    return "./assets/icons/Zephira.png"
}


async function createConfigInstance() {
    const config_instance = document.createElement("div")
    config_instance.setAttribute("class", "config_instance")

    const collection_id = crypto.randomUUID()
    const collection_name = document.createElement("label")
    collection_name.setAttribute("class", "config_label")
    collection_name.setAttribute("for", collection_id)
    collection_name.textContent = "collection name"

    const collection_name_input = document.createElement("input")
    collection_name_input.setAttribute("class", "config_inputfield")
    collection_name_input.id = collection_id
    collection_name_input.placeholder = "Ex: My Playlist"

    const config_sources = document.createElement("div")
    config_sources.setAttribute("class", "config_sources")

    const config_interactables = document.createElement("div")
    config_interactables.setAttribute("class", "config_interactables")

    const add_many = document.createElement("div")
    add_many.setAttribute("class", "config_interactable")
    add_many.textContent = "many"

    const add_only = document.createElement("div")
    add_only.setAttribute("class", "config_interactable")
    add_only.textContent = "only"

    const remove = document.createElement("div")
    remove.setAttribute("class", "config_interactable")
    remove.textContent = "X"

    config_instance.append(collection_name, collection_name_input, config_sources, config_interactables)

    config_interactables.append(add_many, add_only, remove)

    //

    const icon_curation = icon_collection(collection_name_input.value || "Music Curation Collection")
    curation_icon_collection.append(icon_curation.self())

    collection_name_input.addEventListener("input", (e) => {
        icon_curation.change_name(e.target.value)
    })

    //


    add_many.addEventListener("click", () => {
        const div = document.createElement("div")

        const config_source_id = crypto.randomUUID()
        const config_source_name = document.createElement("label")
        config_source_name.setAttribute("class", "config_label")
        config_source_name.setAttribute("for", config_source_id)
        config_source_name.textContent = "Source"

        const config_source_input = document.createElement("input")
        config_source_input.setAttribute("class", "config_inputfield")
        config_source_input.placeholder = "https://example.com/example.json "
        config_source_input.id = config_source_id

        const allocator_id = crypto.randomUUID()
        const allocator_name = document.createElement("label")
        allocator_name.setAttribute("class", "config_label")
        allocator_name.setAttribute("for", allocator_id)
        allocator_name.textContent = "Allocate Source"

        const allocator_input = document.createElement("input")
        allocator_input.setAttribute("class", "config_inputfield")
        allocator_input.placeholder = "Ex: ['list'][0]"
        allocator_input.id = allocator_id

        div.append(config_source_name, config_source_input, allocator_name, allocator_input)
        config_sources.append(div)
        
        let curation_list;
        `[
            "Gimme ya candy.mp4",
            "Koro  Madeon - All My Friends (Kagi Remix).mp4",
            "lapix - Day by day (PSYQUI Remix).mp4",
            "Mihka! X Kyoto Black – Kodokushi (孤独死).mp4",
            "Stay For A Night.mp4",
            "So in to you.mp4",
            "AImee.mp4",
            "blue roar.mp4",
            "snooze.mp4"
        ]`;

        `./assets/test`;
        
        config_source_input.addEventListener("input", () => {
            if (!isValidURL(config_source_input.value)) {
                try {
                    curation_list = JSON.parse(allocator_input.value)
                }
                catch {
                    curation_list = allocator_input.value.split(",")
                }
            }

            icon_curation.remove_all()
            curation_list.forEach(names => {
                icon_curation.add_curation(config_source_input.value + "/" + names)
            })
            console.log(curation_list)
        })

        allocator_input.addEventListener("input", () => {
            if (!isValidURL(config_source_input.value)) {
                try {
                    curation_list = JSON.parse(allocator_input.value)
                }
                catch {
                    curation_list = allocator_input.value.split(",")
                }
            }
            icon_curation.remove_all()
            curation_list.forEach(names => {
                icon_curation.add_curation(config_source_input.value + "/" + names)
            })
            console.log(curation_list)
        })
    })

    add_only.addEventListener("click", () => {

    })

    remove.addEventListener("click", () => {
        const current_config_sources = config_sources.children
        if (current_config_sources.length <= 0) {
            config_instance.remove()
            return
        }

        current_config_sources[current_config_sources.length - 1].remove()
    })
    
    return config_instance

}


add_config_instance.addEventListener("click",async () => {
    config_list.append(await createConfigInstance())
})
