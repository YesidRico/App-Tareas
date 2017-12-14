import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { AppService } from '../app.service';
import { Tarea } from '../tarea';

@Component({

    selector: 'detalle-tarea',
    templateUrl: './detalletarea.component.html',
    styleUrls: ['detalletarea.component.css']
})
export class DetalleTareaComponent {

    public tarea: Tarea = new Tarea();
    public categories: Array<any>;
    public states: Array<any>;
    public priorities: Array<any>;
    public message: string;

    constructor(
        private _appService: AppService,
        private _route: ActivatedRoute,
        private _location: Location
    ) {
        this.categories = [
            { category: 'Trabajo', value: 'Trabajo' },
            { category: 'Estudio', value: 'Estudio' },
            { category: 'Hogar', value: 'Hogar' }
        ];

        this.states = [
            { state: 'Realizada', value: 'Realizada' },
            { state: 'No Realizada', value: 'No Realizada' }
        ];


        this.priorities = [
            { priority: 'Muy Alta', value: 'Muy Alta' },
            { priority: 'Alta', value: 'Alta' },
            { priority: 'Media', value: 'Media' },
            { priority: 'Baja', value: 'Baja' }
        ];
    }

    ngOnInit() {
        this.listar_tarea();
    }

    listar_tarea() {

        let _id = this._route.snapshot.paramMap.get('id');

        this._appService.listar_tarea(_id)
            .subscribe(
            res => {
                this.tarea = res['tarea'];
                console.log(this.tarea);
            },
            err => {
                console.log(err);
            }
            )
    }


    modificar_tarea() {

        let _id = this._route.snapshot.paramMap.get('id');
        this._appService.modificar_tarea(_id, this.tarea)
            .subscribe(res => {
                this.message = "Tarea Modificada";
            },
            err => {
                console.log(err);
            })
    }

    eliminar_tarea() {
        let _id = this._route.snapshot.paramMap.get('id');
        this._appService.eliminar_tareas(_id)
            .subscribe(res => {
                console.log(res);
                this.goBack();
            },
            err => {
                console.log(err);
            })
    }


    goBack() {
        this._location.back();
    }
}