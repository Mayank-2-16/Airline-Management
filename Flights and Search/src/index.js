const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require("./config/serverConfig")
const cityRepository = require("./repository/city-repository")
const ApiRoutes = require('./routes/index')

const {Airport, City} = require("./models/index")
const db = require("./models/index")

const startAndStopServer = async () => {
    
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/api', ApiRoutes);
    
    const server = app.listen(PORT, async () => {
        console.log(`Server is running on port ${PORT}`);
        // const repo = new CityRepository();
        // repo.createCity({name: "New Delhi"});
        // repo.deleteCity({cityId: 1});
        // const airports = await Airport.findAll({
        //     include: City
        // });
        // console.log(airports)
        // db.sequelize.sync({alter: true});

        // const city = await City.findOne({
        //     where: {
        //         id: 9
        //     }
        // });
        // const airports = await city.getAirports()
        // console.log(city, airports)
    });
}

startAndStopServer();