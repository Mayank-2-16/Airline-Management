const CrudRespository = require('./crud-repository');
const { Airport } = require('../models/index');
/* The AirportRespository class extends the CrudRespository class and provides a specific implementation 
for managing Airport objects. It inherits the functionalities provided by the CrudRespository class, 
such as creating, reading, updating, and deleting Airport objects. */

/*
The constructor method is defined within the AirportRespository class.

Inside the constructor, the super keyword is used to call the constructor of the parent 
class (CrudRespository).

The Airport model is passed as an argument to the super function. This means that the 
AirportRespository class will use the Airport model for managing Airport objects.

*/

class AirportRespository extends CrudRespository {
    constructor() {
        super(Airport);
    }
}

module.exports = AirportRespository;