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
      `INSERT INTO users (username,name,password)
                VALUES ('${req.body.username}', '${req.body.name}', '${
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

//method        POST
//description   Register new medicine
//access        PUBLIC

// router.post("/", (req, res) => {
//   pool.getConnection((err, connection) => {
//     connection.query(
//       `INSERT INTO medicine (MedId,MedName,DsgForm,DsgStrength,LotNo,ManDate,ExpDate,Lab,Storage,
//             Indication,Contraindiction,AdReaction,IncRemarks,Action)
//                   VALUES ('${req.body.MedId}', '${req.body.MedName}', '${
//         req.body.DsgForm
//       }','${req.body.MedName}','${req.body.DsgForm}','${
//         req.body.DsgStrength
//       }','${req.body.LotNo}',
//         '${req.body.ManDate}', '${req.body.ExpDate}','${req.body.Lab}','${
//         req.body.Storage
//       }',
//         '${req.body.Indication}','${req.body.Contraindiction}','${
//         req.body.AdReaction
//       }',
//         '${req.body.IncRemarks}','${req.body.Action}')`,
//       (err, user) => {
//         if (err) throw err;

//         res.json({ success: true, msg: "SUCCESSFULLY REGISTER" });
//       }
//     );
//   });
// });

module.exports = router;
