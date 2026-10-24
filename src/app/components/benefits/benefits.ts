import { Component } from '@angular/core';
import { siteConfig } from '../../site.config';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.html',
  styleUrl: './benefits.scss',
})
export class Benefits {
  protected readonly site = siteConfig;
}
