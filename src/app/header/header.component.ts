import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() navigationTag = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  onNavigate(tag: number) {
    this.navigationTag.emit(tag)
  }
}
