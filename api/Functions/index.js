const {API_KEY} = require('../Controllers/sounds/consts.js')
const axios = require('axios');
const AVENTURAS = require('../misc/Aventuras.json')

function getAventuras(){
    return AVENTURAS
}

function getElemUrlById(e){
    return `https://www.googleapis.com/drive/v3/files/${e}?supportsAllDrives=true&key=${API_KEY}&alt=media`
}

function pushMedia(db, arr){
    for(let i in db){
        let media = {
            id: Number(i),
            urlID: db[i].urlID,
            typeMedia: db[i].typeMedia,
            titulo: db[i].titulo,
            artista: db[i].artista,
            tag: db[i].tag,
            img: db[i].visorImgID !== ''? getElemUrlById(db[i].visorImgID) : getElemUrlById(db[i].sliderImgID),
            sliderImg: db[i].sliderImgID !== ''? getElemUrlById(db[i].sliderImgID) : getElemUrlById(db[i].visorImgID),
            icon: db[i].icon,
            categoria:db[i].categoria,
            boton1:db[i].boton1,
            info: db[i].info
            }
        arr.push(media)
    }
}

function pushTales(arr, idFolder){
    axios.get(`https://www.googleapis.com/drive/v3/files?q=%22${idFolder}%22%20in%20parents&key=${API_KEY}`)
    .then(res =>{
        db = res.data.files
        for(let i in db){
            let tale = {
                id: Number(i),
                attributes:
                {
                    name: db[i].name,
                    url: getElemUrlById(db[i].id),
                }
            }
            arr.push(tale)
        }
    })
}

module.exports = {
    getElemUrlById,
    pushMedia,
    pushTales,
    getAventuras
}