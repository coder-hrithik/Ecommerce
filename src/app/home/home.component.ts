import { Component } from '@angular/core';
import { menJeans } from 'src/Data/Men/men_jeans';
import { gounsPage1 } from 'src/Data/Gouns/gouns';
import { mens_kurta } from 'src/Data/Men/men_kurta';
import { mensShoesPage1 } from 'src/Data/shoes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  menJeans: any;
  womenGouns: any;
  mensKurta: any;
  mensShoes: any;

  ngOnInit() {
    this.menJeans = menJeans.slice(0, 7);
    this.womenGouns = gounsPage1.slice(0, 7);
    this.mensKurta = mens_kurta.slice(0, 7);
    this.mensShoes = mensShoesPage1.slice(0, 7);
  }
}
