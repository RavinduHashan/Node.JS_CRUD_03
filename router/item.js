const epxress = require('express')
const router = epxress.Router()

const restaurantControl = require('../controller/restaurant')

router.get('/readMenu',
restaurantControl.getMenu)

router.post('/createMenu',
restaurantControl.creatMenu)

router.patch('/updateMenu/:id', 
restaurantControl.updateMenu)

router.delete('/deleteMenu/:id', 
restaurantControl.deleteMenu)

module.exports = router