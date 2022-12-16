require('dotenv').config();
const { VISOR_FOLDER, SLIDER_FOLDER, API_KEY } = process.env;
const {APIKEY} = require('../misc/sounds/consts.js')
const axios = require('axios');
const AVENTURAS = require('../misc/Aventuras.json');
const { getDriveFiles, getElemUrlById } = require('./googleapis.js');

function getAventuras(){
    return AVENTURAS
}

async function pushMedia(db, arr){
    const driveVisorFiles = await getDriveFiles(VISOR_FOLDER, API_KEY)
    const driveSliderFiles = await getDriveFiles(SLIDER_FOLDER, API_KEY)
    driveVisorFiles.reverse()
    driveSliderFiles.reverse()

    for(let i in db){
        let media = {
            id: Number(i),
            urlID: db[i].urlID,
            typeMedia: db[i].typeMedia,
            titulo: db[i].titulo,
            artista: db[i].artista,
            tag: db[i].tag,
            img: await getElemUrlById(driveVisorFiles[i].id, API_KEY),
            sliderImg: driveSliderFiles[i]? await getElemUrlById(driveSliderFiles[i].id, API_KEY) : await getElemUrlById(driveVisorFiles[i].id, API_KEY),
            icon: db[i].icon,
            categoria:db[i].categoria,
            boton1:db[i].boton1,
            info: db[i].info
            }
        arr.push(media)
    }
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
    getElemUrlById,
    pushMedia,
    pushTales,
    getAventuras
}