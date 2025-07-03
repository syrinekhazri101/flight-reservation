import { UserService } from './../../user.service';
import { Component, inject,  } from '@angular/core';
import { RouterOutlet, ActivatedRoute, RouterLink, Router } from '@angular/router';
import { User } from '../../user';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
userService:UserService=inject(UserService);
ActivatedRoute:ActivatedRoute=inject(ActivatedRoute);
admin!:User;
router:Router=inject(Router)
ngOnInit(): void {
 this.userService.getUserById(Number(localStorage.getItem('passagerID'))).subscribe((result:any)=>{
  this.admin=result.data[0];
  console.log(result.data[0]);
 })
}
deconnecter(){
localStorage.removeItem('connected');
localStorage.removeItem('passagerID');
localStorage.removeItem('achat');

}
}
