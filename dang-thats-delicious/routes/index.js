const express = require('express');
const router = express.Router();

// every time console.log in express, it logs in node machine rather than frontend

// --- can only send on response, or else it will error

// --- req has all the request info, request
// --- res has all the methods to send data back, response

router.get('/', (req, res) => {
    console.log('hey!!!');
    const wes = { name: 'wes', age: 100, cool: true};

    // res.send('Hey! it works!');
    // res.json(wes);

    // --- takes data from query string http://localhost:7777/?name=wes&age=100&cool=true
    // res.send(req.query.name);
    // res.json(req.query);

    res.render('hello', {
        name: 'wes',
        dog: req.query.dog,
        title: 'I love food'
    });
});

router.get('/reverse/:name', (req, res) => {
    const reverse = [...req.params.name].reverse().join('');
    res.send(reverse);
});

module.exports = router;
