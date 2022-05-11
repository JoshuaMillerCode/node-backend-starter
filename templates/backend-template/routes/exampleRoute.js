const { Router } = require('express')
const exampleCtrl = require('../controllers/exampleCtrl')

const router = Router()

router.get('/example', exampleCtrl.controller)


module.exports = router