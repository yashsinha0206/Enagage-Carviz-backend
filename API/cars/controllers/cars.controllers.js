const { Cars } = require("../models/cars.models")

// API Controller to get all the data from db at once
exports.GET_CARS_DATA = async (req,res) => {

    let cars_data = null
    try{
        cars_data = await Cars.find({}).exec()
    }catch(error){
        return res.status(500).json({'error': error})
    }

    return res.status(200).json(cars_data)

    
}



// API Controller to get the data of
// companies vs number of cars. Filters of 
// minimum price and maximum price, company are also provided
// to filter out the data according to user 
// requirements. 

exports.NO_OF_CARS = async (req, res) => {

    query = []

    if(req.query.min_price){
        query.push({
            $match: {
                $expr: {
                    $gte: ["$Ex-Showroom_Price", parseInt(req.query.min_price)]
                }
            }
        })
    }

    if(req.query.max_price){
        query.push({
            $match: {
                $expr: {
                    $lte: ["$Ex-Showroom_Price", parseInt(req.query.max_price)]
                }
            }
        })
    }

    query.push({
        $group: {
            _id: "$Make",
            count: { $count: { } }
        }
    })

    let data = null
    try{
        data = await Cars.aggregate(query).exec()
    }catch(error){
        console.log(error)
        return res.status(500).json({"error": error})
    }


    return res.status(200).json(data)
}



// API Controller to get the list of all
// cars of any specific company. Here
// only company's name, model, variant, price
// is sent to the frontend

exports.COMPANY_CARS_LIST = async (req, res) => {

    query = []

    if(req.query.company_name){
        query.push({
            $match: {
                "Make": req.query.company_name
            }
        })
    }

    query.push({
        $project: {
            "Make": 1,
            "Model": 1,
            "Variant": 1,
            "Ex-Showroom_Price": 1,
            "Price": "$Ex-Showroom_Price"
        }
    })

    let company_cars_data = null
    try{
        company_cars_data = await Cars.aggregate(query).exec()
    }catch(error){
        console.log(error)
        return res.status(500).json({"error": error})
    }

    return res.status(200).json(company_cars_data)

}


// API Controller to get the details of
// single car using car_id sent from the frontend

exports.SINGLE_CARS_DETAILS = async (req, res) => {

    if(!req.query.car_id){
        return res.status(400).json({
            "error": "Cars ID is required!"
        })
    }

    let car_data = null
    try{
        car_data = await Cars.findOne({"_id": req.query.car_id}).exec()
    }catch(error){
        console.log(error)
        return res.status(500).json({"error": error})
    }

    return res.status(200).json(car_data)

}


// API Controller to get the count of number of cars vs
// the fuel type. For this api too, minimum price, maximum 
// price and company's name filter can be added

exports.FUEL_TYPE_OF_CARS = async (req, res) => {

    query = []

    if(req.query.min_price){
        query.push({
            $match: {
                $expr: {
                    $gte: ["$Ex-Showroom_Price", parseInt(req.query.min_price)]
                }
            }
        })
    }

    if(req.query.max_price){
        query.push({
            $match: {
                $expr: {
                    $lte: ["$Ex-Showroom_Price", parseInt(req.query.max_price)]
                }
            }
        })
    }

    if(req.query.company_name){
        query.push({
            $match: {
                "Make": req.query.company_name
            }
        })
    }

    query.push({
        $group: {
            _id: "$Fuel_Type",
            count: { $count: { } }
        }
    })

    let data = null
    try{
        data = await Cars.aggregate(query).exec()
    }catch(error){
        console.log(error)
        return res.status(500).json({"error": error})
    }


    return res.status(200).json(data)

}



// API Controller for getting the count of number of car
// vs body type of the car. Here also min price, max price and
// company filters are provided

exports.BODY_TYPE_OF_CARS = async (req, res) => {

    query = []

    if(req.query.min_price){
        query.push({
            $match: {
                $expr: {
                    $gte: ["$Ex-Showroom_Price", parseInt(req.query.min_price)]
                }
            }
        })
    }

    if(req.query.max_price){
        query.push({
            $match: {
                $expr: {
                    $lte: ["$Ex-Showroom_Price", parseInt(req.query.max_price)]
                }
            }
        })
    }

    if(req.query.company_name){
        query.push({
            $match: {
                "Make": req.query.company_name
            }
        })
    }

    query.push({
        $group: {
            _id: "$Body_Type",
            count: { $count: { } }
        }
    })

    let data = null
    try{
        data = await Cars.aggregate(query).exec()
    }catch(error){
        console.log(error)
        return res.status(500).json({"error": error})
    }


    return res.status(200).json(data)

}


// API Controller for getting the count of number of car
// vs number of gears in the car. Here also min price, max price and
// company filters are provided

exports.NUMBER_OF_GEARS = async (req, res) => {

    query = []

    if(req.query.min_price){
        query.push({
            $match: {
                $expr: {
                    $gte: ["$Ex-Showroom_Price", parseInt(req.query.min_price)]
                }
            }
        })
    }

    if(req.query.max_price){
        query.push({
            $match: {
                $expr: {
                    $lte: ["$Ex-Showroom_Price", parseInt(req.query.max_price)]
                }
            }
        })
    }

    if(req.query.company_name){
        query.push({
            $match: {
                "Make": req.query.company_name
            }
        })
    }

    query.push({
        $group: {
            _id: "$Gears",
            count: { $count: { } }
        }
    })

    let data = null
    try{
        data = await Cars.aggregate(query).exec()
    }catch(error){
        console.log(error)
        return res.status(500).json({"error": error})
    }


    return res.status(200).json(data)

}


