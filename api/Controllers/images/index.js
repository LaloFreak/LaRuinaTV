const {DB_LARUINATV_MEDIA} = require('./consts.js')
const myFunctions = require('../../Functions/index.js')
const mediaList = []

myFunctions.pushMedia(DB_LARUINATV_MEDIA, mediaList)

module.exports = {mediaList}