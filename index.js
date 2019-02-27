const express = require("express");
const bodyParser = require("body-parser");

const users = require("./routes/api/users");

const medicine = require("./routes/api/medicine");

const secretary = require("./routes/api/secretary");
const pharmacy = require("./routes/api/pharmacy");
// const users = require("./routes/api/registersusers");

const app = express();

//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// //use users
app.use("/api/users", users);

////medicine api
app.use("/api/medicine", medicine);

////secretary api
app.use("/api/secretary", secretary);

///pharmacy api
app.use("/api/pharmacy", pharmacy);

///registeruser api
// app.use("/api/registerusers", users);

const port = process.env.PORT || 6000;

app.listen(port, () => console.log(`server running on port ${port}`));
