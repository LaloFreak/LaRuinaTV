const express = require('express')
const server = express.Router()
const users = require('../users.json')
const fs = require('fs');
const { findUser, findUserByIp, findUsers } = require('../Functions/users');

server.post('/create', async (req,res,next)=>{
    const {alias, email, contraseña} = req.body;
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const userFound = findUser(alias, email)
    if (!alias || !email || !contraseña || userFound.length>0) return res.status(404).json({error : 'Error'});
    try {
        const newUser = {"userStatus":[{"ip":[{"id":ip,"onlineState":false}]}],"alias":alias,"email":email,"contraseña":contraseña}
        const usersList = [...users, newUser]
        const usersToJson = JSON.stringify(usersList)

        fs.writeFile("users.json", usersToJson, (err) => {
          if (err)
            console.log(err);
          else {
            console.log("File written successfully\n");
            console.log("The written has the following contents:");
            console.log(fs.readFileSync("users.json", "utf8"));
          }
        });
        return res.status(200).json("Usuario creado con éxito.")
    }catch(error){
        next(error);
    }
})

server.get('/loggedaccount', (req, res, next)=>{
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const user = findUserByIp(ip)
  const log = (user.length > 0)? true:false
  console.log(user);
  res.status(200).json([user, log])
})

server.post('/login',(req,res,next)=>{
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const {userName, contraseña} = req.body.at(0);
  const user = findUser(userName, userName)
  if(user.at(0).contraseña === contraseña){
    users.filter(e=> e.alias===user.at(0).alias).at(0).userStatus.at(0).ip.filter(e=> e.id === ip).at(0).onlineState = true
    const usersToJson = JSON.stringify(users)

    fs.writeFile("users.json", usersToJson, (err) => {
        if (err)
          console.log(err);
        else {
          console.log("File written successfully\n");
          console.log("The written has the following contents:");
          console.log(fs.readFileSync("users.json", "utf8"));
        }
      }
    )
    return res.status(200).json({state:true, current:user.at(0).alias})
  }
  else return res.status(400).send({state:false, current:''})
})

server.post('/logout', (req,res)=>{
  const {userName} = req.body;
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const user = findUser(userName, userName)
  console.log(req.body);
  users.filter(e=> e.alias===user.at(0).alias).at(0).userStatus.at(0).ip.filter(e=> e.id === ip).at(0).onlineState = false
  const usersToJson = JSON.stringify(users)

  fs.writeFile("users.json", usersToJson, (err) => {
      if (err) console.log(err);
      else console.log("Log Out");
    }
  )
  res.status(200).send(false)
})

server.get('/users', (req,res)=>{
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  usersFound = findUsers(ip)
  console.log('us', usersFound);
  return res.status(200).send(userFound)

})


module.exports = server