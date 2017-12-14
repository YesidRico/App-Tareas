import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpHeaderResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { variables } from './config';

import { Tarea } from './tarea';

@Injectable()
export class AppService {

    private httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private _http: HttpClient) { }

    listar_tareas(): Observable<Tarea[]> {

        return this._http.get<Tarea[]>(`${variables.urlApi}`);
    }

    listar_tarea(_id:any): Observable<Tarea> {

        return this._http.get<Tarea>(`${variables.urlApi}/${_id}`);
    }

    nueva_tarea(tarea): Observable<any> {

        return this._http.post(`${variables.urlApi}`, tarea, this.httpOptions);

    }

    modificar_tarea(_id:any,tarea:any):Observable<any>{

        return this._http.put(`${variables.urlApi}/${_id}`,tarea,this.httpOptions);
    }

    eliminar_tareas(_id: any): Observable<any> {

        return this._http.delete(`${variables.urlApi}/${_id}`, this.httpOptions);

    }
}