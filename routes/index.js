const express = require('express')
const router = express.Router()
const testController = require('../helpers/testController')

router.route('/test').get(testController.firstFunction)
router.route('/signup').get(testController.signup)
router.route('/updateUser').get(testController.updateUser)

module.exports = router