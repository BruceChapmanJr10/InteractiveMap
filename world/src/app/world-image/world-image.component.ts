import { Component, EventEmitter, Output } from '@angular/core';
import { CountryInfo } from '../world-info.type';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-world-image',
  imports: [],
  templateUrl: './world-image.component.html',
  styleUrl: './world-image.component.css'
})
export class WorldImageComponent {
  
  @Output() countrySelected = new EventEmitter<CountryInfo>();

  constructor(private apiService: ApiService) {}

  onClick(event: MouseEvent){
    const path = event.target as SVGAElement;
    const countryId = path.getAttribute('id');
    console.log('Country code:', countryId);
    
    if (countryId) {
      this.apiService
        .getCountryInfo(countryId)
        .subscribe((countryInfo) => {
          this.countrySelected.emit(countryInfo);
        });
    } else {
      this.countrySelected.emit();
    }
  }
}
