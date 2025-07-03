import { Router, RouterLink } from '@angular/router';
import { Vol } from '../../vol';
import { VolService } from './../../vol.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-tableau-vols',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tableau-vols.component.html',
  styleUrl: './tableau-vols.component.css'
})
export class TableauVolsComponent {
  router:Router=inject(Router);
OnNavigateToEdit(id:number) {
this.router.navigate(['admin/editVol',id])
}
supprimerVol(id: number) {
this.volService.deleteVol(id).subscribe(result=>{
  console.log("khedmit");
  window.location.reload();
})
}
  ListVol:Vol[]=[];
volService:VolService=inject(VolService);
ngOnInit(): void {
this.volService.getAllVol().subscribe((result:any)=>{
  console.log(result.data)
  this.ListVol=result.data;
})

}
}
