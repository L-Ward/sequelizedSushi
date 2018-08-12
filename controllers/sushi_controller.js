var db = require("../models");

// Routes
module.exports = function (app) {
  // Route to get all sushi
  app.get("/", function (req, res) {
    db.Sushi.findAll({ raw: true })
      .then(function (dbSushi) {
        var sushiObject = {
          sushi: dbSushi
        };
        res.render("index", sushiObject);
      });
  });

  // Route to post new sushi input
  app.post("/api/sushi", function (req, res) {
    db.Sushi.create(req.body)
      .then(function (dbSushi) {
        res.json({ id: dbSushi.insertId })
      })
  });

  // Route to adjust sushi devoured boolean
  app.put("/api/sushi/:id", function (req, res) {
    console.log(req);
    db.Sushi.update(
      req.body,
      {
        where: {
          id: req.params.id
        }
      }
    )
    .then(function (dbSushi) {
      res.json(dbSushi);
    });
});
};
