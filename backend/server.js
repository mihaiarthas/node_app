const express       = require('express');
const bodyParser    = require('body-parser');
const app           = express();

let index           = require('./routes/index.js');
let api             = require('./routes/api.js');
let config          = require('./routes/config.js');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('../frontend'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', index);
app.use('/api', api);
app.use('/config', config);

app.listen(8080);