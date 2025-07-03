import { Component, inject } from '@angular/core';
import { Vol } from '../vol';
import { VolService } from '../vol.service';
import { VolComponent } from "../vol/vol.component";
import { FooterComponent } from "../footer/footer.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-listvol',
  standalone: true,
  imports: [VolComponent],
  templateUrl: './listvol.component.html',
  styleUrl: './listvol.component.css'
})
export class ListvolComponent {
  volService: VolService = inject(VolService);
  router: Router = inject(Router);
  listVol: Vol[] = [];
  visibleVols: Vol[] = [];
  connected: string = localStorage.getItem('connected') || '';
  showLoadMore: boolean = true;
  text:string="Voir plus";
  ngOnInit(): void {
    this.volService.getAllVol().subscribe((result: any) => {
      this.listVol = result.data;
      this.visibleVols = this.listVol.slice(0, 8);

    });
  }

  loadMore(): void {
    this.visibleVols = this.showLoadMore ? this.listVol : this.listVol.slice(0, 8);
    this.showLoadMore = !this.showLoadMore;
    if(this.showLoadMore){
      this.text="voir plus"
    }
    else{
      this.text="voir moins"
    }
  }

  reserverform(id: number): void {
    if (this.connected === "false" || this.connected === "") {
      this.router.navigate(['/login']);
      localStorage.setItem('achat', id.toString());
    } else {
      this.router.navigate(['/AchatBillet', id]);
    }
  }
}
