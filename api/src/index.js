const express = require('express')
const morgan = require('morgan')
const http = require('http')
const port = 10000
const server = express()
const terminal = require('./Routes/server/terminal.js')
const users = require('./Routes/server/users.js')
const posts = require('./Routes/apps/posts.js')
const hostname = 'https://terminalkiller.onrender.com'

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
server.use('/terminal', terminal)
server.use('/users', users)
server.use('/posts', posts)
// server.listen('https://server.terminalkiller.site', () => console.log('TerminalKiller Project'))
server.listen(port, hostname)