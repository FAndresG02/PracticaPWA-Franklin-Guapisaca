import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'


@Injectable({
  providedIn: 'root'
})
export class PracticaService {
  notaCollection: AngularFirestoreCollection<any>;

  private suscribirCambios() {
    this.notaCollection.valueChanges().subscribe(data => {
      console.log('Cambios en la colección de notas:', data);
    });
  }

  constructor(private firestore: AngularFirestore) {
    this.notaCollection = firestore.collection('nota');
    this.suscribirCambios();
  }

  obtener() {
    return this.notaCollection.valueChanges();
  }

  obtenerNota(id: string){
    console.log('id', id)
    return this.firestore.doc('nota'+'/'+id).valueChanges()
  }

  guardar(nota: Nota) {
    const id = this.firestore.createId()
    nota.id = id
    return this.notaCollection.doc(nota.id).set({...nota});
  }

  actualizar(nota: Nota){
    return this.notaCollection.doc(nota.id).update({...nota})
  }

  eliminar(id: string) {
    return this.notaCollection.doc(id).delete();
  }

}

export class Nota {
  id?: string;
  nombre?: string;
  fecha?: string;
  nota?: string;
}