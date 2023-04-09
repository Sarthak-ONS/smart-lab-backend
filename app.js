require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')


const userRoutes = require('./routes/user')
const adminRoutes = require('./routes/admin')

const app = express();

const PORT = process.env.PORT;

app.use(bodyParser.json());


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    next();
})

// All the Routes.
app.get('/', (req, res, next) => {
    res.status(200).json({ messsage: 'Succces, Now Enjoy!.' });
})

app.use('/user', userRoutes);
app.use('/admin', adminRoutes);


// Error Routes
app.use((error, req, res, next) => {
    console.log(error);
    res.status(501).json({ error: error });
});


app.listen(PORT, () => {
    console.log(`App is running on PORT=${PORT}`);
})