require('dotenv').config();
const express = require('express');
const InitiateMongoServer = require('./config/db');
const routes = require('./routes/routes')

InitiateMongoServer();

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use('/v1/api/user', routes)

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));