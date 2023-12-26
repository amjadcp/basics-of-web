// create sample express server
const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json({
	type: ["application/json", "text/plain"],
}));

const todos = []
app.use(cors());

app.post("/", (req, res)=> {
    console.log(req.body);
    todos.push(req.body.task)
    res.json({
        message: "Todo added successfully"
    })
})

app.get("/", (req, res)=> {
    res.json({
        todos: todos
    })
})


app.listen(5000, ()=> console.log("Server is running on port 5000"));






























// const session = require('express-session')

// app.use(express.json())
// app.use(session({
//     secret: "ksudfjhsbdjfbsdjfbsjdbfwejrbkdjsfjsdf",
// }))

// app.get('/login', (req, res) => {
//     const {name} = req.body;
//     req.session.name = name;
//     req.session.tasks = [{name: "task1", status: "done"}, {name: "task2", status: "done"}]
//     return res.json({
//         message: `Hello ${name}!`
//     });
// });
// app.get("/home", (req, res) => {
//     const {name} = req.session;
//     return res.json({
//         message: `Hello ${name}!`
//     });
// })