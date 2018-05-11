import { Component, OnInit } from '@angular/core';
import { SetService } from '../api/set.service';
import { UserService, LoginCredentials } from '../api/user.service';
// import { FileSelectDirective } from 'ng2-file-upload';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';
// import { FileUploader } from 'ng2-file-upload/file-upload/file-uploader.class';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-set-create',
  templateUrl: './set-create.component.html',
  styleUrls: ['./set-create.component.css']
})
export class SetCreateComponent implements OnInit {

  uploader: FileUploader = new FileUploader ({
    url: `${environment.backendUrl}/api/upload`
    // url: `https://api.mixcloud.com//upload/?access_token=HJtqWA6CCAHKvkhTsLfDntjjyvzBMuRE`
    
  });

  newSet = {
    name: ''
  };

  feedback: string;

  constructor(
    public apiSet: SetService
  ) { }

  ngOnInit() {
    this.uploader.onSuccessItem = (item, response) => {
      this.feedback = JSON.parse(response).message;
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.feedback = JSON.parse(response).message;
    };

    // this.uploader.onBeforeUploadItem = (item) => {
    //   item.withCredentials = false;
    // }
  }

  // addSpec(spec) {
  //   this.newPhone.specs.push(spec);
  // }

  submit() {
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('name', this.newSet.name);
      // form.append('brand', this.newSet.name);
      // form.append('specs', JSON.stringify(this.newSet.name));
      // this.uploader.uploadItem(item);
    };

    this.uploader.uploadAll();
    // this.uploader.uploadItem(item);
  }

}
