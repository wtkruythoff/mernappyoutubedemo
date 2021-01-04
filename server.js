const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
// const cors = require('cors');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api');

const MONGODB_URI = 'mongodb+srv://WTKruythoff:Master112@cluster0.vkk2l.mongodb.net/<dbname>?retryWrites=true&w=majority';

mongoose.connect(process.env.MONGODB_URI || MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!')
});

app.use(express.json());
app.use(express.urlencoded({ extended: false}));


//// Saving data to mongodb
// const data = {
//     title: 'Welcome to Infinite Observations',
//     body: 'Natural disaster information'
// };


// const newBlogPost = new BlogPost(data); // new instance of the model

// newBlogPost.save((error) => {
//     if (error) {
//         console.log('Oops, something is wrong!')
//     } else {
//         console.log('Data has been saved.')
//     }
// })

// .save();

// app.use(cors());


//HTTP request logger
app.use(morgan('tiny'));
app.use('/api', routes);


// STEP 3
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
