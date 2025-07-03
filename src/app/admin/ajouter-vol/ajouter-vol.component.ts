import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { VolService } from '../../vol.service';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-ajouter-vol',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './ajouter-vol.component.html',
  styleUrl: './ajouter-vol.component.css'
})
export class AjouterVolComponent {
  AjouterForm !: FormGroup;
  volservice:VolService=inject(VolService);
  router:Router=inject(Router);
  ngOnInit(): void {
    this.AjouterForm = new FormGroup({
      image: new FormControl(),
      numeroVol: new FormControl(),
      villeDepart: new FormControl(),
      aeroportDepart: new FormControl(),
      dateDepart: new FormControl(),
      heureDepart: new FormControl(),
      villeDestination: new FormControl(),
      aeroportDestination: new FormControl(),
      dateArrivee: new FormControl(),
      heureArrivee: new FormControl(),
      duree: new FormControl(),
      prix: new FormControl(),
      placesDisponibles: new FormControl(),
      reduction:new FormControl(),
    });

    }
    onSubmit(){
      const data={
        image: this.AjouterForm.value.image,
        numeroVol: this.AjouterForm.value.numeroVol,
        villeDepart: this.AjouterForm.value.villeDepart,
        aeroportDepart: this.AjouterForm.value.aeroportDepart,
        dateDepart:  formatDate( this.AjouterForm.value.dateDepart,'yyyy-MM-dd', 'en'),
        heureDepart: this.AjouterForm.value.heureDepart,
        villeDestination: this.AjouterForm.value.villeDestination,
        aeroportDestination: this.AjouterForm.value.aeroportDestination,
        dateArrivee: formatDate( this.AjouterForm.value.dateArrivee,'yyyy-MM-dd', 'en'),
        heureArrivee: this.AjouterForm.value.heureArrivee,
        duree: this.AjouterForm.value.duree,
        prix: this.AjouterForm.value.prix,
        placesDisponibles: this.AjouterForm.value.placesDisponibles,
        reduction: this.AjouterForm.value.reduction,
        classe:JSON.stringify(["Économique", "Affaires", "Première"]),

      };
      this.volservice.addVol(data).subscribe( (response) => {

          console.log('ajout réussie', response);
          this.router.navigate(['admin/TableauVols']);

        });
      }
    }



