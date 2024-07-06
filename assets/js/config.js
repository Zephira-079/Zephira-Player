
function get_poster() {
    return "./assets/icons/Zephira.png"
}

const curation_config = (async () => {
    const curation_list = [
        "Gimme ya candy.mp4",
        "Koro  Madeon - All My Friends (Kagi Remix).mp4",
        "lapix - Day by day (PSYQUI Remix).mp4",
        "Mihka! X Kyoto Black – Kodokushi (孤独死).mp4",
        "Stay For A Night.mp4",
        "So in to you.mp4",
        "AImee.mp4",
        "blue roar.mp4",
        "snooze.mp4"
    ]


    let icon_curation = icon_collection("Music Curation Collection")
    curation_icon_collection.append(icon_curation.self())
    curation_list.forEach(names => {
        icon_curation.add_curation(`./assets/test/${names}`)
    })
})()