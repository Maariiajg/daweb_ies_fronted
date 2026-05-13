import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: '<header><h1>Instituto Alcores</h1></header>',
  styles: ['header { background: #333; color: white; padding: 10px; text-align: center; }']
})
export class Header {}
