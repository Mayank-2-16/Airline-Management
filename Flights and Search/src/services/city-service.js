const { CityRepository } = require("../repository/index")

class CityService {
    constructor() {
        this.repository = new CityRepository();
    }
    async createCity(data) {
        try {
            const city = await this.repository.createCity(data);
            return city;
        } catch (error) {
            console.log("Something went wrong in Service Layer");
            throw new error;
        }
    }

    async deleteCity(cityId) {
        try {
            const response = await this.repository.deleteCity(cityId);
            return response
        } catch (error) {
            console.log("Something went wrong in Service Layer");
            throw new error;
        }
    }

    async updateCity(cityId, data) {
        try {
            const city = await this.repository.updateCity(cityId, data);
            return city;
        } catch (error) {
            console.log("Something went wrong in Service Layer");
            throw new error;
        }
    }

    async getCity(cityId) {
        try {
            const city = await this.repository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in Service Layer");
            throw new error;
        }
    }

    async getAllCities(filter) {
        try {
            const cities = await this.repository.getAllCities({name: filter.name});
            return cities;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
}

module.exports = CityService