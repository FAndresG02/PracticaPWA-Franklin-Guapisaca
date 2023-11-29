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

  //Utiliza ActivatedRoute para suscribirse a cambios en los parámetros de la URL y ejecuta el comando ID cuando hay cambios
  constructor(private router: Router, private route: ActivatedRoute, private PracticaService: PracticaService){
    this.route.params.subscribe(params => this.ID(params));
  }

  // Comprueba si existe el parámetro id en la URL y llama al método guardar
  private ID(params: { [key: string]: any }) {
    console.log("params");
    if(params['id']){
      this.guardar(params['id']);
    }
  }

  //Asigna los datos de la nota obtenidos del servicio a la instancia de Nota
  private asignarNota(data: any) {
    console.log(data);
    this.nota = data;
  }

  //Obtiene la nota con su id y asigna los datos a la instancia de nota
  guardar(id: string) {
    this.PracticaService.obtenerNota(id).subscribe(data => this.asignarNota(data))
  }

  //Actualiza la nota y reinicia la instancia de la nota
  actualizarN(){
    this.PracticaService.actualizar(this.nota)
    alert('Nota actualizada con exito')
    this.nota = new Nota()
    
  }

  //Permite visualizar las notas almacenadas o volver a visulizar las notas
  cerrarN(){
    this.router.navigate(['paginas/listar'])
  }

  //Elimina una nota mediante su id y reinicia la instancia de la nota y llama al método cerrarN
  eliminarN() {
    if (this.nota.id) {
      this.PracticaService.eliminar(this.nota.id)
      alert('Nota eliminada con exito')
      this.nota = new Nota();
      this.cerrarN();
    }
  }
  
}
