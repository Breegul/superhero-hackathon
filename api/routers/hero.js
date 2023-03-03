const { Router } = require('express');

const heroController = require('../controllers/hero.js');

const heroRouter = Router();

heroRouter.get("/", heroController.index);
heroRouter.get("/top", heroController.getTop);
heroRouter.get("/:id", heroController.show);
heroRouter.post("/", heroController.create);
heroRouter.patch("/:id", heroController.update);
heroRouter.delete("/:id", heroController.destroy);

module.exports = heroRouter;