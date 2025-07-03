import { ActivatedRoute, Router } from '@angular/router';
import { Component, inject } from '@angular/core';
import { Vol } from '../vol';
import { VolService } from '../vol.service';

@Component({
  selector: 'app-details-vol',
  standalone: true,
  imports: [],
  templateUrl: './details-vol.component.html',
  styleUrl: './details-vol.component.css'
})
export class DetailsVolComponent {

  vol!:Vol;
volservice:VolService=inject(VolService);
ActivatedRoute:ActivatedRoute=inject(ActivatedRoute);
router:Router=inject(Router);
ngOnInit(): void {
  this.volservice.getVolById(this.ActivatedRoute.snapshot.params["id"]).subscribe((result:any)=>{
    this.vol=result.data[0];
    console.log(result.data[0]);
  })

}

reserver:boolean=false;
connected: string = localStorage.getItem('connected') || '';
OnNavigateToReservation() {
  if(this.connected==="false" || this.connected===""){
    this.router.navigate(['/login']);
    localStorage.setItem('achat', this.ActivatedRoute.snapshot.params["id"].toString());
  }
  else{
    this.router.navigate(['/AchatBillet',this.ActivatedRoute.snapshot.params["id"]]);
  }
}

}
