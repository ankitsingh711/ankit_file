let http = require('http')
let fs = require('fs')

let srerver = http.createServer((req,res) =>{
    fs.readFile('RestaurantData.json','utf-8',(err,data) => {
        if (err) throw err
        res.write(data);
        res.end()
    })
}).listen(8720)

