import { Component } from '@angular/core';
import { siteConfig } from '../../site.config';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
})
export class Faq {
  protected readonly site = siteConfig;
}
