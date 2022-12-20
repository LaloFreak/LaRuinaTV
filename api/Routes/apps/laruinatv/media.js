const express = require('express')
const server = express.Router()
const { getMedia } = require('../../../Controllers/index.js')

server.get('/', async (req, res) => {
    const media = await getMedia()
    return res.status(200).send(media)
})

server.get('/:id', (req, res) => {
    let {id} = req.params
    let media = getMedia().find(el => el.id === +id)
    if (media) return res.send(media)
    res.status(400).send("El id ingresado es incorrecto")
})

module.exports = server