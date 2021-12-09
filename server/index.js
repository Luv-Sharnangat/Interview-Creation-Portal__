
const express = require('express'); 
const cors = require('cors');
const twilio = require('twilio'); 

//twilio requirements -- Texting API 
const accountSid = 'ACe7df2c00889cfa89c27bc9c3834cbdbb';
const authToken = 'f417696aaa229b9fdae2343748f73834'; 
const client = new twilio(accountSid, authToken);

const app = express(); //alias

app.use(cors()); //Blocks browser from restricting any data

//Welcome Page for the Server 
app.get('/', (req, res) => {
    res.send('Welcome to the Express Server')
})

//Twilio 
app.get('/send-text', (req, res) => {
    //Welcome Message
    res.send('Hello to the Twilio Server')

    //_GET Variables
    const { recipient, textmessage } = req.query;


    //Send Text
    client.messages.create({
        body: textmessage,
        to: "+91" + recipient,  // Text this number
        from: '+19548748527' // From a valid Twilio number
    }).then((message) => console.log(message.body));
})

app.listen(4000, () => console.log("Running on Port 4000"))