const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const router = require('./router');

dotenv.config();
const port = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(router);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
