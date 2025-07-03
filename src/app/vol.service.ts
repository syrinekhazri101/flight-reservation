import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vol } from './vol';
import { Reservation } from './reservation';
const URL="http://localhost:3000/vols";
const URLReservation="http://localhost:3000/reservations"
@Injectable({
  providedIn: 'root'
})
export class VolService {
  private readonly http: HttpClient = inject(HttpClient);
  getAllVol():Observable<Vol[]>{
    return this.http.get<Vol[]>("http://localhost:4000/api/vols");
  }
  searchVol(villeDepart:string,villeDestination:string):Observable<Vol[]>{
    return this.http.get<Vol[]>(`http://localhost:4000/api/vols/${villeDepart}/${villeDestination}`);
  }
  getVolById(id:number):Observable<Vol[]>{
    return this.http.get<Vol[]>(`http://localhost:4000/api/vols/${id}`);
  }
  reserver(reservation:any):Observable<Reservation>{
    return this.http.post<Reservation>("http://localhost:4000/api/reservation/add",reservation);
  }
  getreserverBYid(id:number):Observable<Reservation[]>{
    return this.http.get<Reservation[]>(`http://localhost:4000/api/reservation/${id}`);
  }
  deleteVol(id:number):Observable<Vol>{
    return this.http.delete<Vol>(`http://localhost:4000/api/vols/delete/${id}`);
  }
  modifierVol(id:number, data:any):Observable<Vol>{
    return this.http.patch<Vol>("http://localhost:4000/api/updateRow/"+id, data);
  }
  addVol(vol:any):Observable<Vol>{
    return this.http.post<Vol>("http://localhost:4000/api/vols/add",vol);
  }
  getAllReservation():Observable<Reservation[]>{
   return this.http.get<Reservation[]>("http://localhost:4000/api/reservation");
  }
deleteReservation(id:number):Observable<Reservation>{
  return this.http.delete<Reservation>("http://localhost:4000/api/reservation/delete/"+id);
}
editeReservation(id:number,data:any):Observable<Reservation>{
  return this.http.patch<Reservation>("http://localhost:4000/api/updateReservation/"+id,data);
}
volavecreduction():Observable<Vol[]>{
  return this.http.get<Vol[]>("http://localhost:4000/api/reduction");
}
confirmer(id: number): Observable<Reservation> {
  const url = `http://localhost:4000/api/updatestatus/${id}`;
  return this.http.patch<Reservation>(url, null);
 }
 getReserationByUser(id:number):Observable<any>{
  return this.http.get<any>("http://localhost:4000/api/reservationByUser/"+id);
 }
}
