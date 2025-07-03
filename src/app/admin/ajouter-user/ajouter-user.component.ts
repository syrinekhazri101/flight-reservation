import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './ajouter-user.component.html',
  styleUrls: ['./ajouter-user.component.css']
})
export class AjouterUserComponent implements OnInit {
  private userService: UserService = inject(UserService);
  private router: Router = inject(Router);
  private fb: FormBuilder = inject(FormBuilder);

  userForm!: FormGroup;
  passwordIncorrect: boolean = false;

  ngOnInit(): void {
    this.userForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      telephone: ['', Validators.required],
      passport_num: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mdp: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.userForm.invalid) {
      alert('Veuillez remplir tous les champs correctement.');
      return;
    }

    this.userService.creeCompt(this.userForm.value).subscribe({
      next: () => {
        alert('Utilisateur ajouté avec succès.');
        this.userForm.reset();
        this.router.navigate(['admin/TableUsers']);
      },
      error: (err) => {
        console.error('Erreur lors de l’inscription:', err);
        alert('Une erreur est survenue. Veuillez réessayer.');
      }
    });
  }
}
