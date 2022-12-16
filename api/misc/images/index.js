const myFunctions = require('../../Functions/apps/laruinatv/index.js')
const {DB_LARUINATV_MEDIA} = require('./consts.js')
const mediaList = []

myFunctions.pushMedia(DB_LARUINATV_MEDIA, mediaList)

module.exports = {mediaList}