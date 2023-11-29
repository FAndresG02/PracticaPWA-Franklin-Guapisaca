import { Component } from '@angular/core';
import { Nota } from 'src/app/services/practica.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PracticaService } from 'src/app/services/practica.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {
  nota:Nota[] = []
  notaL:any

  //Inicialización de la variable notaL y obtener todas las notas almacenadas
  constructor(private router: Router, private route: ActivatedRoute, private PracticaService: PracticaService) {
    this.notaL = [];
    this.obtenerNotas();
  }
  
  //Obtiene y asigna al array notaL las notas almacenadas
  obtenerNotas() {
    this.notaL = this.PracticaService.obtener();
  }

  //Convierte el formato de la fecha de "YYYY-MM-DD" a "DD/MM/YYYY"
  formatFecha(fecha: string): string {
    let dateParts = fecha.split("-");
    return `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
  }

  //Lista las notas almacenadas
  listarN(): void {
    this.router.navigate(['./listar'], { relativeTo: this.route });
  }

} 
