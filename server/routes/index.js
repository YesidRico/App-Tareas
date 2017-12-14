const express = require('express');
const tareasCtrl = require('../controllers/tarea')
const route = express.Router();


route.get('/tareas',tareasCtrl.listar_tareas);
route.get('/tareas/:id',tareasCtrl.listar_tarea);
route.post('/tareas',tareasCtrl.nueva_tarea);
route.put('/tareas/:id', tareasCtrl.modificar_tarea);
route.delete('/tareas/:id',tareasCtrl.eliminar_tareas);


module.exports = route

