const http = require("http")

const port = 8081;

const todolist = ["node ", "express"];

http.createServer((require, response) => {
    const { method, url } = require;
    if (url === "/todos") {
        if (method === "GET") {

            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(todolist.toString());
            response.end();

        } else if (method === "POST") {
            let body = "";

            require.on('error', (err) => {
                console.error(err);

            }).on("data", (recivedata) => {
                body += recivedata;

            }).on('end', () => {
                body = JSON.parse(body);
                let todonew = todolist;
                todonew.push(body.name);
                console.log(todonew);
                response.writeHead(200);

            })
        } else if (method === "DELET") {
            let body = "";
            require.on("error", (err) => {
                console.error(err);
            }).on('data', (data) => {

                body += data;

            }).on('end', () => {
                body = JSON.parse(body);
                let delet = body.name;
                for (let i = 0; i < todolist.length; i++) {
                    if (todolist[i] === delet) {
                        todolist.splice(i, 1)
                        break;
                    }
                }
                response.writeHead(201);
            })
        }
        else {
            response.writeHead(501);
            response.end();
        }
    } else {
        response.writeHead(404);
        response.end();
    }
})
    .listen(port, () => {
        console.log("node js server is runnig")
    })


    //http://localhost:8081