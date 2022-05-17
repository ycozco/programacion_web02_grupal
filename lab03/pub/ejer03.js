function createFile(){
    const url = 'http://localhost:3000/createFile'
    const data = {
        title: document.getElementById('name').value,
        value: document.getElementById('text').value
    }
    console.log(data)
    const request = {
        method: 'POST', // Podría ser GET
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }
    http = fetch(url, request)

    }
    document.addEventListener('DOMContentLoaded', function () {
    })