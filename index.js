const express = require('express');
const router = require('./src/routes')
const app = express();

const port = 5000;

app.use(express.json());
app.use('/public', express.static("public"));
app.use('/api/sd-jatirahayu-iv/', router);

app.listen(port, console.log(`Server Runnning on Port ${port}`))