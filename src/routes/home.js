const router = require('express').Router();
const homeController = require('../controllers/home');

router.route('/').get(homeController.getHomePageData);

module.exports = router;