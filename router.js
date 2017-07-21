import express, { Router } from 'express';
// Import index action from movies controller
import { getData, tester } from './controllers/measures';


const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Initialize the router
const router = Router();

// Handle /movies.json route with index action from movies controller
router.route('/data')
  .get(getData);

router.route('/')
  .get(tester);

export default router;
