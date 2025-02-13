let cors = require('cors');
let express = require('express');
let app = express();


app.use(express.json());
app.use(cors());

// let absolutePath = __dirname + '/view/index.html';
// app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send("Hello World!");
    });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });

app.get('/hello', (req, res) => {
    console.log('GET request received at /hello');
    res.send('Hello World!');
    });

app.post('/capitalize', (req, res) => {
    console.log('POST request received at /capitalize');
    let text = req.body.text;
    res.send(text.toUpperCase());
    
    });