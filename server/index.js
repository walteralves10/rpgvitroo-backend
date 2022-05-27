const express = require('express');
const cors = require('cors');
const app = express();

const corsConfig = {
    origin:[
        'https://rpg-vitroo.herokuapp.com',
        'https://rpg-vitroo.herokuapp.com/lista',
        'https://rpg-vitroo.herokuapp.com/mesa',
        'https://rpg-vitroo.herokuapp.com/listamesas',
    ],
    credentials:true,            
    optionSuccessStatus:204    
};

app.use(cors(corsConfig));
app.use(express.json());

app.use('/rpg', require('./route/mesasRoute'));
app.use('/rpg', require('./route/personagensRoute'));
app.use('/rpg', require('./route/mesas_personagensRoute'));

app.listen(process.env.PORT || 5555);