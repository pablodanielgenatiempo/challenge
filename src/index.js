const express = require("express");
const bodyParser = require('body-parser');

const app = express();

app.set('port', 3000);
app.set('json spaces', 2)

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/zoo', require('./routes/zoo'));
app.use('/url-parser', require('./routes/urlParser'));
app.use('/error-alarm', require('./routes/errorAlarm'));

app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`)
});