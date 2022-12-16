require('dotenv').config();
const { VISOR_FOLDER, SLIDER_FOLDER, API_KEY } = process.env;
const { getDriveFiles, getElemUrlById } = require('../../googleapis.js');

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

module.exports = {
    pushMedia,

}