// API Controller for getting the count of number of car
// vs type of car. Here also min price, max price and
// company filters are provided

exports.CAR_TYPE = async (req, res) => {

    query = []

    if(req.query.min_price){
        query.push({
            $match: {
                $expr: {
                    $gte: ["$Ex-Showroom_Price", parseInt(req.query.min_price)]
                }
            }
        })
    }

    if(req.query.max_price){
        query.push({
            $match: {
                $expr: {
                    $lte: ["$Ex-Showroom_Price", parseInt(req.query.max_price)]
                }
            }
        })
    }

    if(req.query.company_name){
        query.push({
            $match: {
                "Make": req.query.company_name
            }
        })
    }

    query.push({
        $group: {
            _id: "$Type",
            count: { $count: { } }
        }
    })

    let data = null
    try{
        data = await Cars.aggregate(query).exec()
    }catch(error){
        console.log(error)
        return res.status(500).json({"error": error})
    }


    return res.status(200).json(data)

}


// API Controller to get the average price of 
// the cars against power. Here, Mongodb $group 
// aggregation is used to calculate average price based on 
// power groups.

exports.POWER_VS_AVERAGE_PRICE = async (req, res) => {

    query = []

    if(req.query.company_name){
        query.push({
            $match: {
                "Make": req.query.company_name
            }
        })
    }

    query.push({
        $group: {
            _id: "$Power",
            avgPrice: {
                $avg: "$Ex-Showroom_Price"
            }
        }
    })

    let data = null
    try{
        data = await Cars.aggregate(query).exec()
    }catch(error){
        console.log(error)
        return res.status(500).json({"error": error})
    }


    return res.status(200).json(data)
}


// API Controller to get the average city mileage of 
// car vs the mode . Here, Mongodb $group 
// aggregation is used to calculate average mileage based on 
// car groups.

exports.MODEL_VS_CITY_MILEAGE = async (req, res) => {

    query = []

    if(req.query.company_name){
        query.push({
            $match: {
                "Make": req.query.company_name
            }
        })
    }

    query.push({
        $group: {
            _id: "$Model",
            avgMileage: {
                $avg: "$City_Mileage"
            }
        }
    })

    let data = null
    try{
        data = await Cars.aggregate(query).exec()
    }catch(error){
        console.log(error)
        return res.status(500).json({"error": error})
    }


    return res.status(200).json(data)
}


// API Controller for getting the count of number of car
// vs parking assistance available in them. Here also min price, max price and
// company filters are provided

exports.PARKING_ASSISTANCE = async (req, res) => {

    query = []

    if(req.query.min_price){
        query.push({
            $match: {
                $expr: {
                    $gte: ["$Ex-Showroom_Price", parseInt(req.query.min_price)]
                }
            }
        })
    }

    if(req.query.max_price){
        query.push({
            $match: {
                $expr: {
                    $lte: ["$Ex-Showroom_Price", parseInt(req.query.max_price)]
                }
            }
        })
    }

    if(req.query.company_name){
        query.push({
            $match: {
                "Make": req.query.company_name
            }
        })
    }

    query.push({
        $group: {
            _id: "$Parking_Assistance",
            count: { $count: { } }
        }
    })

    let data = null
    try{
        data = await Cars.aggregate(query).exec()
    }catch(error){
        console.log(error)
        return res.status(500).json({"error": error})
    }


    return res.status(200).json(data)

}


// API Controller to get the count of number of cars vs
// the basic properties they provide. Here, mongodb $facet
// aggregate is used to query 5 different properties and
// calculate their count in a single query.

exports.COUNT_CARS_BASIC_PROPERTIES = async (req, res) => {


    query = []

    if(req.query.min_price){
        query.push({
            $match: {
                $expr: {
                    $gte: ["$Ex-Showroom_Price", parseInt(req.query.min_price)]
                }
            }
        })
    }

    if(req.query.max_price){
        query.push({
            $match: {
                $expr: {
                    $lte: ["$Ex-Showroom_Price", parseInt(req.query.max_price)]
                }
            }
        })
    }

    if(req.query.company_name){
        query.push({
            $match: {
                "Make": req.query.company_name
            }
        })
    }

    query.push({
        $facet: {
            "Paddle_Shifters": [{
                $match: {
                    "Paddle_Shifters": "Yes"
                }
            },
            {
                $count: "count"
            }],
            "Cruise_Control": [{
                $match: {
                    "Cruise_Control": "Yes"
                }
            },
            {
                $count: "count"
            }],
            "Turbocharger": [{
                $match: {
                    "Turbocharger": "Yes"
                }
            },
            {
                $count: "count"
            }],
            "Navigation_System": [{
                $match: {
                    "Navigation_System": "Yes"
                }
            },
            {
                $count: "count"
            }],
            "ABS_(Anti-lock_Braking_System)": [{
                $match: {
                    "ABS_(Anti-lock_Braking_System)": "Yes"
                }
            },
            {
                $count: "count"
            }]
        }
    })

    


    let data = null
    try{
        data = await Cars.aggregate(query).exec()
    }catch(error){
        console.log(error)
        return res.status(500).json({"error": error})
    }


    return res.status(200).json(data)

}