import { UserService } from './../../user.service';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-changer-mdp',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './changer-mdp.component.html',
  styleUrls: ['./changer-mdp.component.css']
})
export class ChangerMdpComponent implements OnInit {
  changePasswordForm!: FormGroup;
  errorMessage: string = '';
  userService: UserService = inject(UserService);
  fb: FormBuilder = inject(FormBuilder);

  passwordsMatch(form: FormGroup) {
    const newPassword = form.get('newPassword')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return newPassword === confirmPassword ? null : { mismatch: true };
  }

  ngOnInit(): void {
    this.changePasswordForm = this.fb.group(
      {
        oldPassword: ['', Validators.required],
        newPassword: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      { validators: this.passwordsMatch }
    );
  }

  onSubmit() {
    console.log('onSubmit');
    if (this.changePasswordForm.valid) {
      const { oldPassword, newPassword } = this.changePasswordForm.value;
      this.userService.changePassword({ oldPassword, newPassword }).subscribe(
        response => {
          console.log('Mot de passe changé avec succès');
        },
        error => {
          this.errorMessage = 'Une erreur est survenue lors du changement de mot de passe.';
        }
      );
    }
  }
}
