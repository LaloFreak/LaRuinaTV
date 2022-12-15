const myFunctions = require('../../Functions/index.js')
const {FOLDER_ID} = require('../sounds/consts.js')
const talesList = []

myFunctions.pushTales(talesList, FOLDER_ID.tales)

module.exports = {talesList}