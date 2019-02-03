const express = require('express');
const logger = require('./utils/logger');
const attachRoutes = require('./utils/attachRoutes');
const routerConfig = require('./config');

const app = express();

const router = attachRoutes(express.Router(), routerConfig);

app.use('/api/v1', router);

app.use(express.static('build'));

const port = process.env.SERVICES_PORT || 3002;

app.listen(port, () => logger(`App listening on port ${port}`));
