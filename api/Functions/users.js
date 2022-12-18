const users = require('../users.json')

function findUser(a,m){
    const userFound = users.filter(e=>{return (e.alias === (a) || e.email === (m))})
    return userFound
}

function findUsers(ip){
    const usersFound = users.filter(e=>{return (e.userStatus.filter(e=>e.ip.find(el=>el.id === ip)))}).at(0)
    return usersFound 
}

function findUserByIp(ip){
    const userFound = users.filter(e=>{return (e.userStatus.filter(e=>e.ip.find(e=>e.id === ip && e.onlineState === true)))}).at(0)
    return userFound
}

function findUserState(ip){
    const userFound = users.filter(e=>{return (e.userStatus.at(0).ip.find(e=>e.id === ip))})
    return userFound
}

module.exports = {
    findUser,
    findUserByIp,
    findUserState,
    findUsers
}