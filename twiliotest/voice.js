const VoiceResponse = require('twilio').twiml.VoiceResponse;

//Main convo loop
exports.converstation = function(request, response){
    var userInput = request.body.SpeechResult; 
    var twiml = new VoiceResponse();

    function say(text) {
        twiml.say({ voice: 'alice'}, text);
    }

    // respond with the current TwiML content
    function respond() {
        response.type('text/xml');
        response.send(twiml.toString());
    }
}