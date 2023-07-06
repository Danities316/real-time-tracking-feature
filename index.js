var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app);



var port = process.env.PORT || 3000;

// ******The main Idea is to use Redis and websocket.io******************

/*
The idea is to display the starting location of the luggs delivery van on a 
map and show the current location of the van on the map.The van that carries
luggages would send back its location back to the servers, then the system 
perform the logic and calculations before publishing the current location back 
to the clients.Client could be web, Android or IPhone Application used by 
subscribers.

But here  I just used the map and the load moving. This can be improve using 
redis, websocket.oi and a database. 

*/
// ************************* End of description*****************************************

// Express Middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));


// Render Main HTML file
app.get('/', (req, res) => {
    res.sendFile('views/index.html', {
        root: __dirname
    });
});

// Start the Server
http.listen(port, () => {
    console.log(`Server Started. Listening on *:  ${port}`);
});