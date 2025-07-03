import { VolService } from './../../vol.service';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-ajouter-reservation',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './ajouter-reservation.component.html',
  styleUrl: './ajouter-reservation.component.css'
})
export class AjouterReservationComponent {
  private http: HttpClient = inject(HttpClient);
  private fb: FormBuilder = inject(FormBuilder);
  private userService: UserService = inject(UserService);
  private volService: VolService = inject(VolService);
  private router: Router=inject(Router);
  reservationForm: FormGroup = this.fb.group({
    passager_id: ['', Validators.required],
    vol_id: ['', Validators.required],
    dateReservation: ['', Validators.required],
    montant: ['', [Validators.required, Validators.min(1)]],
    status: ['', Validators.required],
    classe: ['', Validators.required]
  });

  vols: any[] = [];
  utilisateurs: any[] = [];

  chargerVols(): void {
    this.volService.getAllVol().subscribe({
      next: (data:any) => this.vols = data.data,
      error: (err) => console.error('Erreur lors du chargement des vols', err)
    });
  }

  chargerUtilisateurs(): void {
    this.userService.getAllUsers().subscribe({
      next: (data:any) => this.utilisateurs=data.data,
      error: (err) => console.error('Erreur lors du chargement des utilisateurs', err)
    });
  }

  ngOnInit(): void {
    this.chargerVols();
    this.chargerUtilisateurs();
  }

  onSubmit(): void {
    if (this.reservationForm.invalid) {
      alert('Veuillez remplir tous les champs correctement.');
      return;
    }

    this.volService.reserver(this.reservationForm.value).subscribe({
      next: () => {
        alert('Réservation ajoutée avec succès !');
        this.reservationForm.reset();
        this.router.navigate(['admin/TableauReservations']);
      },
      error: (err) => console.error('Erreur lors de l’ajout de la réservation', err)
    });
  }
}
