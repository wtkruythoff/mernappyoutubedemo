const express = require('express');
const router = express.Router();
const BlogPost = require('../models/blogPost');

//Route#1
router.get('', (req, res) => {
    // const data = {
    //     username: 'WladimirKruythoff',
    //     age: 35
    // }

    BlogPost.find({ })
    .then((data) => {
        console.log('Data: ', data)
        res.json(data);
    })
    .catch((error) => {
        console.log('error: ', error)
    });

    // res.json(data);
});

//Route#2
router.post('/save', (req, res) => {
    console.log('Body: ', req.body);
    const data = req.body;

    const newBlogPost = new BlogPost(data);

    // .save

    newBlogPost.save((error) => {
        if (error) {
            res.status(500).json({msg: 'sorry, internal server error!'});
            return;
        } 
        // BlogPost
        return res.json({
            msg: 'Data has been received.'
        });
    });
    
});


//Route#3
router.get('/name', (req, res) => {
    const data = {
        username: 'InfiniteOberservations',
        age: 3
    }
    res.json(data);
});


module.exports = router;