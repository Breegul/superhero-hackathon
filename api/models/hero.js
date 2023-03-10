const db = require("../database/connect");

class Hero {

    constructor ({ hero_id, api_id, hero_name, votes }) {
        this.id = hero_id;
        this.api_id = api_id;
        this.name = hero_name;
        this.votes = votes;
    }

    static async getAll() {
        const response = await db.query("SELECT hero_id, hero_name, votes FROM hero ORDER BY hero_name;");
        return response.rows.map(g => new hero(g));
    }

    static async getTopHero() {
        const response = await db.query("SELECT * FROM hero ORDER BY votes DESC LIMIT 1;");
        if (response.rows.length != 1) {
            throw new Error("Unable to locate hero.")
        }
        return new hero(response.rows[0]);
    }

    static async getOneById(id) {
        const response = await db.query("SELECT * FROM hero WHERE hero_id = $1;", [id]);
        if (response.rows.length != 1) {
            throw new Error("Unable to locate hero.")
        }
        return new hero(response.rows[0]);
    }

    static async create(data) {
        const{api_id, hero_name} = data;   
        const response = await db.query('INSERT INTO hero (api_id, hero_name) VALUES ($1, $2) RETURNING *;', [api_id, hero_name]);

        return response.rows.map(w => new hero(w))
    }

    async update(data) {
        const response = await db.query("UPDATE hero SET votes = $1 WHERE hero_id = $2 RETURNING hero_id, votes;",
            [ this.votes + data.votes, this.id ]);
        if (response.rows.length != 1) {
            throw new Error("Unable to update votes.")
        }
        return new hero(response.rows[0]);
    }

    async destroy() {
        const response = await db.query('DELETE FROM hero WHERE hero_id = $1 RETURNING *;', [this.id]);
      
        return new hero(response.rows[0]);
    }


}

module.exports = Hero;