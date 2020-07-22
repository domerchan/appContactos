import { Component, OnInit } from '@angular/core';
import { EmpleosService } from '../../services/empleos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-empleo',
  templateUrl: './empleo.page.html',
  styleUrls: ['./empleo.page.scss'],
})
export class EmpleoPage implements OnInit {

  empleo: Observable<any>

  constructor(private EmpleosService: EmpleosService,
    private route: ActivatedRoute, public router: Router) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.empleo = this.EmpleosService.getEmpleo(id)

    this.empleo.subscribe(data => {
      console.log(data)
    })

    let auxEmpleo = await this.EmpleosService.getEmpleoById(id);
    console.log("await", auxEmpleo.nombre);
  }

  editarEmpleo(id: any) {
    this.router.navigate([`editar-empleo/${id}`])
  }

}
