const express = require('express');
const cors = require('cors');
const mqtt = require('mqtt');
const knex = require('./config');  // Make sure knex.js is correctly configured
const router = require('./router');

const app = express();
app.use(cors());
app.use(router)


const mqttClient = mqtt.connect('mqtt://202.29.230.252');

let latestData = {
  voltage: 0,
  current: 0,
  power: 0,
  energy: 0,
  frequency: 0,
  pf: 0
};

mqttClient.on('connect', () => {
  console.log('Connected to MQTT broker');
  const topics = [
    'sensor/voltage',
    'sensor/current',
    'sensor/power',
    'sensor/energy',
    'sensor/frequency',
    'sensor/pf'
  ];
  
  mqttClient.subscribe(topics);
});

mqttClient.on('message', (topic, message) => {
  const key = topic.split('/')[1];
  latestData[key] = parseFloat(message.toString());
  console.log(`Received: ${topic} = ${message.toString()}`);

  // Insert the latest data into the database
  knex('sensor_data').insert({
    voltage: latestData.voltage,
    current: latestData.current,
    power: latestData.power,
    energy: latestData.energy,
    frequency: latestData.frequency,
    pf: latestData.pf
  })
  .then(() => console.log('Data saved to database'))
  .catch(err => console.error('Failed to save data:', err));
});

app.get('/api/sensor-data', (req, res) => {
  res.json(latestData);
});

app.listen(4000, '0.0.0.0', () => {
  console.log('API server running on port 4000');
});
