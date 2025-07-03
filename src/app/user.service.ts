import { inject, Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly URL = 'http://localhost:3000/users';


  creeCompt(user: User){
    const newUser = {
      nom: user.nom,
      prenom: user.prenom,
      telephone:user.telephone,
      email: user.email,
      password: user.mdp,
      passport_num:user.passport_num,
      estAdmin:0
    };
    console.log('Nouveau voyageur enregistré :', newUser);
    return this.http.post("http://localhost:4000/api/user/add", newUser);
  }
  login(email: string, password: string){
    return this.http.get<object>("http://localhost:4000/api/user/"+email+"/"+password)
  }
  getUserById(id:number):Observable<User>{
    return this.http.get<User>("http://localhost:4000/api/user/"+id);
  }
  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>("http://localhost:4000/api/user")
  }
  deleteUserById(id:number):Observable<User>{
    return this.http.delete<User>("http://localhost:4000/api/user/delete/"+id)
  }
  changePassword(data: { oldPassword: string; newPassword: string }): Observable<User>{
        return this.http.patch <User>(`http://localhost:4000/api/user/changerPassword`,data);
  }
}
