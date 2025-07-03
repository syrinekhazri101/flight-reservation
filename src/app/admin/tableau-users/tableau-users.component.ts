import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../../user.service';
import { User } from '../../user';

@Component({
  selector: 'app-tableau-users',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tableau-users.component.html',
  styleUrl: './tableau-users.component.css'
})
export class TableauUsersComponent {
  userService:UserService=inject(UserService);
  listeUsers:User[]=[];
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((result:any)=>{
      this.listeUsers=result.data;
    })

  }
supprimerReservation(id: number) {
this.userService.deleteUserById(id).subscribe(data=>{
  window.location.reload();
})
}
OnNavigateToEdit(arg0: any) {
throw new Error('Method not implemented.');
}
ListReservation: any;

}
