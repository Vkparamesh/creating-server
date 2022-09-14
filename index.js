const express = require("express");

const app = express();

app.use(express.json());

const port = 8081;

const todolist = ["hello", "vk"];


app.get("/todos", (req, res) => {
    res.status(200).send(todolist);
});

app.listen(port, () => {
    console.log("server is runnin on 8081")
}
);

app.post("/todos", (req, res) => {
    let newtodo = req.body.name;
    todolist.push(newtodo);
    res.status(200).send({
        message: "task added",
    })
})

app.delete("/todos", (req, res) => {
    const del = req.body.name;
    for (let i = 0; i < todolist.length; i++) {
        if (todolist[i] === del) {
            todolist.splice(i, 1)
            break;
        }
    }
    res.status(200).send({
        message: "task deleted",
    })

})

app.all("/todos", (req, res) => {
    res.status(501).send();

})