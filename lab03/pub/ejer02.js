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
                text += '<li><a href="http://localhost:3000/' + data.text[i] + '">' + data.text[i] + '</a></li>';
            }
            text += '</ul>';
            
            document.querySelector("#lista").innerHTML = text;
        }
    )
}
