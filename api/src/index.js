require('dotenv')
const express = require('express')
const morgan = require('morgan')
const http = require('http')
const { DEPLOY_HOOK } = process.env
const port = process.env.PORT || 3001
const server = express()
const terminalKiller = require('./Routes/server/terminalkiller.js')
const users = require('./Routes/server/users.js')
const posts = require('./Routes/apps/posts.js')
const { hostname } = require('os')

server.use((req, res, next)=>{

    console.log('origin', req.headers.origin)
    const corsList = [
        'http://localhost:3000',
        'http://localhost:3001',
        'http://localhost:3002',
        'http://192.168.100.16:3000',
        'https://laruinarecords.cl',
        'https://tv.laruinarecords.cl',
        'http://35.160.120.126',
        'http://44.233.151.27',
        'http://34.211.200.85',
        'https://terminalkiller.onrender.com',
        `${DEPLOY_HOOK}`
        
    ];

    if(corsList.includes(req.headers.origin)){   
        res.header('Access-Control-Allow-Origin', (req.headers.origin));
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
server.use('/posts', posts)
// server.listen('https://server.terminalkiller.site', () => console.log('TerminalKiller Project'))
server.listen(port, hostname())