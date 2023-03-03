const express = require('express');
const cors = require('cors');

const heroRouter = require('./routers/hero');

const api = express();

api.use(cors());
api.use(express.json());

api.get("/", (req, res) => {
    res.json({
        title: "Hero Rankings",
        description: "Who is the Earth's Mightiest Hero?"
    })
})

api.use("/heros", heroRouter);

module.exports = api;