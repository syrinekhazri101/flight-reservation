import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


UserService:UserService=inject(UserService);
loginForm!: FormGroup ;
readonly fb: FormBuilder = inject(FormBuilder)

  router: Router=inject(Router);
  ngOnInit(): void {
    this.loginForm=this.fb.nonNullable.group(
      {
        mail:['', Validators.required],
        mdp:['', [Validators.required]]
      }
      )


  }
onSubmit() {
  if(this.loginForm.get('mail')?.value==""||this.loginForm.get('mdp')?.value==""){
    alert("tout les champs sont obligatoires")
  }
  else{
    this.UserService.login(this.loginForm.get('mail')?.value,this.loginForm.get('mdp')?.value).subscribe((response: any) => {
      if (response.status) {
        alert('Connexion réussie');
        localStorage.setItem('connected', 'true');
        localStorage.setItem('passagerID',response.data[0].id );
        console.log(response.data[0].estAdmin);
         if(response.data[0].estAdmin){
          this.router.navigate(['/admin']);
        }
        if(Number(localStorage.getItem('achat'))){
        this.router.navigate(['/AchatBillet',Number(localStorage.getItem('achat'))]);}
        }
      else {
        alert('Login ou mot de passe incorrect');
        this.router.navigate(['/home']);
      }
    })}
}
isInvalidmail() {
  return this.loginForm.get('mail')?.invalid &&
  this.loginForm.get('mail')?.dirty;
}
isInvalidpassword() {
  return this.loginForm.get('mdp')?.invalid &&
  this.loginForm.get('mdp')?.dirty;
}

}


