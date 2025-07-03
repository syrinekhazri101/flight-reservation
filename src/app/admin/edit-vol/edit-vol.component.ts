import { ActivatedRoute, Router } from '@angular/router';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { VolService } from '../../vol.service';
import { Vol } from '../../vol';

@Component({
  selector: 'app-edit-vol',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-vol.component.html',
  styleUrl: './edit-vol.component.css'
})
export class EditVolComponent {
serviceVol:VolService=inject(VolService);
vol!:Vol;
editForm!: FormGroup ;
activatedRoute:ActivatedRoute=inject(ActivatedRoute);
router:Router=inject(Router);
readonly fb: FormBuilder = inject(FormBuilder)

ngOnInit(): void {

  this.editForm = this.fb.nonNullable.group({
    image: ['', Validators.required],
    numeroVol: ['', Validators.required],
    villeDepart: ['', Validators.required],
    aeroportDepart: ['', Validators.required],
    dateDepart: ['', Validators.required],
    heureDepart: ['', Validators.required],
    villeDestination:['', Validators.required],
    aeroportDestination: ['', Validators.required],
    dateArrivee: ['', Validators.required],
    heureArrivee: ['', Validators.required],
    duree: ['', Validators.required],
    prix: ['', Validators.required],
    placesDisponibles: ['', Validators.required],
    reduction: ['', Validators.required],
  });
  this.serviceVol.getVolById(this.activatedRoute.snapshot.params["id"]).subscribe((result:any) => {
    this.vol = result.data[0];
    console.log(result.data[0]);

    this.editForm.patchValue({
      image: this.vol.image,
      numeroVol: this.vol.numeroVol,
      villeDepart: this.vol.villeDepart,
      aeroportDepart: this.vol.aeroportDepart,
      dateDepart: this.vol.dateDepart,
      heureDepart: this.vol.heureDepart,
      villeDestination: this.vol.villeDestination,
      aeroportDestination: this.vol.aeroportDestination,
      dateArrivee: this.vol.dateArrivee,
      heureArrivee: this.vol.heureArrivee,
      duree: this.vol.duree,
      prix: this.vol.prix,
      placesDisponibles: this.vol.placesDisponibles,
      reduction:this.vol.reduction
    });
  });
}
onSubmit() {
const data={
  ...this.editForm.value,
  id:this.vol.id,
  classe:JSON.stringify(["Économique", "Affaires", "Première"]),

};
this.serviceVol.modifierVol(this.vol.id, data).subscribe( (response) => {
    console.log('Modification réussie', response);
    this.router.navigate(['admin/TableauVols']);
  });
}
}
