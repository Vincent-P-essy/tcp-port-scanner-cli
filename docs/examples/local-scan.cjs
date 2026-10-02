const net=require('node:net');
const {spawn}=require('node:child_process');
const server=net.createServer(socket=>socket.end());
server.listen(18651,'127.0.0.1',()=>{
 const scan=spawn(process.execPath,['scanner.js','127.0.0.1','18650-18652','250'],{stdio:'inherit'});
 const timer=setTimeout(()=>scan.kill(),10000);
 scan.on('exit',code=>{clearTimeout(timer);server.close(()=>{process.exitCode=code||0;});});
});
server.on('error',error=>{console.error(error.message);process.exitCode=1;});
