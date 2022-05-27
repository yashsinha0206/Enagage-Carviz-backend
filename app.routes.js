const { CarsRouter } = require('./API/cars/cars.routes')

const router = require('express').Router()

router.get('/test',(req, res) => {
    console.log(req)
    return res.status(200).json({
        "message": "success"
    })
})

router.use('/cars',CarsRouter)

module.exports.AppRoutes = router;