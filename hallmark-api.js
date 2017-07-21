
import express from 'express';
import morgan from 'morgan';
import router from './router';

app.set('port', (process.env.PORT || 5000));

// Initialize http server
const app = express();

// Logger that outputs all requests into the console
app.use(morgan('combined'));
// Use router for all API endpoints
app.use('/', router);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
