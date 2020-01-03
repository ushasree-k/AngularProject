import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserModel } from '../Model/user.model';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { RegistrationModel } from '../Model/registration.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
    existingUsers:RegistrationModel[]=[];

  private currentUserSubject: BehaviorSubject<RegistrationModel>;
    public currentUser: Observable<RegistrationModel>;

    constructor(private httpClient: HttpClient) {
      //private http: HttpClient
         this.currentUserSubject = new BehaviorSubject<RegistrationModel>(JSON.parse(localStorage.getItem('currentUser')));
         this.currentUser = this.currentUserSubject.asObservable();
         if(!localStorage.getItem("existingUsers")){
          this.httpClient.get("assets/Data/users.json").subscribe(data =>{
            var d = data as RegistrationModel[];
          d.forEach(element => {
              console.log(element);
              let user = new RegistrationModel();
               user.email = element.email;
               user.password = element.password;
               user.role= element.role;
               user.status=element.status;
               user.userName = element.userName;
               user.cellPhone = element.cellPhone;
               user.firstName = element.firstName;
               user.lastName = element.lastName;
               user.middleName= element.middleName;
               user.grade= element.grade;
               user.title= element.title;
               user.status =element.status;
               this.existingUsers.push(user);
               localStorage.setItem("existingUsers",JSON.stringify(this.existingUsers));
          });
        });
      }
      else{
          this.existingUsers = JSON.parse(localStorage.getItem("existingUsers"));
      }
    }

    
    public get currentUserValue(): RegistrationModel {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        
      //To be deleted when actual services are applied
      console.log(this.existingUsers);
      var user = this.existingUsers.filter(x=>(x.userName == username || x.email == username)  && x.password == password && x.status == "Active")[0];

      console.log(user);
      if(user){
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
