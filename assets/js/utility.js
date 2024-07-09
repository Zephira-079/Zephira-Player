
function get_filename(abs_path) {
    const full_path = abs_path.split(/[/\\]/)
    const file_name = full_path[full_path.length - 1]
    const name_parts = file_name.split('.')

    const track_name = name_parts.length > 1 ? name_parts.slice(0, -1).join('.') : file_name

    return track_name
}

function extractImageFromVideo(abs_path) {
    return new Promise((resolve, reject) => {
        const video_tag = document.createElement('video')
        video_tag.src = abs_path
        video_tag.crossOrigin = 'anonymous'
        video_tag.preload = 'metadata'

        video_tag.addEventListener('loadedmetadata', () => {
            const canvas = document.createElement('canvas')
            const ctx = canvas.getContext('2d')
            canvas.width = video_tag.videoWidth
            canvas.height = video_tag.videoHeight

            video_tag.currentTime = 10

            video_tag.addEventListener('seeked', () => {
                ctx.drawImage(video_tag, 0, 0, canvas.width, canvas.height)
                const imageDataURL = canvas.toDataURL('image/png')
                canvas.remove()
                resolve(imageDataURL)
            })

            video_tag.addEventListener('error', (err) => {
                reject(err)
            })
        })

        video_tag.addEventListener('error', (err) => {
            reject(err)
        })
    })
}

function sleep(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000))
}

function getLocalStorage(key) {
    return new Promise((resolve, reject) => {
        try {
            const item = localStorage.getItem(key)
            if (item === null || item === undefined) {
                resolve(null)
            } else {
                resolve(item)
            }
        } catch (error) {
            console.error(`Error getting item from localStorage: ${error.message}`)
            reject(error)
        }
    })
}

function setLocalStorage(key, value) {
    return new Promise((resolve, reject) => {
        try {
            localStorage.setItem(key, value)
            resolve()
        } catch (error) {
            console.error(`Error setting item into localStorage: ${error.message}`)
            reject(error)
        }
    })
}

async function retrieveContent(filePath) {
    try {
        const response = await fetch(filePath)
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText)
        }
        const data = await response.text()
        return data
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error)
    }
}

async function retrieveXMLContent(filePath) {
    try {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", filePath, true);
        xhr.send();
        
        return new Promise((resolve, reject) => {
            xhr.onreadystatechange = function () {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        resolve(xhr.responseText);
                    } else {
                        reject(new Error('Network response was not ok ' + xhr.statusText));
                    }
                }
            };
        });
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

function pauseAndWait(mediaElement) {
    // async version for mediaElement.pause()
    return new Promise((resolve, reject) => {
        mediaElement.pause()

        if (mediaElement.paused) {
            resolve()
        } else {
            const onPause = () => {
                mediaElement.removeEventListener('pause', onPause)
                resolve()
            }
            mediaElement.addEventListener('pause', onPause)
        }
    })
}

function isValidURL(string) {
    try {
        new URL(string)
        return true
    } catch (_) {
        return false
    }
}
