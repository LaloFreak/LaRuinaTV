const myFunctions = require('../../Functions/apps/worldofgwerh/index.js')
const {FOLDER_ID} = require('./consts.js')
const talesList = []

myFunctions.pushTales(talesList, FOLDER_ID.tales)

module.exports = {talesList}