const express = require('express');
const router = express.Router();
const passport = require('passport');
const Recipe = require('../models/recipe');
const User = require('../models/User');

// Corrected POST route to create a recipe
router.post(
  '/create',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { name, thumbnail, track } = req.body;
    console.log(`Name: ${name}\nThumbnail: ${thumbnail}\nTrack: ${track}`);
    if (!name || !thumbnail || !track) {
      return res
        .status(400)
        .json({ err: 'Insufficient details to create recipe.' });
    }
    // This code is now reachable
    const creator = req.user._id;
    const recipeDetails = { name, thumbnail, track, creator };
    const createdRecipe = await Recipe.create(recipeDetails);
    return res.status(201).json(createdRecipe); // Use 201 for resource creation
  }
);

// Corrected GET route for myrecipes
router.get(
  '/get/myrecipes',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const recipes = await Recipe.find({ creator: req.user._id }).populate(
      'creator'
    );
    return res.status(200).json({ data: recipes });
  }
);

// Corrected GET route for a specific user's recipes
router.get(
  '/get/user/:userId',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { userId } = req.params;
    const user = await User.findOne({ _id: userId });
    if (!user) {
      return res.status(404).json({ err: 'User does not exist' });
    }
    const recipes = await Recipe.find({ creator: userId });
    return res.status(200).json({ data: recipes });
  }
);

// Corrected GET route for a single recipe by name
router.get(
  '/get/recipename/:recipeName',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { recipeName } = req.params;
    const recipes = await Recipe.find({ name: recipeName }).populate('creator');
    return res.status(200).json({ data: recipes });
  }
);

module.exports = router;
