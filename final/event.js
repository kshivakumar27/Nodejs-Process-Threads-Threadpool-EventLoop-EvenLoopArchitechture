const EventEmitter=require('events');
const http=require("http");
const url=require("url");

//const  myEmitter=new EventEmitter();

class Sales extends EventEmitter{
    constructor(){
    super();
    }
}
const  myEmitter=new Sales();
myEmitter.on("newSale", ()=>
{
    console.log("There was a new Sale");
});
myEmitter.on("newSale",()=>{
console.log("Customer name :Jonas");
});

myEmitter.on("newSale", stock=>
{
console.log("This are now "+stock+" stocks left");
});

myEmitter.emit("newSale",9);

///////////////////////////

const server =http.createServer();

server.on('request',(req,res)=>{
    console.log(" Request Recieved");
    console.log(req.url);
    res.end("--------------Request Recieved--------------");
});
server.on('request',(req,res)=>{
    console.log(" Request Recieved");
    console.log(req.url);
    res.end("-------------- Another Request Recieved--------------");
});

server.on('close',(req,res)=>{
    console.log(" Request Recieved");
    console.log(req.url);
    res.end("-------------- Request Closed--------------");
});

 
server.listen(8000,'127.0.0.1',()=>
{
console.log("port Running on 8000");
});


