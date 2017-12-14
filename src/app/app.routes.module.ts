import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './ListadoTarea/listado.component';
import { DetalleTareaComponent } from './detalleTarea/detalletarea.component';
import { AppComponent } from './app.component';

const rotes: Routes = [
    { path: '', redirectTo: '/mis-tareas', pathMatch: 'full' },
    { path: 'mis-tareas', component: ListadoComponent },
    { path: 'detalle-tarea/:id', component: DetalleTareaComponent }
];

@NgModule({

    imports: [RouterModule.forRoot(rotes)],
    exports: [RouterModule]
})
export class AppRoutesModule { }