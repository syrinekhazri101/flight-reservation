import { Router } from '@angular/router';
import { Vol } from '../vol';
import { VolService } from './../vol.service';
import { Component, inject, Input } from '@angular/core';

@Component({
  selector: 'app-vol',
  standalone: true,
  imports: [],
  templateUrl: './vol.component.html',
  styleUrl: './vol.component.css'
})
export class VolComponent {

router:Router=inject(Router);
detail(id:number){
 this.router.navigate(['detail',id]);
 localStorage.setItem('achat',String(id));
}
@Input('vol')Vol!:Vol;
}
