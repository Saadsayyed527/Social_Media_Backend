const Post = require('../models/Post');
const User = require('../models/User');

// Create a post
exports.createPost = async (req, res) => {
  const { content } = req.body;
  try {
    const post = new Post({
      user: req.user.id,
      content,
    });

    await post.save();
    res.json(post);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

// Follow a user
exports.followUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const userToFollow = await User.findById(req.params.id);

    if (!userToFollow) {
      return res.status(404).json({ msg: 'User not found' });
    }

    if (user.following.includes(req.params.id)) {
      return res.status(400).json({ msg: 'Already following this user' });
    }

    user.following.push(req.params.id);
    userToFollow.followers.push(req.user.id);

    await user.save();
    await userToFollow.save();

    res.json({ msg: 'User followed' });
  } catch (err) {
    res.status(500).send('Server error');
  }
};

// Get user's posts
exports.getUserPosts = async (req, res) => {
  try {
    const posts = await Post.find({ user: req.user.id });
    res.json(posts);
  } catch (err) {
    res.status(500).send('Server error');
  }
};
