const express = require('express'),
    app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('pages/index');
    console.log(req)
})

app.get('/about', (req, res) => {
    res.render('pages/about');
    console.log(req.originalUrl)
})

app.listen(() => console.log(`Server Running on`));