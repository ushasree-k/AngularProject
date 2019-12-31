import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserModel } from './Model/user.model';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<UserModel>;
    //public currentUser: Observable<UserModel>;

    constructor() {
      //private http: HttpClient
        // this.currentUserSubject = new BehaviorSubject<UserModel>(JSON.parse(localStorage.getItem('currentUser')));
        // this.currentUser = this.currentUserSubject.asObservable();
    }

    // public get currentUserValue(): UserModel {
    //     return this.currentUserSubject.value;
    // }

    login(username: string, password: string,existinguserList:UserModel[]) {
      //To be deleted when actual services are applied
      var user = existinguserList.filter(x=>(x.UserName == username || x.Email == username)  && x.PassWord == password && x.Status == "Active");
      console.log(user);
      if(user.length > 0){
      //  var user = new UserModel();
      //  user.UserName = 'test' ;
      //  user.PassWord = 'test';
      //  user.Role = 'admin';
      //  user.Status = 'active';
       localStorage.setItem('currentUser', JSON.stringify(user));
       return user;
      }
        // return this.http.post<any>(`${config.apiUrl}/users/authenticate`, { username, password })
        //     .pipe(map(user => {
        //         // login successful if there's a jwt token in the response
        //         if (user && user.token) {
        //             // store user details and jwt token in local storage to keep user logged in between page refreshes
        //             localStorage.setItem('currentUser', JSON.stringify(user));
        //             this.currentUserSubject.next(user);
        //         }

        //         return user;
        //     }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
