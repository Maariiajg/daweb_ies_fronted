import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: '<footer><p>&copy; 2024 IES Alcores</p></footer>',
  styles: ['footer { background: #eee; padding: 10px; text-align: center; margin-top: 20px; }']
})
export class Footer {}
