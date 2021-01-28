import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() clickedFeature: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipesClick(featureName: string) {
    this.clickedFeature.emit(featureName);
  }

  onShoppingListClick(featureName: string) {
    this.clickedFeature.emit(featureName);
  }
}
