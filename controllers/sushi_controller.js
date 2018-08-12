var express = require("express");

var router = express.Router();
var sushi = require("../models/sushi.js");

// Routes
router.get("/", function(req, res) {
    sushi.selectAll(function(data) {
        var sushiObject = {
            sushi: data

        };
        console.log(sushiObject)
        res.render("index", sushiObject);
    });
});

router.post("/api/sushi", function(req, res) {
    sushi.insertOne([
      "sushi_name"
    ], [
      req.body.sushi_name
    ], function(result) {
      // Send back the ID
      res.json({ id: result.insertId });
    });
  });

  router.put("/api/sushi/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    sushi.updateOne({
      devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

// Export routes for server.js to use.
module.exports = router;