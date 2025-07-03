import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePipe',
  standalone: true
})
export class TimePipePipe implements PipeTransform {


    transform(value: string, part: 'date' | 'time'): string {
      const [date, time] = value.split('/');
      return part === 'date' ? date : part === 'time' ? time : value;
    }

}
