var db = require("../models");

module.exports = (app) => {
    app.get("/api/burgers", (req, res) => {
        db.Burger.findAll({}).then(dbAllBurgers => res.json(dbAllBurgers));
    });


    app.post("/api/addBurger", (req, res) => {
        db.Burger.create({
            isEaten: false,
            name: req.body.name
        }).then(newBurger => res.json(newBurger));
    });
}