const fs = require('fs')
const path = require('path')
const express = require('express')
const bp = require('body-parser')
const MarkdownIt = require('markdown-it'),
    md = new MarkdownIt();
const app = express()

const cors = require('cors');


app.use(express.static('pub'))
app.use(bp.json())
app.use(cors());
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
    console.log(request.body)
    let markDownText = request.body.text
    console.log(markDownText)
        fs.readFile(path.resolve(__dirname, 'markdown_files/' + markDownText), 'utf8',
            (err, data) => {
                if (err) {
                    console.error(err)
                    response.status(500).json({
                        error: 'message'
                    })
                    return
                }
                response.setHeader('Content-Type', 'application/json')
                response.end(JSON.stringify({
                    text: data
                }))

            })
})

//Ejercicio 2

app.get('/listarMarkdown', (request, response) => {
    fs.readdir(path.resolve(__dirname, 'markdown_files'), 'utf8',
        (err, data) => {
            if (err) {
                console.error(err)
                response.status(500).json({
                    error: 'message'
                })
                return
            }
            response.json({
                text: data
            })
        })
    //
})
app.get('/mostrar', (request, response) => {
    fs.readFile(path.resolve(__dirname, 'markdown_files/' + markdownFile), 'utf8',
        (err, data) => {
            if (err) {
                console.error(err)
                response.status(500).json({
                    error: 'message'
                })
                return
            }
            response.json({
                text: data
            })
        })
    //
})
