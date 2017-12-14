const TareaModel = require('../models/tarea');


function listar_tareas(req, res) {

    TareaModel.find(function (err, tarea) {
        if (err) return res.status(500).send({ message: `Error al realizar la petición` });
        //if(tarea) return res.status(404).send({message: `Sin resultados`});
        res.status(200).send({ tarea });
    })
}


function listar_tarea(req, res) {

    let taskId = req.params.id;

    TareaModel.findById(taskId, function (err, tarea) {
        if (err) return res.status(500).send({ message: `Error al realizar la petición` });
        //if(tarea) return res.status(404).send({message: `Sin resultados`});
        res.status(200).send({ tarea });
    })
}


function nueva_tarea(req, res) {

    let tarea = new TareaModel();

    tarea.name = req.body.name;
    tarea.priority = req.body.priority;
    tarea.category = req.body.category;
    tarea.description = req.body.description;

    tarea.save((err) => {

        if (err) return res.status(500).send({ message: `Error al realizar la petición ${err}` });

        res.status(200).send({ message: 'Tarea guardada' });
    })
}

function modificar_tarea(req, res) {

    let tareaId = req.params.id;
    let tareaEdit = req.body;

    TareaModel.findByIdAndUpdate(tareaId, tareaEdit,
        (err, tareaResult) => {
            if (err) return res.status(500).send({ message: `Error al realizar la petición: ${err}` })
            res.status(200).send({ message: 'Tarea modificada.' });
        })

}

function eliminar_tareas(req, res) {

    let tareaId = req.params.id;

    TareaModel.findById(tareaId, (err, tarea) => {
        if (err) return res.status(500).send(`Error al realizar la petición: ${err}`);

        tarea.remove(err => {
            if (err) return res.status(500).send(`Error al remover la tarea: ${err}`);
            res.status(200).send({ message: 'Tarea removida' });
        })
    })
}



module.exports = {
    listar_tareas,
    listar_tarea,
    nueva_tarea,
    modificar_tarea,
    eliminar_tareas
}

