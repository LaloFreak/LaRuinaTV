const express = require('express')
const server = express.Router()
const {getTales} = require('../Controllers/index.js')

server.get('/',(req,res)=>{
    let tale  = getTales()
    if (tale) return res.send(tale)
    res.status(400).send("El id ingresado es incorrecto")
})

server.get('/:id',(req, res) => {
    let {id} = req.params
    let tale  = getTales().find(el => el.id === +id)
    if (tale) return res.send(tale)
    res.status(400).send("El id ingresado es incorrecto")
})


module.exports = server