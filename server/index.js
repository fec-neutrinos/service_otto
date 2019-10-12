const express = require('express');
const app = express();
const routes = require('./routes');
const port = 3010;
const cors = require('cors');
const morgan = require('morgan');

app.use(cors());
app.use(morgan('dev'));
app.use(express.static('public'));
app.use('/', routes);

app.listen(port, () => console.log(`Drop's Related Products API running on port ${port}`));