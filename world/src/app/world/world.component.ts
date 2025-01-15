import { Component, Input } from '@angular/core';
import { WorldImageComponent } from '../world-image/world-image.component';
import { WorldInfoComponent } from '../world-info/world-info.component';
import { CountryInfo } from '../world-info.type';
@Component({
  selector: 'app-world',
  imports: [WorldImageComponent, WorldInfoComponent],
  templateUrl: './world.component.html',
  styleUrl: './world.component.css'
})
export class WorldComponent {
  @Input() countryInfo: CountryInfo | null = null;

  onCountrySelected(countryInfo: any) {
    this.countryInfo = countryInfo;
  }


}
