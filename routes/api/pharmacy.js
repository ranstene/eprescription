const express = require("express");
const pool = require("../../config/key").pool;

const router = express.Router();

//method        POSTS
//description   Register new pharmacy
//access        PUBLICS

router.post("/add", (req, res) => {
  pool.getConnection((err, connection) => {
    connection.query(
      `INSERT INTO pharmacy (pharmacy_id,business_name,business_address,lto,pharmacist_name,
            owner_name)
                  VALUES (
                        '${req.body.pharmacy_id}', 
                        '${req.body.business_name}', 
                        '${req.body.business_address}',
                        '${req.body.lto}',            
                        '${req.body.pharmacist_name}',
                        '${req.body.ownwer_name}')`,

      (err, user) => {
        if (err) throw err;
        +res.json({ success: true, msg: "SUCCESSFULLY REGISTER" });
      }
    );
  });
});

//method        deleted
//description   Deleted new pharmacy
//access        PUBLICS

// 'DELETE FROM medicine WHERE MedId =' +req.body.MedId

router.delete("/delete", (req, res) => {
  pool.getConnection((err, connection) => {
    connection.query(
      `DELETE FROM pharmacy WHERE ID='${req.body.id}';`,

      (err, user) => {
        if (err) throw err;

        res.json({ success: true, msg: "SUCCESSFULLY DELETED" });
      }
    );
  });
});

// router.get("/view", (req, res) => {
//   pool.getConnection((err, connection) => {
//     connection.query(
//       "SELECT * from medicine ORDER by id desc",

//       (err, user) => {
//         if (err) throw err;

//         res.json(user);
//       }
//     );
//   });
// });

router.get("/view", (req, res) => {
  pool.getConnection((err, connection) => {
    connection.query(
      "SELECT * FROM pharmacy ORDER by id desc",
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

// router.put("/edit", (req, res) => {
//   pool.getConnection((err, connection) => {
//     connection.query(
//       "UPDATE medicine set MedI.d=?,MedName=?,DsgForm=?,DsgStrength=?,Lab=?,Storage=?,Indication=? ,Contraindiction=?,AdReaction=?,IncRemarks=?,Action=?",
//       (err, user) => {
//         if (err) throw err;

//         res.json({ success: true, msg: "SUCCESSFULLY DELETED" });
//       }
//     );
//   });
// });

module.exports = router;
