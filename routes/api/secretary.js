// const express = require("express");
// const pool = require("../../config/key").pool;

// const router = express.Router();

// //method        POSTS
// //description   Register new medicine
// //access        PUBLICS

// router.post("/", (req, res) => {
//   pool.getConnection((err, connection) => {
//     connection.query(
//       `INSERT INTO secretary (Patient_Fname,Patient_Mname,Patient_Lname)
//                   VALUES (
//                         '${req.body.Patient_Fname}',
//                         '${req.body.Patient_Mname}',
//                         '${req.body.Patient_Lname}',

//       (err, user) => {
//         if (err) throw err;

//         res.json({ success: true, msg: "SUCCESSFULLY REGISTER" });
//       }
//     );
//   });
// });

// module.exports = router;

const express = require("express");
const pool = require("../../config/key").pool;

const router = express.Router();

//method        POST
//description   Register new user
//access        PUBLIC
router.post("/add", (req, res) => {
  pool.getConnection((err, connection) => {
    connection.query(
      `INSERT INTO secretary (Patient_Fname,Patient_Mname,Patient_Lname)
                VALUES (
                     '${req.body.Patient_Fname}',
                     '${req.body.Patient_Mname}',
                     '${req.body.Patient_Lname}')`,

      (err, user) => {
        if (err) throw err;

        res.json({ success: true, msg: "SUCCESSFULLY REGISTER" });
      }
    );
  });
});

/////patient view

router.get("/view", (req, res) => {
  pool.getConnection((err, connection) => {
    connection.query(
      "SELECT * FROM secretary ORDER by sec_id desc",
      (error, results) => {
        if (error) {
          res.status(404).json(error);
        }
        res.json(results);
        connection.release();
        connection.destroy();
      }
    );
  });
});

////delete patient

router.delete("/delete", (req, res) => {
  pool.getConnection((err, connection) => {
    connection.query(
      `DELETE FROM secretary WHERE sec_id='${req.body.id}';`,

      (err, user) => {
        if (err) throw err;

        res.json({ success: true, msg: "SUCCESSFULLY DELETED" });
      }
    );
  });
});

module.exports = router;
