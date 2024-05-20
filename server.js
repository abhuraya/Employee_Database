const path = require('path');
const express = require('express');
const INQ = require('./assets/scripts/index.js')

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const inq = new INQ;

inq.mainMenu();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});