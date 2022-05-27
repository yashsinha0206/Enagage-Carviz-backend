const { GET_CARS_DATA, NO_OF_CARS, COMPANY_CARS_LIST, 
    SINGLE_CARS_DETAILS, FUEL_TYPE_OF_CARS, 
    BODY_TYPE_OF_CARS, NUMBER_OF_GEARS, CAR_TYPE, 
    POWER_VS_AVERAGE_PRICE, MODEL_VS_CITY_MILEAGE, 
    PARKING_ASSISTANCE, COUNT_CARS_BASIC_PROPERTIES } = require('./controllers/cars.controllers');

const router = require('express').Router()

router.get('/',[
    GET_CARS_DATA
])

router.get('/companies_no',[NO_OF_CARS])
router.get('/companies_cars_list',[COMPANY_CARS_LIST])
router.get('/single_car_details',[SINGLE_CARS_DETAILS])
router.get('/fuel_type',[FUEL_TYPE_OF_CARS])
router.get('/body_type',[BODY_TYPE_OF_CARS])
router.get('/gears',[NUMBER_OF_GEARS])
router.get('/car_type',[CAR_TYPE])
router.get('/power_vs_price',[POWER_VS_AVERAGE_PRICE])
router.get('/model_vs_city_mileage',[MODEL_VS_CITY_MILEAGE])
router.get('/parking_assistance',[PARKING_ASSISTANCE])
router.get('/car_properties',[COUNT_CARS_BASIC_PROPERTIES])

module.exports.CarsRouter = router;