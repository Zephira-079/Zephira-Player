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
