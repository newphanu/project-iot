const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const router = require('./router');

var mqtt = require('mqtt');

const MQTT_SERVER = "broker.emqx.io";
const MQTT_PORT = "8083";
const MQTT_USER = ""; 
const MQTT_PASSWORD = "";

var client = mqtt.connect({
    host: MQTT_SERVER,
    port: MQTT_PORT,
    username: MQTT_USER,
    password: MQTT_PASSWORD
});

client.on('connect', () => {
    console.log("MQTT Connected to broker:", MQTT_SERVER);
    client.subscribe('iot/power', (err) => {
        if (err) {
            console.error("Subscription error:", err);
        } else {
            console.log("Subscribed to topic: iot/power");
        }
    });
});

client.on('error', (error) => {
    console.error("MQTT Connection Error:", error);
});

client.on('message', (topic, message) => {
    if (topic === 'iot/power') {
        console.log(`Received message on topic ${topic}: ${message.toString()}`);

        // Attempt to parse the message if it's in JSON format
        try {
            const payload = JSON.parse(message.toString());
            console.log("Parsed payload:", payload);
        } catch (err) {
            console.error("Message parsing error:", err);
        }
    } else {
        console.log(`Received message on topic ${topic}, but it's not 'iot/power'.`);
    }
});

dotenv.config();
const port = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(router);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
