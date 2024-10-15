#SQL Client

show databases;
use flights_search_db;
show tables;
desc Airplanes;
select * from airports;
select * from cities;
select * from airports join cities on airports.cityId = cities.id where cities.id = 9; <!-- To get all banglore airports -->

npx sequelize db:migrate <!-- ensure that your database schema is up-to-date with the latest definitions and changes specified in your migration files. -->
npx sequelize db:seed:all <!-- populate your database with the data specified in your seed files -->

db.sequelize.sync({alter: true});

# IN POSTMAN
POST - localhost:8080/api/v1/city and add city in body (name: city_name)

4th Video - 2:23:21

5th Video - 37:10

5th Video - 1:12:34

6th Video - 53:36