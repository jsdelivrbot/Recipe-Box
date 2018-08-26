const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

    // Serve any static files
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));
    // Handle React routing, return all requests to React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../react-ui/build', 'index.html'));
});
  
app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = { app };