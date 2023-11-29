import { Component } from '@angular/core';
import { Nota } from 'src/app/services/practica.service';
import { Router } from '@angular/router';
import { PracticaService } from 'src/app/services/practica.service';


@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent {
  nota: Nota = new Nota()

  //Inicialización de la variable nota 
  constructor(private router: Router, private practicaService: PracticaService) {
    let params = this.router.getCurrentNavigation()?.extras.queryParams
    if (params) {
      console.log(params);
      this.nota = params['tarea'] || new Nota()
    }
  }

  //Comprueba si los campo de nombre, nota y fecha estan llenos
  private camposLlenos(): boolean {
    return !!this.nota.nombre && !!this.nota.nota && !!this.nota.fecha;
  }

  //Guarda las notas y muestra las notas almacenadas
  guardarN(): void {
    if (!this.camposLlenos()) {
      alert('Por favor, completa todos los campos antes de guardar la nota.');
      return;
    }
    this.practicaService.guardar(this.nota)
    this.nota = new Nota()
    this.router.navigate(['paginas/listar']);
    alert('Nota guardada con éxito.');
  }

}
