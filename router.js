import express, { Router } from 'express';
// Import index action from movies controller
import { pins } from './controllers/measures';
import { dataCSV } from './controllers/measuresCSV';


const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Initialize the router
const router = Router();

// Handle /movies.json route with index action from movies controller
router.route('/data')
  .get(dataCSV);

router.route('/pins')
  .get(pins);

export default router;
