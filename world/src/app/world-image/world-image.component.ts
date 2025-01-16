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

  onMouseOver(event: MouseEvent){
    const path = event.target as SVGPathElement;
    const paths = document.querySelectorAll('path')
    const countryId = path.getAttribute('id');
    console.log('Country code:', countryId);
    paths.forEach((p) => {
      if(p === path){
      p.style.fill = 'grey'
      }
      else{
        p.style.fill = ''
      }
    })
    
    
    
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
