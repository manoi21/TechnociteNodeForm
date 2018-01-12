const fs = require('fs')
module.exports = (req,res) =>{
    fs.readFile(`${process.cwd()}/public/friends.json`, {encoding: 'utf-8'},(err,data)=>{
        if(err) {
            res.writeHead(500,{'Content-Type':'text/html'})
            res.end('The server has a problem try later')
        } else {
            fs.readFile(`${process.cwd()}/templates/amis.html`, {encoding: 'utf-8'},(err,data)=>{
                if(err) {
                    res.writeHead(500,{'Content-Type':'text/html'})
                    res.end('File Not Found')
            } else {
                res.end(generateHtml(data,json))
            }
        })
    }
    })
}