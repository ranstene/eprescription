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
router.post("/", (req, res) => {
  pool.getConnection((err, connection) => {
    connection.query(
      `INSERT INTO secretary (Patient_Fname,Patient_Mname,Patient_Lname)
                VALUES (
                     '${req.body.username}',
                     '${req.body.name}',
                     '${req.body.password}')`,

      (err, user) => {
        if (err) throw err;

        res.json({ success: true, msg: "SUCCESSFULLY REGISTER" });
      }
    );
  });
});

module.exports = router;
