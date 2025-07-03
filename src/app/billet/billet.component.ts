import { Reservation } from './../reservation';
import { Component, inject, Input } from '@angular/core';
import { TimePipePipe } from '../time-pipe.pipe';
import { AddHeurePipe } from '../add-heure.pipe';

@Component({
  selector: 'app-billet',
  standalone: true,
  imports: [TimePipePipe,AddHeurePipe],
  templateUrl: './billet.component.html',
  styleUrl: './billet.component.css'
})
export class BilletComponent {

@Input()Reservation!:any;

printCarte() {
  const printContent = document.getElementById('carte-embarquement');
  const windowPrint = window.open('', '', 'width=800,height=600');
  if (windowPrint && printContent) {
    windowPrint.document.write('<html><head><title>Carte d\'Embarquement</title></head><body>');
    windowPrint.document.write(printContent.innerHTML);
    windowPrint.document.write('</body></html>');
    windowPrint.document.close();
    windowPrint.print();
  }
}
}
