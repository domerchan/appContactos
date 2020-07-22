import { Component, OnInit } from '@angular/core';
import { Empleo } from '../../model/empleo';
import { EmpleosService } from '../../services/empleos.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-crear-empleo',
  templateUrl: './crear-empleo.page.html',
  styleUrls: ['./crear-empleo.page.scss'],
})
export class CrearEmpleoPage implements OnInit {

  empleo: Empleo = new Empleo

  base64Image: any;
  constructor(private EmpleosService: EmpleosService, private camera: Camera) { }

  ngOnInit() {
  }

  guardarEmpleo(){
    console.log(this.empleo)
    this.EmpleosService.insertEmpleo(this.empleo)
  }

  tomarFoto() {
    const options: CameraOptions = {
      quality: 100, 
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      console.log(this.base64Image);
    }, (err) => {
      console.error(err);
    });
  }

  imagenCargada(e) {
    console.log("imagen cargada");
    console.log(JSON.stringify(e));
    this.empleo.image = e;
  }
}
