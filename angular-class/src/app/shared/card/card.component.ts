import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { ImageComponent } from '../image/image.component';

const randomId = () => Math.floor(Math.random() * 1000).toString();

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ImageComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  pam = signal<string>('pam');

  //@Output() cardClick = new EventEmitter<string>();

  //Forma mais moderna de usar os outputs
  cardClick = output<string>()

  onClick() {
    this.pam.update(()=> 'I am updated');
  }


  onCardClick() {
    this.cardClick.emit(randomId());
  }

}

