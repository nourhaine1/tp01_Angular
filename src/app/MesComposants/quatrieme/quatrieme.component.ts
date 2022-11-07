import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quatrieme',
  template: `
    <p>
      quatrieme composant!
    </p>
  `,
  styles: ['p { color: green; }']
  
})
export class QuatriemeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
