import { Component, OnInit } from '@angular/core';
import { SetService } from '../api/set.service';
import { UserService, LoginCredentials } from '../api/user.service';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { environment } from '../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-set-create',
  templateUrl: './set-create.component.html',
  styleUrls: ['./set-create.component.css']
})
export class SetCreateComponent implements OnInit {

  newSet = {
    name: '',
    description: '',
    nickname: ''
  };

  roundId: string;
  userId: string;
  feedback: string;
  eventId: string;

  uploader: FileUploader = new FileUploader ({
    // url: `${environment.backendUrl}/api/upload`
    url: `${environment.backendUrl}/api/upload/event/${this.eventId}/round/${this.roundId}/user/${this.userId}`
  });

  constructor(
    public apiSet: SetService,
    public userTruc: UserService,
    private reqTruc: ActivatedRoute,
    private resTruc: Router
  ) { }

  ngOnInit() {
    this.reqTruc.paramMap
    .subscribe((myParams) => {
      this.roundId = myParams.get('roundId');
      this.eventId = myParams.get('eventId');
    });

    this.userId = this.userTruc.currentUser._id;

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
    
    this.newSet.nickname = this.userTruc.currentUser.nickname;
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('name', this.newSet.name);
      form.append('description', this.newSet.description);
      form.append('nickname', this.newSet.nickname);
      item.url = `${environment.backendUrl}/api/upload/event/${this.eventId}/round/${this.roundId}/user/${this.userId}`;
    };
    this.uploader.uploadAll();

    // console.log(this.eventId);
    // console.log(this.roundId);
    // console.log(this.userId);
  }

}
