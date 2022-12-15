const {mediaList} = require('../misc/images/index.js')
const {talesList} = require('../misc/sounds/index.js')
/*-----------------World of Gwerh-----------------*/ 

function getTales(){
    return talesList
}

/*-----------------La Ruina TV-----------------*/ 

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

module.exports = {addMedia, getMedia, getTales}