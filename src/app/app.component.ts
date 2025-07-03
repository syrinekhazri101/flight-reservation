import { UserService } from './user.service';
import { Component, inject, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterOutlet } from '@angular/router';
import { SignUpComponent } from "./sign-up/sign-up.component";
import { NavComponent } from "./nav/nav.component";
import { VolComponent } from "./vol/vol.component";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";
import { ListvolComponent } from "./listvol/listvol.component";
import { AchatBilletComponent } from "./achat-billet/achat-billet.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projet';
  isAdminRoute: boolean = false;
 router:Router=inject(Router)
   ngOnInit(): void {
      this.router.events.subscribe(() => {
      this.isAdminRoute = this.router.url.includes('/admin');
    });
   } // Écoute les changements de route



}
