const express = require("express");
const pool = require("../../config/key").pool;

const router = express.Router();

// DISPLAY POST LIST
router.get("/view", (req, res) => {
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
router.post("/register", (req, res) => {
  pool.getConnection((err, connection) => {
    connection.query(
      `INSERT INTO users (fullname,dateofbirth,contact_no,address,user)
                VALUES ('${req.body.fullname}',
                '${req.body.dateofbirth}',
                '${req.body.contact_no}',
                '${req.body.address}',
                '${req.body.user}')`,

      (err, user) => {
        if (err) throw err;

        res.json({ success: true, msg: "SUCCESSFULLY REGISTER" });
      }
    );
  });
});

router.get("/update", (req, res) => {
  pool.getConnection((err, connection) => {
    connection.query(
      `UPDATE users
    SET fullname=?, dateofbirth=?, contact_no=?, address=?
     WHERE id =
     '${req.body.fullname}',
     '${req.body.dateofbirth}',
     '${req.body.contact_no}',
     ${req.body.address}';`,

      (error, results) => {
        res.json(results);
        connection.release();
        connection.destroy();
      }
    );
  });
});

/////edit users

module.exports = router;
