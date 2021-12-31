// ---file based module
// const a=
// {
    // average:(a,b)=>{
        // console.log((a+b)/2);
    // },
    // percent:(a,b)=>
    // {
        // console.log((a/b)*100);
    // },
// };


// ---BUliD-In---
// const fs=require("fs");
// const a="This is made by Nazim";
// fs.writeFile("./sample.txt",a,()=>
// {
    // console.log("written");
// });
// console.log("im first");

// const os = require("os");
// console.log(os.hostname());
// console.log(os.freemem());


// file based, Build In, Third-party


// Third-Party
// Create Server using nodemon


const { response } = require("express");
const http = require("http");
const fs = require("fs")
const { nextTick } = require("process");
const home = fs.readFileSync("./index.html","utf-8");
const server = http.createServer((req,res)=>{
    // res.end("<h1>Hello World</h1>")
    // console.log(req.url);
    //   res.end("<h1>Hello World</h1>")

    if(req.url==="/")
{
    return res.end(home);
}
    if(req.url==="/about")
    {
       return res.end("<h1>ABOUT PAGE</h1>");
    }
    if(req.url==="/contact")
{
    return res.end("<h1>CONTACT PAGE</h1>");
}
if(req.url==="/service")
{
    return res.end("<h1>SERVICE PAGE</h1>");
}
else
{
    return res.end("<h1>404 error </h1>")
}
});



server.listen(4000,"localhost",()=>{
    console.log("server is working on http://localhost:4000)");
});