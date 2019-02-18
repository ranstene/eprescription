const express = require("express");
const pool = require("../../config/key").pool;

const router = express.Router();

// DISPLAY POST LIST
router.get("/", (req, res) => {
  pool.getConnection((err, connection) => {
    connection.query(
      "SELECT * from users ORDER by id desc",
      (error, results) => {
        res.json(results);
        connection.release();
        connection.destroy();
      }
    );
  });
});

//method        POST
//description   Register new user
//access        PUBLIC
router.post("/", (req, res) => {
  pool.getConnection((err, connection) => {
    connection.query(
      `INSERT INTO users (username,fullname,password)
                VALUES ('${req.body.username}', '${req.body.fullname}', '${
        req.body.password
      }')`,
      (err, user) => {
        if (err) throw err;

        res.json({ success: true, msg: "SUCCESSFULLY REGISTER" });
      }
    );
  });
});

router.get("/", (req, res) => {
  pool.getConnection((err, connection) => {
    connection.query(
      "SELECT * from users ORDER by id desc",
      (error, results) => {
        res.json(results);
        connection.release();
        connection.destroy();
      }
    );
  });
});

module.exports = router;
