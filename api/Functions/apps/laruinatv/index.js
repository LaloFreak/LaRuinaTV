require('dotenv').config();
const { VISOR_FOLDER, SLIDER_FOLDER, API_KEY } = process.env;
const { getDriveFiles, getElemUrlById } = require('../../drive/index.js');

async function pushMedia(db, arr){
    const driveVisorFiles = await getDriveFiles(VISOR_FOLDER)
    const driveSliderFiles = await getDriveFiles(SLIDER_FOLDER)
    driveVisorFiles? driveVisorFiles.reverse() : driveVisorFiles
    driveSliderFiles? driveSliderFiles.reverse() : driveSliderFiles

    for(let i in db){
        let media = {
            id: Number(i),
            urlID: db[i].urlID,
            typeMedia: db[i].typeMedia,
            titulo: db[i].titulo,
            artista: db[i].artista,
            tag: db[i].tag,
            img: driveVisorFiles? await getElemUrlById(driveVisorFiles[i].id) : '',
            sliderImg: driveSliderFiles[i]? await getElemUrlById(driveSliderFiles[i].id) : await getElemUrlById(driveVisorFiles[i].id),
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