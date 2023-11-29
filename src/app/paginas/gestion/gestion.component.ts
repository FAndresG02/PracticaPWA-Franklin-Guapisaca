import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PracticaService } from 'src/app/services/practica.service';
import { Nota } from 'src/app/services/practica.service';


@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent {
  nota: Nota = new Nota()

  constructor(private router: Router, private practicaService: PracticaService) {
    let params = this.router.getCurrentNavigation()?.extras.queryParams
    if (params) {
      console.log(params);
      this.nota = params['tarea'] || new Nota()
    }
  }

  listarN(): void {
    this.router.navigate(['paginas/listar'])
  }

}
