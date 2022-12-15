const express = require('express')
const server = express.Router()
const { getMedia } = require('../../../Controllers/index.js')
const { getAventuras } = require('../../../Functions/index.js')

server.get('/', (req, res) => {
    res.send(getMedia())
})

server.get('/aventuras', (req, res) => {
    res.send(getAventuras())
})

server.get('/:id',(req, res) => {
    let {id} = req.params
    let media  = getMedia().find(el => el.id === +id)
    if (media) return res.send(media)
    res.status(400).send("El id ingresado es incorrecto")
})

// server.post('/:titulo', (req, res)=>{
//     let {titulo} = req.params
//     let {artista} = req.query
//     let {typeMedia} = req.body

//     if (!titulo || !artista) return res.status(400).json({error: "Datos incompletos"})

//     media.push({id: id++, titulo, artista, typeMedia})
//     res.send(media)
// })

// server.post('/:titulo/:artista', (req, res)=>{
//     let {titulo, artista} = req.params
//     let {typeMedia} = req.body

//     addMedia({id: id++, titulo, artista, typeMedia})
//     res.send(getMedia())
// })

module.exports = server