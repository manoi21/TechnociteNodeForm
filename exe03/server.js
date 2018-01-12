// const http = require('http')
// const fs = require('fs')
// http.get('http://www.mons.be',res =>{
//     res.setEncoding('utf-8')
//     let body =''
//     res.on('data', donnee=>{
//         body += donnee
//     })
//     res.on('end', ()=>{
//         console.log('end')
//         fs.writeFile('index.html', body, (err)=>{
//             if(err)console.log(err)
//             console.log('file generate')
//         })
//     })
// })
const http = require('http')
const fs = require('fs')
const values =[]
const sitesToHack = ['http://www.pass.be', 'http://www.triptyk.eu', 'http://www.pass.be']
let sitesLoaded = 0
const getPageFromSiteAndStock = (url)=>{
    http.get(url,res=>{
        let body = ''
        res.on('data',data=>{
            body+=data
        })
        res.on('end', ()=>{
            console.log(`end of loading ${url}`)
            values.push(body)
            chekFinisheProcess()
        })
    })
}

const chekFinisheProcess=()=>{
    sitesLoaded++
    if (sitesLoaded === sitesToHack.length){
        console.log(`all page are saved in the file`)
        const tmstr = values.reduce((prev,current) =>{

        })
    }
}
const init = ()=>{
    sitesToHack.map(item => getPageFromSiteAndStock(item))
}
init()