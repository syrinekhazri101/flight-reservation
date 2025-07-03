import { Component, inject } from '@angular/core';
import { Vol } from '../vol';
import { VolService } from '../vol.service';
import { VolComponent } from "../vol/vol.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trouver-vol',
  standalone: true,
  imports: [VolComponent],
  templateUrl: './trouver-vol.component.html',
  styleUrls: ['./trouver-vol.component.css']
})
export class TrouverVolComponent {
  volService: VolService = inject(VolService);
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  listVol: Vol[] = [];
  villeDepart: string = "";
  villeDestination: string = "";

  ngOnInit(): void {
    // Écoute les changements d'URL et recharge les vols
    this.activatedRoute.paramMap.subscribe(params => {
      this.villeDepart = params.get("villeDepart") || "Inconnu";
      this.villeDestination = params.get("villeDestination") || "Inconnu";

      console.log("Changement de route détecté :", this.villeDepart, "->", this.villeDestination);

      this.volService.searchVol(this.villeDepart, this.villeDestination).subscribe({
        next: (result: any) => {
          this.listVol = result.data || [];
          console.log("Vols chargés :", this.listVol);
        },
        error: (err) => {
          console.error("Erreur lors de la récupération des vols:", err);
        }
      });
    });
  }
}
