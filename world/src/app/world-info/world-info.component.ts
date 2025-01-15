import { Component, Input } from '@angular/core';
import { CountryInfo } from '../world-info.type';

@Component({
  selector: 'app-world-info',
  imports: [],
  templateUrl: './world-info.component.html',
  styleUrl: './world-info.component.css'
})
export class WorldInfoComponent {
  @Input() countryInfo: CountryInfo | null = null;


}
