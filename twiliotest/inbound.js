const express = require('express');
const VoiceResponse = require('twilio').twiml.VoiceResponse;
const urlencoded = require('body-parser').urlencoded;

const app = express();


app.post('/voice', (request, response) => {
  const twiml = new VoiceResponse();
  twiml.say({ voice: 'alice' }, 'hello world!');

  // Render the response as XML in reply to the webhook request
  response.type('text/xml');
  response.send(twiml.toString());
});

// Create an HTTP server and listen for requests on port 3000
console.log('Twilio Client app HTTP server running at http://127.0.0.1:3000');
app.listen(3000);
