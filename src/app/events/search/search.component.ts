import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() updateValue = new EventEmitter<string>();
  @Input() term: string;
  searchTerm: string;
  constructor(private router: Router) { }

  ngOnInit() {
    this.searchTerm = this.term;
  }

  searchEvent() {
    if(this.searchTerm && this.searchTerm!==''){
      this.updateValue.emit(this.searchTerm);
    }
  }
}
