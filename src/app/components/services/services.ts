import { Component } from '@angular/core';
import { siteConfig } from '../../site.config';

@Component({
  selector: 'app-services',
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  protected readonly site = siteConfig;
}
