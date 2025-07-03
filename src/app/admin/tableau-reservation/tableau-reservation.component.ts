import { VolService } from './../../vol.service';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Reservation } from '../../reservation';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tableau-reservation',
  standalone: true,
  imports: [RouterLink,DatePipe],
  templateUrl: './tableau-reservation.component.html',
  styleUrl: './tableau-reservation.component.css'
})
export class TableauReservationComponent {
ListReservation!: any;
volService:VolService=inject(VolService);
router:Router=inject(Router)
supprimerReservation(id:number) {
this.volService.deleteReservation(id).subscribe(result=>{
  console.log(result);
  window.location.reload();
})
}
OnNavigateToEdit(id:number) {
this.router.navigate(['admin/editReservation/'+id]);
}
ngOnInit(): void {
this.volService.getAllReservation().subscribe((result:any)=>{
  this.ListReservation=result.data;
  console.log(result.data)
}

)
}

}
