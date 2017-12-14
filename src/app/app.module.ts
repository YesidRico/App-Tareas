import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppRoutesModule} from './app.routes.module';

import {AppService} from './app.service';

import { AppComponent } from './app.component';
import { ListadoComponent } from './ListadoTarea/listado.component';
import { DetalleTareaComponent } from './detalleTarea/detalletarea.component';



@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    DetalleTareaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutesModule    
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
