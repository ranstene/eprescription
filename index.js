const express = require("express");
const bodyParser = require("body-parser");

const users = require("./routes/api/users");

const medicine = require("./routes/api/medicine");

const secretary = require("./routes/api/secretary");

const app = express();

//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// //use users
app.use("/api/users", users);

app.use("/api/medicine", medicine);

app.use("/api/secretary", secretary);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));
