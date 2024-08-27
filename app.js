const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}));

app.use(express.static('public'));


app.get('/',(req, res) => {res.send('Hello, Express!');
});

app.get('/about',(req, res) => {res.send('This is About page');
});

app.get('/contact',(req, res) => {res.send('contact@shakharthapa2004@gmail.com');
});

app.get('/user/:id',(req, res) => {const userId = req.params.id; 
    res.send('User profile for user ID:${userId}');
});

app.post('/submit',(req, res) => {const {name, message} = req.body; 
    res.send('Recieved submission from ${name}:${message}');
});

app.get('/services',(req, res) =>  {res.send('These are our services');
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {console.log('Server is running on port ${PORT}'); 

});