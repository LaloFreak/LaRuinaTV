const axios = require('axios');

async function getDriveFiles(idFolder, apiKey){
    const files = await axios.get(`https://www.googleapis.com/drive/v3/files?q=%22${idFolder}%22%20in%20parents&key=${apiKey}`)
    return files.data.files
}

async function getElemUrlById(e, apiKey){
    return `https://www.googleapis.com/drive/v3/files/${e}?supportsAllDrives=true&key=${apiKey}&alt=media`
}

module.exports = {
    getDriveFiles,
    getElemUrlById
}