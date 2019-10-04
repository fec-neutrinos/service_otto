const express = require('express');
const app = express();
const routes = require('./routes');
const port = 3010;

app.use(express.static('public'));
app.use('/', routes);

app.listen(port, () => console.log(`Drop's Related Products API running on port ${port}`));