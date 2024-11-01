const { Router } = require('express')
const getUser = require('./controllers/getUser')

const router = Router()

router.get('/', (req, res) => {
    res.send('Hello World')
})

router.get('/get-users', getUser)
    
module.exports = router