import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {RouterLink} from '@angular/router';

interface Service {
  name: string;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  imports: [
    NgForOf,
    RouterLink
  ],
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  leftServices: Service[] = [
    { name: 'IMPRESIONES DTF' },
    { name: 'TAZAS PERSONALIZADAS' },
    { name: 'TAZAS MÁGICAS' },
    { name: 'RETRATERAS' },
    { name: 'CAMISAS PERSONALIZADAS' },
    { name: 'GORRAS PERSONALIZADOS' },
    { name: 'COBERTORES PERSONALIZADOS' }
  ];

  rightServices: Service[] = [
    { name: 'TERMOS PERSONALIZADOS' },
    { name: 'STICKERS TROQUELADOS' },
    { name: 'STICKERS TROQUELADOS VINIL' },
    { name: 'RELOJ SUBLIMABLE' },
    { name: 'COJINES PERSONALIZADOS' },
    { name: 'LLAVEROS SUBLIMABLES' }
  ];

  logoPath: string = '/Logo.png';
  heroImagePath: string = '/CamisaRosa.png';
}
