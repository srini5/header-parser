var express = require("express")();

express.get("/",function(req,res){
    
    console.log('ip-address:' + req.headers['x-forwarded-for']);
    console.log('language:' + req.headers['accept-language']);
    console.log('Software: '+req.headers['user-agent']);
    
    var lang = req.headers['accept-language'].split(";")[0].split(",")[0];
    var software = req.headers['user-agent'].split(")")[0].split("(")[1];
    
    var response = {
        "ipaddress": req.headers['x-forwarded-for'],
        "language": lang,
        "software": software
    };
    
    res.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});
    res.write(JSON.stringify(response));
    res.end();
    
}).listen(8080);
