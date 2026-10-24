import { Component } from '@angular/core';
import { siteConfig } from '../../site.config';

@Component({
  selector: 'app-service-area',
  templateUrl: './service-area.html',
  styleUrl: './service-area.scss',
})
export class ServiceArea {
  protected readonly site = siteConfig;
}
