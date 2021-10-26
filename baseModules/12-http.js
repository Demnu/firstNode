//HTTP Module
const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req);
    if(req.url === '/'){
        res.write('Welcome to our home page');
    }
    if (req.url === '/about'){
        res.write('Welcome to our about page');
    }
    res.end(`<h1>Oops!</h1>`);
    
})

server.listen(5000);