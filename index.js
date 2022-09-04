const http = require("http")

const port = 8081;

http.createServer((require, response) => {
    response.write("hello this is runnig");
    response.end();
})
    .listen(port, () => {
        console.log("node js server is runnig")
    })


    //http://localhost:8081