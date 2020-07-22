import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AngularFireStorage } from '@angular/fire/storage';
import { LoadingController } from '@ionic/angular';
import { tap, finalize, filter } from 'rxjs/operators';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
})
export class ImageUploadComponent implements OnInit {

  @Input() type:string;
  @Input() icon:string;
  @Output() uploadFinished = new EventEmitter<any>();
  
  constructor(private camera: Camera,
    private storage: AngularFireStorage,
    private loadingCtrl: LoadingController) { }

  ngOnInit() {}

  async captureAndUpload(){
    console.log("camera");
    const options: CameraOptions = {
      quality: 33,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.type=='camera'?this.camera.PictureSourceType.CAMERA:this.camera.PictureSourceType.PHOTOLIBRARY
    } 

    console.log("options", options);
    const base64 = await this.camera.getPicture(options);
    
    this.startUpload(base64);
  }

  async startUpload(file: string){
    let byteCharacters = atob(file);
    const path = `adjuntos/imgs/${new Date().getTime()}`;
   
    let image = 'data:image/jpg;base64,'+file;
    
    console.log(image);
    const data = {
      ref: path,
      type: 'image',
      url: null,
      name: 'image',
      size: this.fileSize(Number(byteCharacters.length))
    }

    try{
      let ref = this.storage.ref(path);
      
      let task = ref.putString(image, 'data_url');
    
      console.log("ref 2");
      const loading = await this.loadingCtrl.create({
        message: 'Espere, subiendo fotografía...'
      });  
      await loading.present(); 

      //Listener de progreso de carga
      task.percentageChanges().pipe(
        filter(val => val === 100),
        tap(complete => {
          setTimeout(() => {
            loading.dismiss();
          }, 3500);
        })
      ).subscribe();

      task.snapshotChanges().pipe(
        finalize(() => {
          let downloadURL = ref.getDownloadURL()
          downloadURL.subscribe(url => {
            data.url= url;
            console.log("donload terminado "+ url);
            this.uploadFinished.emit(data);
          });
        })
      )
      .subscribe();
    }catch(error){
      console.error(JSON.stringify(error));
      console.error("error ");
    }
    
  }

  /**
   * Redondea un número de bytes a un tamaño legible
   * @param sizeInBytes Número de bytes
   */
  fileSize(sizeInBytes: number) {
    const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    let power = Math.round(Math.log(sizeInBytes) / Math.log(1024));
    power = Math.min(power, units.length - 1);

    const size = sizeInBytes / Math.pow(1024, power); // size in new units
    const formattedSize = Math.round(size * 100) / 100; // keep up to 2 decimals
    const unit = units[power];

    return size ? `${formattedSize} ${unit}` : '0';
  }

}