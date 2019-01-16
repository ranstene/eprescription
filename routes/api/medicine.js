const express = require("express");
const pool = require("../../config/key").pool;

const router = express.Router();

//method        POSTS
//description   Register new medicine
//access        PUBLICS

router.post("/", (req, res) => {
  pool.getConnection((err, connection) => {
    connection.query(
      `INSERT INTO medicine (MedId,MedName,DsgForm,DsgStrength,LotNo,ManDate,ExpDate,Lab,Storage,
            Indication,Contraindiction,AdReaction,IncRemarks,Action)
                  VALUES (
                        '${req.body.MedId}', 
                        '${req.body.MedName}', 
                        '${req.body.DsgForm}',
                        '${req.body.DsgStrength}',
                        '${req.body.LotNo}',
                        '${req.body.ManDate}',
                        '${req.body.ExpDate}',
                        '${req.body.Lab}',
                        '${req.body.Storage}',
                        '${req.body.Indication}',
                        '${req.body.Contraindiction}',
                        '${req.body.AdReaction}',
                        '${req.body.IncRemarks}',
                        '${req.body.Action}')`,
      (err, user) => {
        if (err) throw err;

        res.json({ success: true, msg: "SUCCESSFULLY REGISTER" });
      }
    );
  });
});

//method        POSTS
//description   Deleted new medicine
//access        PUBLICS

// 'DELETE FROM medicine WHERE MedId =' +req.body.MedId

module.exports = router;
