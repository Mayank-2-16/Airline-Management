const express = require('express');
const bodyParser = require('body-parser');

// const { 3001 } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');

const db = require("./models/index")
const { User, Role } = require('./models/index'); 

const app = express();

const prepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', apiRoutes);

    app.listen(3001, async () => {
        console.log(`Server Started on Port: 3001`);
        // This method is used to synchronize the models with the database. It ensures that the database tables match the models defined in your Sequelize setup, making necessary alterations without dropping any tables..
        // // db.sequelize.sync({alter: true}); // Use this very carefully

        // const u1 = await User.findByPk(2);
        // const r1 = await Role.findByPk(1);

        // u1.addRole(r1);
    });
}   

prepareAndStartServer();