const express = require('express');
const { createPost, followUser, getUserPosts } = require('../controllers/activityController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/posts', auth, createPost);
router.post('/follow/:id', auth, followUser);
router.get('/posts', auth, getUserPosts);

module.exports = router;
