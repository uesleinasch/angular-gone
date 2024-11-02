import { Component, input, Input } from '@angular/core';
import { ListComponent } from '../shared/list/list.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  //Input() titleHeader!: string;
  //Novo formato de input
  titleHeader = input<string>();
}
