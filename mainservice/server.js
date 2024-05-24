

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const cors=require('cors');

// Middleware
app.use(bodyParser.json());

app.use(cors());
//Routes

const authRoutes = require('./routes/auth');
const candidateRoutes = require('./routes/candidates');
const publicRoutes =require('./routes/public');

app.use('/api', authRoutes);
app.use('/api/candidates', candidateRoutes);
app.use('/api/public',publicRoutes);

//connection to mongodb
mongo_uri="mongodb+srv://muralikrishnamurakonda04:Murali%40889@cluster0.qlrdidp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(mongo_uri)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));