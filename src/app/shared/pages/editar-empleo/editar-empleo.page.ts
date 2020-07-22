import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmpleosService } from '../../services/empleos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleo } from '../../model/empleo';

@Component({
  selector: 'app-editar-empleo',
  templateUrl: './editar-empleo.page.html',
  styleUrls: ['./editar-empleo.page.scss'],
})
export class EditarEmpleoPage implements OnInit {

  e: Observable<any>;
  empleo: Empleo = new Empleo;

  constructor(private EmpleosService: EmpleosService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.e = this.EmpleosService.getEmpleo(id)
    this.e.subscribe(data => {
      this.empleo.nombre = data.nombre;
    })
    this.empleo.uid = id
  }

  guardarEmpleo() {
    if (this.empleo.nombre.trim() != "") 
      this.EmpleosService.mergeEmpleo(this.empleo);
    else
      console.log("campos vacíos!")
  }

}
