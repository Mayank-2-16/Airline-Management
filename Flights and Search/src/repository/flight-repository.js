const { Flights } = require('../models/index');
const { Op } = require('sequelize');

class FlightRepository {

    /**
     * The function `createFilter` takes in data object properties for arrivalAirportId,
     * departureAirportId, minPrice, and maxPrice to construct a filter object for querying flight data.
     * @param data - The `createFilter` function takes in an object `data` as a parameter. This object
     * may contain the following properties:
     * @returns The `createFilter` function returns a filter object based on the data provided. The
     * filter object includes conditions for filtering based on arrivalAirportId, departureAirportId,
     * and price range (minPrice and maxPrice). The function constructs the filter object dynamically
     * based on the presence of these data fields.
     */
    #createFilter(data) {
        let filter = {};
        if (data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if (data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }

        // if(data.minPrice && data.maxPrice) {
        //     Object.assign(filter, {
        //         [Op.and]: [
        //             { price: {[Op.lte]: data.maxPrice} }, 
        //             { price: {[Op.gte]: data.minPrice} }
        //         ]
        //     })
        // }
        let priceFilter = [];
        if (data.minPrice) {
            // Object.assign(filter, {price: {[Op.gte]: data.minPrice}});
            priceFilter.push({ price: { [Op.gte]: data.minPrice } });
        }
        if (data.maxPrice) {
            // Object.assign(filter, {price: {[Op.lte]: data.maxPrice}});
            priceFilter.push({ price: { [Op.lte]: data.maxPrice } });
        }
        Object.assign(filter, { [Op.and]: priceFilter });
        // Object.assign(filter, {[Op.and]: [{ price: {[Op.lte]: 7000} }, { price: {[Op.gte]: 4000} }]})
        // console.log(filter);
        return filter;
    }

    async createFlight(data) {
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async getFlight(flightId) {
        try {
            const flight = await Flights.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async getAllFlights(filter) {
        try {
            const filterObject = this.#createFilter(filter);
            const flight = await Flights.findAll({
                where: filterObject
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async updateFlights(flightId, data) {
        try {
            await Flights.update(data, {
                where: {
                    id: flightId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }
}

module.exports = FlightRepository;
/*
{
    where: {}
}

*/