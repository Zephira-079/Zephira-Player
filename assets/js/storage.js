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

