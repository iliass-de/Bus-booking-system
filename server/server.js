const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const hostname = '127.0.0.1';
const port = 3000;




app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});