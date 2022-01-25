import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ShoppingList } from '../services/shopping-list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() navigationTag = new EventEmitter<number>();

  constructor(private slService: ShoppingList) {}

  ngOnInit(): void {
    this.slService.onIngredientsSet.subscribe((isSet: boolean) => {
      console.log(isSet);
      if (isSet) {
        this.navigationTag.emit(2);
      }
    });
  }

  onNavigate(tag: number) {
    this.navigationTag.emit(tag);
  }
}
