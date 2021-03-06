
var cool = require('cool-ascii-faces');
import express from 'express';
import morgan from 'morgan';
import router from './router';

// Initialize http server
const app = express();

app.set('port', (process.env.PORT || 5000));

app.set('trust proxy', 'loopback, 10.120.100.55') 

// Logger that outputs all requests into the console
app.use(morgan('combined'));
// Use router for all API endpoints
app.use('/', router);

// app.get('/', function(request, response) {
//   response.send(cool());
// });


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
