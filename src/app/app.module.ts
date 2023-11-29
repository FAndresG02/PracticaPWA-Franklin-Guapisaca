import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

import { FIREBASE_APP_NAME, FIREBASE_OPTIONS } from '@angular/fire/compat';
import { NotaComponent } from './paginas/nota/nota.component';
import { EditarComponent } from './paginas/editar/editar.component';
import { ListarComponent } from './paginas/listar/listar.component';
import { GestionComponent } from './paginas/gestion/gestion.component';
import { MostrarComponent } from './paginas/mostrar/mostrar.component';



@NgModule({
  declarations: [
    AppComponent, 
    NotaComponent,
    EditarComponent,
    ListarComponent,
    GestionComponent,
    MostrarComponent
  ],
  imports: [
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [

    { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
