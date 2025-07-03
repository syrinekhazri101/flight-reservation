import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ListvolComponent } from './listvol/listvol.component';
import { TrouverVolComponent } from './trouver-vol/trouver-vol.component';
import { HomeComponent } from './home/home.component';
import { AchatBilletComponent } from './achat-billet/achat-billet.component';
import { BilletComponent } from './billet/billet.component';
import { ListeBilletComponent } from './liste-billet/liste-billet.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { TableauVolsComponent } from './admin/tableau-vols/tableau-vols.component';
import { EditVolComponent } from './admin/edit-vol/edit-vol.component';
import { AjouterVolComponent } from './admin/ajouter-vol/ajouter-vol.component';
import { TableauReservationComponent } from './admin/tableau-reservation/tableau-reservation.component';
import { EditReservationComponent } from './admin/edit-reservation/edit-reservation.component';
import { TableauUsersComponent } from './admin/tableau-users/tableau-users.component';
import { ChangerMdpComponent } from './admin/changer-mdp/changer-mdp.component';
import { AboutComponent } from './about/about.component';
import { DetailsVolComponent } from './details-vol/details-vol.component';
import { AjouterUserComponent } from './admin/ajouter-user/ajouter-user.component';
import { AjouterReservationComponent } from './admin/ajouter-reservation/ajouter-reservation.component';

export const routes: Routes = [
  {path:'login',title:'Login',component:LoginComponent},
  {path:'home',title:'home',component:HomeComponent,children:[

 {path:'TrouverVol/:villeDepart/:villeDestination',title:'TrouverVol',component:TrouverVolComponent},

  ]},
  {path:'signup',title:'signup',component:SignUpComponent},
  {path:'listVol',title:'listVol',component:ListvolComponent},
  {path:'AchatBillet/:id',title:'AchatBillet',component:AchatBilletComponent},
  {path:'billet',title:'billet',component:BilletComponent},
  {path:'lisitBillet/:passagerId',title:'listeBillet',component:ListeBilletComponent},
  {path:'admin',title:'dashboard ',component:DashboardComponent,children:[
    {path:"TableauVols",title:'TableauVols',component:TableauVolsComponent},
    {path:"editVol/:id",title:'Edit Vol',component:EditVolComponent},
    {path:"ajouterVol",title:'ajouter Vol',component:AjouterVolComponent},
    {path:"TableauReservations",title:'TableauReservations',component:TableauReservationComponent},
    {path:'signup',title:'signup',component:SignUpComponent},
    {path:"editReservation/:id",title:"Edit Reservation",component:EditReservationComponent},
    {path:"TableUsers",title:'Tableau users',component:TableauUsersComponent},
   {path:"changerPassword",title:"changer password",component:ChangerMdpComponent},
    {path:"ajouterUser",title:"ajouter utilisateur",component:AjouterUserComponent},
    {path:"ajouterReservation",title:"ajouter reservation",component:AjouterReservationComponent},

    {path:'',redirectTo:'TableauVols',pathMatch:'full'}

  ]},
  {path:"detail/:id",title:'Detail',component:DetailsVolComponent},
  {path:"about",title:'About',component:AboutComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}
];
