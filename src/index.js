require('dotenv').config();

const cors = require('cors');
const express = require('express');
const router = require('./router');

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(process.env.PORT || 4000);