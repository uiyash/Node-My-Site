const express = require('express'),
    app = express();
port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('pages/index');
})

app.get('/about', (req, res) => {
    res.render('pages/about');
})

app.listen(port, () => console.log(`Server Running on ${port}`));