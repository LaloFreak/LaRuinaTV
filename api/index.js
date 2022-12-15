const express = require('express')
const server = express()
const morgan = require('morgan')
const terminalKiller = require('./Routes/terminalkiller.js')
const media = require('./Routes/media.js')
const wog = require('./Routes/wog.js')
const users = require('./Routes/users.js')

server.use((req, res, next)=>{
    console.log(req.headers.origin)
    const corsList = [
        'http://localhost:3000',
        'http://localhost:3001',
        'http://localhost:3002',
        'http://192.168.100.16:3000',
        'http://192.168.100.16:3001',
        'http://192.168.100.16:3002',
    ];
    if(corsList.includes(req.headers.origin)){   
        res.header('Access-Control-Allow-Origin', (req.headers.origin));
        res.header('Access-Control-Allow-Credentials', 'true');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested, Content-Type, Accept');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        next();
    }
    else{
        res.header('Access-Control-Allow-Origin', ('*'));
        res.header('Access-Control-Allow-Credentials', 'true');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested, Content-Type, Accept');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        next();
    }
});

server.use(morgan('dev'))
server.use(express.json())
server.use('/terminalkiller', terminalKiller)
server.use('/users', users)
server.use('/media', media)
server.use('/wog', wog)

function logger (req, res, next) {
    console.log(req.url)
    next()
}

server.get('*', logger, (req, res) => {
    res.status(400).send("Esta página no existe")
})

server.listen(3001, () => console.log('running on port 3001'))