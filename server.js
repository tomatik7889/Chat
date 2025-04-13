const http = require('http');
const fs = require('fs')
const path = require('path');
const { Socket } = require("dgram");
const indexHtmlFile = fs.readFileSync(path.join(__dirname, 'static', 'index.html'))
const scriptFile = fs.readFileSync(path.join(__dirname, 'static', 'script.js'))
const styleFile = fs.readFileSync(path.join(__dirname, 'static', 'style.css'))
const server = http.createServer((req,res)=>{
    switch(req.url) {
        case '/': return res.end(indexHtmlFile)
        case '/script.js': return res.end(scriptFile)
        case '/style.css': return res.end(styleFile)
    }
    if(req.url === '/'){
        return res.end(indexHtmlFile)
    }
    res.statusCode = 404;
    return res.end('Error 404')
});
server.listen(3000); 




io.on('connection', (socket) => {
    console.log('a user connected. id - ' + socket.id);
    let userNickname = 'user';
    socket.on('set_nickname', (nickname) => {
      userNickname = nickname;
    });
    socket.on('new_message', (message) => {
      io.emit('message', userNickname + ' : ' + message);
    });
  });
  
  