const router = require('express').Router();
const myController = require('../controllers');

router.get('/', myController.awesomeFunction);
router.get('/awesome', myController.returnAnotherPerson);

router.use('/contacts', require('./contacts'));

module.exports = router