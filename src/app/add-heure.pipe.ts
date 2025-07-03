import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addHeure',
  standalone: true
})
export class AddHeurePipe implements PipeTransform {

  transform(value: string | null | undefined, addHours: number = 1): string {
    if (!value || typeof value !== 'string') {
      return 'Heure invalide'; // Empêche l'erreur si la valeur est undefined
    }

    const timeParts = value.split(':');
    if (timeParts.length < 2) return 'Format invalide'; // Vérification du format

    let hours = parseInt(timeParts[0], 10);
    const minutes = timeParts[1];

    if (isNaN(hours)) return 'Format invalide';

    hours = (hours + addHours) % 24; // Ajout sécurisé
    return `${hours.toString().padStart(2, '0')}:${minutes}`;
  }

}
