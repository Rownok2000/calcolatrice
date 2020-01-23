import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Somma(Numero1: HTMLInputElement, Numero2: HTMLInputElement): boolean {
    let t = Numero1.valueAsNumber;
    let v = Numero2.valueAsNumber;
    let sum = t + v
    console.log(`somma equivale a:` + sum);
  return false;
  }
  Sottrazione(Numero1: HTMLInputElement, Numero2: HTMLInputElement): boolean {
      let t = Numero1.valueAsNumber;
      let v = Numero2.valueAsNumber;
      let sub = t - v
      console.log(`sottrazione equivale a:` + sub);
    return false;
    }

      Moltiplicazione(Numero1: HTMLInputElement, Numero2: HTMLInputElement): boolean {
      let t = Numero1.valueAsNumber;
      let v = Numero2.valueAsNumber;
      let mul = t * v
      console.log(`moltiplicazione equivale a:` + mul);
    return false;
    }

      Divisione(Numero1: HTMLInputElement, Numero2: HTMLInputElement): boolean {
      let t = Numero1.valueAsNumber;
      let v = Numero2.valueAsNumber;
      let div = t / v
      console.log(`somma equivale a:` + div);
    return false;
    }


}
