//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/client'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/client/'}),
);

// Start the app by listening on the default Heroku port
console.log("Running...")
app.listen(process.env.PORT || 4200);