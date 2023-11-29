import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotaComponent } from './paginas/nota/nota.component';
import { ListarComponent } from './paginas/listar/listar.component';
import { EditarComponent } from './paginas/editar/editar.component';
import { GestionComponent } from './paginas/gestion/gestion.component';


const routes: Routes = [
  //Redirige a la ruta "/paginas/nota" cuando se ingresa a la aplicación 
  { path: "", redirectTo: "/paginas/nota", pathMatch: "full" },
  { path: "paginas/nota", component: NotaComponent },
  { path: "paginas/listar", component: ListarComponent },
  { path: "paginas/editar/:id", component: EditarComponent },
  { path: "paginas/gestion", component: GestionComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
