// Routes/RoutesConfig.js
const express = require('express');
const router = express.Router();
const { signup, signin, getUsers } = require('../Controllers/userController');
const authMiddleware = require('../Middlewares/authMiddleware');
const { createFundraiser, fetchFundraiser, deleteFundraiser } = require('../Controllers/fundraiserController');
const multer = require('multer');
const path = require('path');

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

// Routes
router.post('/signup', signup);
router.route('/signin').post(signin).get(getUsers);
router.post('/signin', signin);
router.route('/fundraisers').post(createFundraiser).get(fetchFundraiser);
router.delete('/fundraisers/:id', deleteFundraiser); // Add this line for deleting fundraisers
router.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  const imageUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
  res.status(200).send({ imageUrl });
});

// Example of a protected route
router.get('/protected', authMiddleware, (req, res) => {
  res.send('This is a protected route');
});

module.exports = router;
