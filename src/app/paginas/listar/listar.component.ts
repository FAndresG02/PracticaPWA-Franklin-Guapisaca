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

  constructor(private router: Router, private route: ActivatedRoute, private PracticaService: PracticaService) {
    this.notaL = [];
    this.obtenerNotas();
  }
  
  
  obtenerNotas() {
    this.notaL = this.PracticaService.obtener();
  }

  formatFecha(fecha: string): string {
    let dateParts = fecha.split("-");
    return `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
  }

  listarN(): void {
    this.router.navigate(['./listar'], { relativeTo: this.route });
  }

} 
