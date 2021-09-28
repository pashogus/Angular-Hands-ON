import { Component, OnInit,EventEmitter,Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

@Output() selectedevent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onclick(selectedString : string)
  {
    this.selectedevent.emit(selectedString);  
  }

}
