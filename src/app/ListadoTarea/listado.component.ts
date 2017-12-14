import { Component } from '@angular/core';
import { AppService } from '../app.service'
import { Observable } from 'rxjs/Observable';

import { Tarea } from '../tarea';


@Component({
    selector: 'listado-tareas',
    templateUrl: './listado.component.html',
    styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

    public tareas: Array<Tarea[]> = [];
    public tarea = new Tarea();
    public nuevaTarea: Boolean = false;
    public TareasAEliminar: Array<any> = []

    constructor(private _appService: AppService) { }

    ngOnInit() {
       this.listar_tareas();
    }


    MostrarForm(value) {
        this.nuevaTarea = value;
    }

    listar_tareas() {

        this._appService.listar_tareas()
            .subscribe(res => {
                this.tareas = res['tarea'];
            },
            err => {
                console.log(err);
            })
    }

    nueva_tarea() {

        this._appService.nueva_tarea(this.tarea)
            .subscribe(
            res => {
                this.listar_tareas();
            },
            err => {
                console.log(err);
            })
    }


    eliminar_tareas(id) {

        console.log(id);
        //this.TareasAEliminar.push(id)

        //console.log(this.TareasAEliminar);
    }


    cancelar_eliminacion(id) {

        for (let i = 0; i < this.TareasAEliminar.length; i++) {
            if (this.TareasAEliminar[i] === id) {
                this.TareasAEliminar.slice(i, 1);
            }
        }

        console.log(this.TareasAEliminar);
    }
}