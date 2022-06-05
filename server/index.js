const express = require('express');
const cors = require('cors');
const app = express();

        //'https://rpg-vitroo.herokuapp.com',
        //'https://rpgvitroo-backend.herokuapp.com'
        //,        'http://localhost:3000'

const corsConfig = {
    origin:"*",
    credentials:true,            
    optionSuccessStatus:204  
};

app.use(cors(corsConfig));
app.use(express.json());

app.use('/rpg', require('./route/mesasRoute'));
app.use('/rpg', require('./route/personagensRoute'));
app.use('/rpg', require('./route/mesas_personagensRoute'));

app.listen(process.env.PORT || 5555);