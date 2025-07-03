import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  router: Router=inject(Router);
  id!:string;
deconnecer() {
localStorage.removeItem('connected');
localStorage.removeItem('passagerID');
localStorage.removeItem('achat');
location.reload();
this.router.navigate(['/home']);
}
  connected!: string ;
  ngOnInit(): void {
    this.connected=localStorage.getItem('connected') || "";
    this.id=localStorage.getItem('passagerID') || "";

  }


}
