var text;
function listarMarkdown() {
    const url = 'http://localhost:3000/listarMarkdown'
    fetch(url).then(
        response => response.json()
    ).then(
        data => {
            var length = data.text.length;
            text = '<ul>';
            for (var i = 0; i < length; i++) {
                text += '<li><a href="http://localhost:3000/' + data.text[i] + '">' + data.text[i] + '</a></li><button onclick="' + 'recitar("' + data.text[i] + '")">mostrar</button>';
            }
            text += '</ul>';

            document.querySelector("#lista").innerHTML = text;
        }
    )
}
function recitar(markupText) {
    const url = 'http://localhost:3000/'
    const data = {
        text: markupText
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
    http.then(
        response => response.json()
    ).then(
        data => {
            document.querySelector("#htmlCode").innerHTML = data.text
        }
    )
}

document.addEventListener('DOMContentLoaded', function () {
    const text = document.querySelector('#markupText')
    document.querySelector('#markupForm').onsubmit = () => {
        recitar(text.value)
        return false;
    }
})
