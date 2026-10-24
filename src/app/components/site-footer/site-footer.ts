import { Component } from '@angular/core';
import { siteConfig } from '../../site.config';

@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.scss',
})
export class SiteFooter {
  protected readonly site = siteConfig;
}
