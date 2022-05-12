require('dotenv').config()

var accountSid = 'AC924e6223c70f68f8c38834fc844bf035';
var authToken = 'b13dab2b3770be73fc90bd6737c39911';

var client = require('twilio')('AC924e6223c70f68f8c38834fc844bf035', 'b13dab2b3770be73fc90bd6737c39911');

client.calls
      .create({
         url: 'https://3ee9-165-155-168-174.ngrok.io/voice',
         to: '+13477204689',
         from: '+13477516730'
       }, function(err, call) {
           if(err) {
               console.log(err);
           }
           else {
               console.log(call.sid);
           }
       })

client.calls('AC924e6223c70f68f8c38834fc844bf035')
       .update({twiml: '<Response><Say>Ahoy there</Say></Response>'})
       .then(call => console.log(call.to));