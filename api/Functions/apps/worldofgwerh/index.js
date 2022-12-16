const {APIKEY} = require('../../../misc/sounds/consts.js')
const axios = require('axios');
const AVENTURAS = require('../../../misc/Aventuras.json');
const { getElemUrlById } = require('../../googleapis.js');

function getAventuras(){
    return AVENTURAS
}

function pushTales(arr, idFolder){
    axios.get(`https://www.googleapis.com/drive/v3/files?q=%22${idFolder}%22%20in%20parents&key=${APIKEY}`)
    .then(res =>{
        db = res.data.files
        for(let i in db){
            let tale = {
                id: Number(i),
                attributes:
                {
                    name: db[i].name,
                    url: getElemUrlById(db[i].id, APIKEY),
                }
            }
            arr.push(tale)
        }
    })
}

module.exports = {
    pushTales,
    getAventuras
}