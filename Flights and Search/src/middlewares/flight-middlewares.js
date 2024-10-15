const { ClientErrorCodes } = require('../utils/error-codes');

const validateCreateFlight = (req, res, next) => {
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime || 
        !req.body.departureTime || 
        !req.body.price
    ) {
        // if any of the body params is missing we come inside the if
        console.log(req.body);
        console.log("req.body");
        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            message: 'Invalid request body for create flight',
            err: 'Missing mandatory properties to create a flight'
        });
    }

    console.log(req.body);

    next();
}

module.exports = {
    validateCreateFlight
}