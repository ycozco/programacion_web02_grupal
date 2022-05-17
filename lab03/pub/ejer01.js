function showFiles() {
    const url = 'http://localhost:3000/mostrar'
    let files = "";
    const data = {
        text: files
    }
    const request = {
        method: 'POST', // Podría ser GET
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }
    
    fetch(url).then(
        response => response.json()).
    then(
        data => {
            console.log(data)
            let lista = ``;
            for(let clave in data.text){
                lista +='<li>'+clave+'</li><br>';
            }
            document.getElementById("#file").innerHTML = '<p>'+data.text+'</p>';
            console.log(data.text);
        }
        )
    }