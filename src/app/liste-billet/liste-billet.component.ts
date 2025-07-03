import { TimePipePipe } from './../time-pipe.pipe';
import { VolService } from './../vol.service';
import { Component, inject } from '@angular/core';
import { Reservation } from '../reservation';
import { BilletComponent } from "../billet/billet.component";
import { ActivatedRoute, Router } from '@angular/router';
import { AddHeurePipe } from '../add-heure.pipe';

@Component({
  selector: 'app-liste-billet',
  standalone: true,
  imports: [TimePipePipe,AddHeurePipe,BilletComponent],
  templateUrl: './liste-billet.component.html',
  styleUrl: './liste-billet.component.css'
})
export class ListeBilletComponent {



volservice:VolService=inject(VolService);
listeReservation:any[]=[];
activatedRoute: ActivatedRoute=inject(ActivatedRoute);
router:Router=inject(Router)
ngOnInit(): void {
  this.volservice.getReserationByUser(this.activatedRoute.snapshot.params["passagerId"]).subscribe((result:any)=>{
    console.log(result);
    this.listeReservation=result.data

  })
}

navigateToHome() {
this.router.navigate(['/home']);
}

annuler(id: number) {
  this.volservice.deleteReservation(id).subscribe(data=>{
    console.log("réservation  annuler");
    window.location.reload();

  })
  }
  confirmer(id:number) {
    this.volservice.confirmer(id).subscribe(data=>{
      console.log("réservation confirmer");
      window.location.reload();

    })
  }
}
