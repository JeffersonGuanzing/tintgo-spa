import { Component } from '@angular/core';
import { siteConfig } from '../../site.config';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss',
})
export class SiteHeader {
  protected readonly site = siteConfig;
}
