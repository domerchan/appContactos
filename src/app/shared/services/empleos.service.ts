import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
//import { Event } from '../models/event';
import { Empleo } from '../model/empleo';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpleosService {

  constructor(private afs: AngularFirestore) { }

  getEmpleos(): Observable<any[]>{
    return this.afs.collection('empleos', 
        ref => ref.orderBy('nombre', 'asc')).valueChanges();
  }

  getEmpleosPorNombre(): Observable<any[]>{
    return this.afs.collection('empleos',
    ref => ref.where("nombre", "==", "Plomero")).valueChanges();
  }
  
  getEmpleo(uid: string): Observable<any>{
    let itemDoc = this.afs.doc<any>(`empleos/${uid}`);
    return itemDoc.valueChanges();
  }

  insertEmpleo(empleo: Empleo) {
    const refEmpleo = this.afs.collection('empleos')
    empleo.uid = this.afs.createId()
    const param = JSON.parse(JSON.stringify(empleo));
    refEmpleo.doc(empleo.uid).set(param, {merge: true})
  }

  mergeEmpleo(empleo: Empleo) {
    console.log('mergeEmpleo')
    console.log(empleo)
    const refEmpleo = this.afs.collection('empleos')
    const param = JSON.parse(JSON.stringify(empleo));
    refEmpleo.doc(empleo.uid).set(param, {merge: true})
  }

  async getEmpleoById(uid:string): Promise<Empleo>{
    try{
      let aux:any = await this.afs.collection('empleos',
      ref => ref.where('uid', '==', uid))
      .valueChanges().pipe(first()).toPromise().then(doc => {
        return doc;
      }).catch(error => {
        throw error;
      });
      if (aux.length == 0)
        return undefined;
      return aux[0];
    } catch(error) {
      console.error("Error", error);
      throw error;
    }
  }
}
