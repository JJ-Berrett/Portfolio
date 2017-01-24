'use strict';
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(express.static('./public'));


app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
