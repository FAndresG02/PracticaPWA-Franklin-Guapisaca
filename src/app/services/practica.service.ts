import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'


@Injectable({
  providedIn: 'root'
})
export class PracticaService {
  notaCollection: AngularFirestoreCollection<any>;

  //Suscribe a los cambios en notaCollection registrando cualquier cambio en consola
  private suscribirCambios() {
    this.notaCollection.valueChanges().subscribe(data => {
      console.log('Cambios en la colección de notas:', data);
    });
  }

  //Inicialización de notaCollection
  constructor(private firestore: AngularFirestore) {
    this.notaCollection = firestore.collection('nota');
    this.suscribirCambios();
  }

  //Obtiene todas las notas de la colección
  obtener() {
    return this.notaCollection.valueChanges();
  }

  //Obtiene una nota en especifico de la colección y proporciona un id
  obtenerNota(id: string){
    console.log('id', id)
    return this.firestore.doc('nota'+'/'+id).valueChanges()
  }

  //Agregar una nueva nota a la colección
  guardar(nota: Nota) {
    const id = this.firestore.createId()
    nota.id = id
    return this.notaCollection.doc(nota.id).set({...nota});
  }

  //Actualiza la nota en la colección
  actualizar(nota: Nota){
    return this.notaCollection.doc(nota.id).update({...nota})
  }

  //Elimina una nota de la colección
  eliminar(id: string) {
    return this.notaCollection.doc(id).delete();
  }

}

//Clase que permite guardar los datos de la colección
export class Nota {
  id?: string;
  nombre?: string;
  fecha?: string;
  nota?: string;
}