import express from "express";
import bodyParser from "body-parser";

import usersRouter from "./routes/users.js";

const app = express();
const PORT = 3000;

// An illustrated sample for showing 'objects' on API
const usersSample = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 22,
        height: 1.79
    }
];

app.use(bodyParser.json());
app.use('/users', usersRouter);

// All routes here NOT starting with '/users'
// Choose the routes name with carefull!
app.get('/', (req, res) => {
    res.send({ message: 'Hello Express!' });
});

app.get('/users/sample', (req, res) => {
    console.log(usersSample);

    return res.send(usersSample);
});

app.listen(PORT, () => console.log("Server is Up!"));
