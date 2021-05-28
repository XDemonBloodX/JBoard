const express = require("express");
const port = 3000;

const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require("./source/controllers/offer.js")(app);
require("./source/controllers/user.js")(app);
require("./source/controllers/userInfo.js")(app);

app.get("/", (req, res) => {
    res.send("Yo");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});