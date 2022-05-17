const fs = require('fs')
const path = require('path')
const express = require('express')
const bp = require('body-parser')
const MarkdownIt = require('markdown-it'),
    md = new MarkdownIt();
const app = express()

const dir = 'pub'
const files = fs.readdirSync(dir)

app.use(express.static('pub'))
app.use(bp.json())
app.use(bp.urlencoded({
    extended: true
}))

app.listen(3000, () => {
    console.log("Escuchando en: http://localhost:3000")
})

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'index.html'))
})

app.post('/', (request, response) => {
    console.log(request.body )
    let markDownText = request.body.text
    console.log(markDownText)
    let htmlText = md.render(markDownText)
    response.setHeader('Content-Type', 'application/json')
    response.end(JSON.stringify({
        text: htmlText
    }))

})
app.post('/createFile', (request, response) => { 

    console.log(request.body)
    let name = request.body.title;
    let text = request.body.value;
    console.log(name)
    console.log(text)
    fs.writeFile('pub/files_mark/'+name+'.md',text+'',function (err) {
        if (err) throw err;
       console.log('File is created successfully.');
     });
} )

app.get('/mostrar', (request, response) => {
    console.log("Se ejecuto mostrar")
    response.setHeader('Content-Type', 'application/json')
    response.json({
        text: files
    })    
    console.log("Se terminó de ejecutar")
})
