import { Component, inject } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {


UserService:UserService=inject(UserService);
compteForm!: FormGroup ;
router:Router=inject(Router);
password_incorrect:boolean=false;
readonly fb: FormBuilder = inject(FormBuilder)

ngOnInit(): void {
  this.compteForm = this.fb.nonNullable.group({
    nom:['', Validators.required],
    prenom: ['', Validators.required],
    telephone:['', Validators.required],
    passport_num:['', Validators.required],
    email: ['', Validators.required],
    mdp:['', Validators.required],
    confirm_password:['', Validators.required]
  });

}
onSubmit() {
   if(this.compteForm.get('mdp')?.value===this.compteForm.get('confirm_password')?.value){
     this.UserService.creeCompt(this.compteForm.value).subscribe({
       next: (response:any) => {
        alert('Connexion réussie');
        localStorage.setItem('connected', 'true');
         this.compteForm.reset();
         if(localStorage.getItem('achat')!= null){
          this.router.navigate(['AchatBillet',localStorage.getItem('achat')]);
         }
         else{
          this.router.navigate(['/home'])
         }
       },
       error: (err) => {
         console.error('Erreur lors de l’inscription:', err);
       }
     });
   }
   else{
    this.password_incorrect=true;
   }
  }
  close(){
    this.password_incorrect=false;
  }
  isInvalidconfirm_password() {
    return this.compteForm.get('confirm_password')?.invalid &&
    this.compteForm.get('confirm_password ')?.dirty;}
  isInvalidpassword() {
    return this.compteForm.get('password')?.invalid &&
    this.compteForm.get('password')?.dirty;}
  isInvalidpassport_num(){
    return this.compteForm.get('passport_num')?.invalid &&
    this.compteForm.get('passport_num')?.dirty;}

  isInvalidtelephone(){
    return this.compteForm.get('telephone')?.invalid &&
    this.compteForm.get('telephone')?.dirty;
  }
  isInvalidemail(){
    return this.compteForm.get('email')?.invalid &&
    this.compteForm.get('email')?.dirty;
  }
  isInvalidprenom() {
    return this.compteForm.get('prenom')?.invalid &&
    this.compteForm.get('prenom')?.dirty;
  }
  isInvalidnom() {
    return this.compteForm.get('nom')?.invalid &&
    this.compteForm.get('nom')?.dirty;
  }
}
