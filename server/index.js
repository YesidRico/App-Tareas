const mongoose = require('mongoose');

const app = require('./app');
const config = require('./config');

app.listen(config.port, function () {
    console.log(`Corriendo en localhost:${config.port}`);
})

mongoose.connect(config.db, (err) => {

    if(err) return console.log(`Error al realizar la conexión: ${err}`);

    console.log('Conexión db');
})


