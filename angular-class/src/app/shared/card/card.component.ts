import { Component, signal } from '@angular/core';
import { ImageComponent } from '../image/image.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ImageComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent {
  thisIsMyState = 'I am a state';
  pam = signal<string>('pam');

  onClick() {
    this.pam.update(()=> 'I am updated');
  }

}

