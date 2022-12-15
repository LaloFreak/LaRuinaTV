const {mediaList} = require('../misc/images/index.js')
const {talesList} = require('../misc/sounds/index.js')

function addMedia(el){
    if(!mediaList.includes(el)){
        mediaList.push(el)
        return "Media agregada con éxito"
    }else{
        throw new Error ("Ya existe") 
    }
}

function getMedia(){
    return mediaList
}

function getTales(){
    return talesList
}

module.exports = {addMedia, getMedia, getTales}