import { ActivatedRoute, Route, Router } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { VolService } from '../../vol.service';

@Component({
  selector: 'app-edit-reservation',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-reservation.component.html',
  styleUrls: ['./edit-reservation.component.css']
})
export class EditReservationComponent implements OnInit {
  editForm!: FormGroup;
  serviceVol: VolService = inject(VolService);
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  reservation!: any;
  readonly fb: FormBuilder = inject(FormBuilder)

  ngOnInit(): void {

    
    this.editForm = this.fb.nonNullable.group({
      nom_passager: ['', Validators.required],
      prenom_passager: ['', Validators.required],
      numeroVol: ['', Validators.required],
      dateReservation: ['', Validators.required],
      montant: ['', Validators.required],
      status:  ['', Validators.required],
      classe: ['', Validators.required],})

    this.serviceVol.getreserverBYid(this.activatedRoute.snapshot.params['id']).subscribe((result: any) => {
      console.log(result);
      this.reservation = result.data[0];

      this.editForm.patchValue({
        nom_passager: this.reservation.nom,
        prenom_passager: this.reservation.prenom,
        numeroVol: this.reservation.numeroVol,
        dateReservation: this.reservation.dateReservation,
        montant: this.reservation.montant,
        status: this.reservation.status,
        classe: this.reservation.classe,
      });
    });
  }
router:Router=inject(Router)
  onSubmit() {
    if (this.editForm.valid) {
      const updatedReservation ={
        passager_id:  this.reservation.passager_id,
        vol_id:  this.reservation.vol_id,
        dateReservation:  this.editForm.value.dateReservation,
        montant: this.editForm.value.montant,
        status: this.editForm.value.status,
        classe: this.editForm.value.classe,
      }
     this.serviceVol.editeReservation(this.activatedRoute.snapshot.params['id'],updatedReservation).subscribe(data=>{
      console.log(data);
      this.router.navigate(['admin/TableauReservations'])
     })
    }
  }
}
