import { Component, inject } from '@angular/core';
import { VolService } from '../vol.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Vol } from '../vol';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Reservation } from '../reservation';

@Component({
  selector: 'app-achat-billet',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './achat-billet.component.html',
  styleUrls: ['./achat-billet.component.css']
})
export class AchatBilletComponent {

  volService: VolService = inject(VolService);
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  readonly formBuilder: FormBuilder = inject(FormBuilder);
  Vol!: Vol;
  AchatForm!: FormGroup;
  basePrice!: number;
  VolId!: number;
  router: Router=inject(Router);
  currentDate=new Date() ;

  ngOnInit(): void {

    this.AchatForm = new FormGroup({
      villeDepart: new FormControl(''),
      villeDestination: new FormControl(''),
      heureDepart: new FormControl(''),
      heureArrivee: new FormControl(''),
      TypeVoyage: new FormControl(''),
      class: new FormControl('economique'),
      price: new FormControl()
    });

    this.volService.getVolById(Number(this.activatedRoute.snapshot.params['id'])).subscribe((result:any) => {console.log(result.data)
      this.Vol = result.data[0];
      if(this.Vol.reduction>0){
        this.basePrice = this.Vol.prix-this.Vol.prix*this.Vol.reduction;
      }else{
      this.basePrice = this.Vol.prix;}
      this.VolId = this.Vol.id;

      this.AchatForm.patchValue({
        villeDepart: this.Vol.villeDepart,
        villeDestination: this.Vol.villeDestination,
        heureDepart: this.Vol.dateDepart +"/"+this.Vol.heureDepart,
        heureArrivee: this.Vol.dateArrivee +"/"+this.Vol.heureArrivee,
        price: this.basePrice
      });
    });

    this.AchatForm.valueChanges.subscribe(() => {
      const updatedPrice = this.calculatePrice();
      this.AchatForm.patchValue({ price: updatedPrice }, { emitEvent: false });
    });
  }

  calculatePrice(): number {
    let finalPrice = this.basePrice;

    if (this.AchatForm.value.class === 'business') {
      finalPrice += 150;
    } else if (this.AchatForm.value.class === 'Première') {
      finalPrice += 250;
    }

    if (this.AchatForm.value.TypeVoyage === 'Aller retour') {
      finalPrice += 100;
    }

    return finalPrice;
  }

  onSubmit(): void {
    var reservationData = {
      passager_id : Number(localStorage.getItem('passagerID')),
      vol_id: this.VolId,
      dateReservation:  this.currentDate ,
      montant: this.calculatePrice(),
      status: "en attente",
       classe: this.AchatForm.value.class
    };

    console.log(reservationData);

    this.volService.reserver(reservationData).subscribe(data => {
      console.log("Réservation réussie !");
    });
    this.router.navigate(['/lisitBillet',Number(localStorage.getItem('passagerID'))]);
  }
  onnavigateToHome(){
    this.router.navigate(['/home']);
  }
}
