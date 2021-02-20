const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const axios = require('axios');
const appendToGet = require('./appendToGet');
const cors = require('cors')
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

const axiosInstance = axios.create({
    baseURL: 'https://jobs.github.com'
});

app.get('/github/jobs', async(req, res, next) => {
    try {
        const response = await axiosInstance.get(`/positions.json${ appendToGet({ 
          description: req.query.description, 
          location: req.query.location, 
          full_time: req.query.full_time
        }) }`);
        res.setHeader('Content-Type', 'application/json');
        res.send(response.data)
    } catch (error) {
        console.log(error)
    }
})

app.get('/github/job', async(req, res, next) => {
  try {     
      const response = await axiosInstance.get(`/positions/${ req.query.id }.json`);
      res.setHeader('Content-Type', 'application/json');
      res.send(response.data)
  } catch (error) {
      console.log(error)
  }
})

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);