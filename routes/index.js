const express = require('express')
const router = express.Router()
const testController = require('../helpers/testController')

router.route('/test').get(testController.firstFunction)

module.exports = router