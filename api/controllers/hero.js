const Hero = require("../models/hero.js");

async function index (req, res) {
    try {
        const heros = await Hero.getAll();
        res.status(200).json(heros);
    } catch (err) {
        res.status(500).json({"error": err.message})
    }
}

async function show (req, res) {
    try {
        const id = parseInt(req.params.id);
        const hero = await Hero.getOneById(id);
        res.status(200).json(hero);
    } catch (err) {
        res.status(404).json({"error": err.message})
    }
}

async function getTop (req, res) {
    try {
        const id = parseInt(req.params.id);
        const hero = await Hero.getTopHero(id);
        res.status(200).json(hero);
    } catch (err) {
        res.status(404).json({"error": err.message})
    }
}

async function create (req, res) {
    try {
        const hero = await Hero.create(req.body);
        res.status(201).json(hero);
    } catch (err) {
        res.status(404).json({"error": err.message})
    }
}


async function update (req, res) {
    try {
        const id = parseInt(req.params.id);
        const data = req.body;
        const hero = await Hero.getOneById(id);
        const result = await hero.update(data);
        res.status(200).json(result);
    } catch (err) {
        res.status(404).json({"error": err.message})
    }
}

async function destroy (req, res) {
    try {
        const id = parseInt(req.params.id);
        const hero = await Hero.getOneById(id);
        await hero.destroy();
        res.status(204);
    } catch (err) {
        res.status(404).json({"error": err.message})
    }
}

module.exports = {
    index, show, update, getTop, create, destroy
}