const express = require('express')
const cors=require("cors");
require("dotenv").config();
const connect=require("./src/config/db");
const quesRoute = require('./src/questions/que.router');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use("/questions",quesRoute);
app.get('/', (req, res) => res.send('hello mock14'));

const PORT=process.env.PORT || 8080;
app.listen(PORT, async() => {
    await connect();
    console.log(`server started on port ${PORT} mock 14`)
})