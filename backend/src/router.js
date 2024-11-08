const { Router } = require('express')
const getUser = require('./controllers/getUser')
const getEmail = require('./controllers/getOneUser')
const getHistoricalData = require('./controllers/getSensorHistory')

const router = Router()

router.get('/', (req, res) => {
    res.send('Hello World')
})

router.get('/get-users', getUser)
router.get('/get-email', getEmail)
router.get('/get-sensor-history', getHistoricalData)

    
module.exports = router