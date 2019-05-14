const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/api', (req, res) => {
    res.json({
        message: 'welcome to the Api'
    });
}); 

app.post('/api/post', verifyToken, (req, res) => {
    res.json({
        message: 'Post request created and  is working fine '
    });
});

app.post('/api/login', (req, res) => {
    // MOck user
    const user = {
        id: 1,
        username: 'elozzy',
        email: 'elozzy@gmail.com'

    }

    jwt.sign({user: user}, 'secretKey', (err, token) => {
        res.json({
            token
        });
    });
});

//Format of token


//verify token
function verifyToken(req, res, next){
     // Get auth header value
     const bearerHeader = req.bearerHeader['authorization'];
}


app.listen(5000, () => console.log('Server started on port 5000'));