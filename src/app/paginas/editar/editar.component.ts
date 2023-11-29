import { Component } from '@angular/core';
import { Nota } from 'src/app/services/practica.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { PracticaService } from 'src/app/services/practica.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {
  nota: Nota = new Nota();

  constructor(private router: Router, private route: ActivatedRoute, private PracticaService: PracticaService){
    this.route.params.subscribe(params => this.ID(params));
  }

  private ID(params: { [key: string]: any }) {
    console.log("params");
    if(params['id']){
      this.guardar(params['id']);
    }
  }

  guardar(id: string) {
    this.PracticaService.obtenerNota(id).subscribe(data => this.asignarNota(data))
  }

  private asignarNota(data: any) {
    console.log(data);
    this.nota = data;
  }

  actualizarN(){
    this.PracticaService.actualizar(this.nota)
    alert('Nota actualizada con exito')
    this.nota = new Nota()
    
  }

  cerrarN(){
    this.router.navigate(['paginas/listar'])
  }

  eliminarN() {
    if (this.nota.id) {
      this.PracticaService.eliminar(this.nota.id)
      alert('Nota eliminada con exito')
      this.nota = new Nota();
      this.cerrarN();
    }
  }
  
}
