const express =  require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('These are your posts');
});

router.get('/popularPost', (req, res) => {
    res.send('Most viewed post');
});

module.exports = router;