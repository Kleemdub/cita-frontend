import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import 'rxjs/operator/toPromise';

@Injectable()
export class UserService {

  currentUser: User;

  constructor(
    private ajaxEngine: HttpClient
  ) { }

  // GET /checklogin
  check() {
    return this.ajaxEngine
    .get(`${environment.backendUrl}/api/checklogin`, { withCredentials: true } )
    .toPromise()
    .then((apiResponse: any) => {
      this.currentUser = apiResponse.userInfo;
      return apiResponse;
    });
  }

  // POST /login
  postLogin(creds: LoginCredentials) {
    return this.ajaxEngine
    .post(
      `${environment.backendUrl}/api/login`,
      // { email:`blah`, password:`123`},
      creds,
      { withCredentials: true }
    )
    .toPromise()
    .then((apiResponse: any) => {
      this.currentUser = apiResponse.userInfo;
      return apiResponse;
    });
  }

  // POST /signup
  postSignup(signupCreds: SignupCredentials) {
    return this.ajaxEngine
    .post(
      `${environment.backendUrl}/api/signup`,
      // { email:`blah`, password:`123`},
      signupCreds,
      { withCredentials: true }
    )
    .toPromise()
    .then((apiResponse: any) => {
      this.currentUser = apiResponse.userInfo;
      return apiResponse;
    });
  }

  // GET /logout
  logout() {
    return this.ajaxEngine
    .get(`${environment.backendUrl}/api/logout`, { withCredentials: true } )
    .toPromise()
    .then((apiResponse: any) => {
      this.currentUser = apiResponse.userInfo;
      return apiResponse;
    });
  }

}

export class User {
  _id: string;
  nickname: string;
  email: string;
  updated_at: Date;
  created_at: Date;
}

export class LoginCredentials {
  email: string;
  password: string;
}

export class SignupCredentials {
  nickname: string;
  email: string;
  password: string;
}