const express = require('express');
const cors = require('cors');
const app = express();

const corsConfig = {
    origin:'*',
    credentials:true,            
    optionSuccessStatus:200    
};

app.use(cors(corsConfig));
app.use(express.json());

app.use('/rpg', require('./route/mesasRoute'));
app.use('/rpg', require('./route/personagensRoute'));
app.use('/rpg', require('./route/mesas_personagensRoute'));

app.listen(process.env.PORT ||4000);