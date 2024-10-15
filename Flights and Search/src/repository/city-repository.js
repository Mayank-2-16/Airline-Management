const { Op } = require('sequelize');
const { where } = require("sequelize");
const { City }  = require("../models/index")

class CityRepository{
    async createCity({name}){
        try {
            const city = await City.create({name})
            return city;
        } catch (error) {
            console.log("Something went wrong in addCity Call in city-repository.js");
            throw new Error;
        }
    }

    async deleteCity(cityId){
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in deleteCity Call in city-repository.js");
            throw new Error;
        }
    }

    async updateCity(cityId, data){
        try {
            // const city = await City.update(data, {
            //     where: {
            //         id: cityId
            //     },
            // });
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        } catch (error) {
            console.log("Something went wrong in updateCity Call in city-repository.js");
            throw new Error;
        }
    }

    async getCity(cityId){
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in getCity Call");
            throw new Error;
        }
    }

    async getAllCities(filter) { // filter can be empty also
        try {
            if(filter.name) {
                const cities = await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                });
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
}

module.exports = CityRepository;