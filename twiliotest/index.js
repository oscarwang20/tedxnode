const express = require('express');
const VoiceResponse = require('twilio').twiml.VoiceResponse;
const urlencoded = require('body-parser').urlencoded;

const app = express();

// Parse incoming POST params with Express middleware
app.use(urlencoded({ extended: false }));


app.post('/voice', (request, response) => {
  const twiml = new VoiceResponse();
  const gather = twiml.gather({
       input: 'speech',
       action: '/results',
       language: 'en-GB',
       speechModel: 'phone_call',
       speechTimeout: 'auto',
       hints: 'acount number, phone number, how can we help you today'
    });
  gather.say('Representative');

  // If the user doesn't enter input, loop
  twiml.redirect('/voice');

  // Render the response as XML in reply to the webhook request
  response.type('text/xml');
  response.send(twiml.toString());
});

app.all('/results', (request, response) => {
    const twiml = new VoiceResponse();
    const confidence = request.body.Confidence;
    const userInput = request.body.SpeechResult; 

    //twiml.say(userInput);

    if (userInput.includes('how can we help')){
        twiml.say("Representative");
    } else if (userInput.includes('phone number')){
        twiml.say("3 4 7 7 2 0 4 6 8 9")
    } else if (userInput.includes('account number')){
        twiml.say("unknon")
    }
    else{
        twiml.say("I didn't understand that, could you please repeat the question")
    }

    response.type('text/xml');
    response.send(twiml.toString());
});

console.log('Twilio Client app HTTP server running at http://127.0.0.1:3000');
app.listen(3000);