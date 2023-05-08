const fs=require("fs");
//const http=require("http");
// OR 
const server=require("http").createServer();

//const server=http.createServer();

server.on("request",(req,res)=>{
    // Solution 1

    // fs.readFile("test-file.txt",(err,data)=>{
    //     if(err) console.log(err);
    
    //     console.log(data);
    //     res.end(data);
    // });

    // Solution2
    // const readable=fs.createReadStream('test-file.txt');
    // readable.on('data',chunk=>{
    //     res.write(chunk);
    // })
    // readable.on("end",()=>{
    //     res.end();
    // })
    // readable.on("error",err=>{
    //     console.log(err);
    //     res.status(500);
    //     res.end("File not Found");
    // })

    // Solution3

    const readable=fs.createReadStream("test-file.txt");
    readable.pipe(res);
    //readableSource.pipe(writebleDest);


});
server.listen(8000,'127.0.0.1',()=>{
console.log("Server working");
});