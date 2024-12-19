import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {RouterLink} from '@angular/router';

interface Product {
  name: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [
    NgForOf,
    RouterLink
  ],
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: Product[] = [
    {
      name: 'Camisa Personalizada',
      price: 240.00,
      image: '/CamisaAzul.png'
    },
    {
      name: 'Taza Personalizada',
      price: 170.00,
      image: '/Taza.png'
    },
    {
      name: 'Gorra Personalizada',
      price: 290.00,
      image: '/Gorra.png'
    }
  ];

  logoPath: string = 'assets/images/logo.png';
  heroImagePath: string = 'assets/images/hero-image.jpg';
}
