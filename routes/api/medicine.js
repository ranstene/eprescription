const express = require("express");
const pool = require("../../config/key").pool;

const router = express.Router();

//method        POSTS
//description   Register new medicine
//access        PUBLICS

router.post("/add", (req, res) => {
  pool.getConnection((err, connection) => {
    connection.query(
      `INSERT INTO medicine (MedId,MedName,DsgForm,DsgStrength,Lab,Storage,
            Indication,Contraindiction,AdReaction,IncRemarks,Action)
                  VALUES (
                        '${req.body.MedId}', 
                        '${req.body.MedName}', 
                        '${req.body.DsgForm}',
                        '${req.body.DsgStrength}',            
                        '${req.body.Lab}',
                        '${req.body.Storage}',
                        '${req.body.Indication}',
                        '${req.body.Contraindiction}',
                        '${req.body.AdReaction}',
                        '${req.body.IncRemarks}',
                        '${req.body.Action}')`,
      (err, user) => {
        if (err) throw err;
        +res.json({ success: true, msg: "SUCCESSFULLY REGISTER" });
      }
    );
  });
});

//method        POSTS
//description   Deleted new medicine
//access        PUBLICS

// 'DELETE FROM medicine WHERE MedId =' +req.body.MedId

router.delete("/delete", (req, res) => {
  pool.getConnection((err, connection) => {
    connection.query(
      `DELETE FROM medicine WHERE ID='${req.body.id}';`,

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
      "SELECT * FROM medicine ORDER by id desc",
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

router.put("/edit", (req, res) => {
  pool.getConnection((err, connection) => {
    connection.query(
      `UPDATE medicine set MedId=?,MedName=?,DsgForm=?,DsgStrength=?,Lab=?,\
      Storage=?,Indication=? ,Contraindiction=?,AdReaction=?,IncRemarks=?,Action=? WHERE ID=?
      
       '${req.body.MedId}', 
       '${req.body.MedName}', 
       '${req.body.DsgForm}',
       '${req.body.DsgStrength}',            
       '${req.body.Lab}',
       '${req.body.Storage}',
       '${req.body.Indication}',
       '${req.body.Contraindiction}',
       '${req.body.AdReaction}',
       '${req.body.IncRemarks}',
       '${req.body.Action}',
       '${req.body.ID}';`,

      (err, user) => {
        if (err) throw err;

        res.json({ success: true, msg: "SUCCESSFULLY UPDATED" });
      }
    );
  });
});

// router.put("/edit", function(req, res) {
//   //the yellow represents the name of the URL
//   pool.getConnection(function(err, connection) {
//     if (!err) {
//       var strquery =
//         "UPDATE medicine SET MedId=?,MedName=?, DsgForm=?,DsgStrength,\
//       Lab=?,Storage=?,Indication=?,Contraindiction=?,AdReaction=?, IncRemarks=?,Action=?WHERE ID=?'${req.body.id}';";
//       connection.query(
//         strquery,
//         [
//           req.body.MedId,
//           req.body.MedName,
//           req.body.DsgForm,
//           req.body.DsgStrength,
//           req.body.Lab,
//           req.body.Storage,
//           req.body.Indication,
//           req.body.Contraindiction,
//           req.body.AdReaction,
//           req.body.IncRemarks,
//           req.body.Action,
//           req.body.ID
//         ],
//         function(err, rows) {
//           if (!err) {
//             var strquery = "SELECT * FROM medicine";
//             connection.query(strquery, function(err, rows) {
//               res.json(rows);
//             });
//           } else {
//             res.json("Error in query: " + err);
//           }
//         }
//       ); //value from the user
//     } else {
//       res.json("Error connecting to db. " + err);
//     }
//   });
// });

module.exports = router;
