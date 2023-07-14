const express = require('express');
const { PORT } = require('./config');

const routes = require('./routes/index');
const auth = require('./middlewares/auth');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(auth);

app.use('/', routes);

app.listen(PORT);
