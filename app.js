const express = require('express');
const app = express();
const cors = require('cors');
var path = require('path');

const port = 4000;

app.use(cors());

// Parser of JSON and stores data to body in req
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Access static files
app.use(express.static(path.join(__dirname, 'public')));

// Setting-up routes
app.use(require('./routes'));

app.listen(process.env.PORT || port, () => {
    console.log('server running is up at port ' + port);
});