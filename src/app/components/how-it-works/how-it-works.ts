import { Component } from '@angular/core';
import { siteConfig } from '../../site.config';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.html',
  styleUrl: './how-it-works.scss',
})
export class HowItWorks {
  protected readonly site = siteConfig;
}
