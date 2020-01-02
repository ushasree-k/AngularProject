import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserModel } from '../Model/user.model';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
    existingUsers:UserModel[]=[];

  private currentUserSubject: BehaviorSubject<UserModel>;
    public currentUser: Observable<UserModel>;

    constructor(private httpClient: HttpClient) {
      //private http: HttpClient
         this.currentUserSubject = new BehaviorSubject<UserModel>(JSON.parse(localStorage.getItem('currentUser')));
         this.currentUser = this.currentUserSubject.asObservable();
         if(!localStorage.getItem("existingUsers")){
          //Service Call to json file or json file can be replacecd with actual DB call 
          this.httpClient.get("assets/Data/users.json").subscribe(data =>{
            var d = data as UserModel[];
          d.forEach(element => {
              console.log(element);
              let user = new UserModel();
               user.Email = element.Email;
               user.PassWord = element.PassWord;
               user.Role= element.Role;
               user.Status=element.Status;
               user.UserName = element.UserName;
               this.existingUsers.push(user);
               localStorage.setItem("existingUsers",JSON.stringify(this.existingUsers));
          });
        });
      }
      else{
        this.existingUsers = JSON.parse(localStorage.getItem("existingUsers"));
      }
    }

    
    public get currentUserValue(): UserModel {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        
      //To be deleted when actual services are applied
      //console.log(this.existingUsers);
      var user = this.existingUsers.filter(x=>(x.UserName == username || x.Email == username)  && x.PassWord == password && x.Status == "Active");
      //console.log(user);
      if(user.length > 0){
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
