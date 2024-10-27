const http = require('http'); //クライアントとサーバの通信が可能になる。
const PORT = 8001;
const html = require("fs").readFileSync("./index.html"); //ファイルを非同期で読み込む？なぜ非同期？

//webサーバを作ろう
const server = http.createServer((req,res) => {
    //ブラウザからアクセスがあった時の処理
    res.writeHead(200,{"Content-Type": "text/html"});
    res.write(html);
    res.end();

    if (req.method == "GET") {

    }
    if (req.method == "POST") {
        
    }
})

server.listen(PORT,() => {
    console.log("server running");
});
