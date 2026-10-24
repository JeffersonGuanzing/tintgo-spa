import { Component } from '@angular/core';
import { Benefits } from './components/benefits/benefits';
import { Faq } from './components/faq/faq';
import { Hero } from './components/hero/hero';
import { HowItWorks } from './components/how-it-works/how-it-works';
import { OnTheJob } from './components/on-the-job/on-the-job';
import { Pricing } from './components/pricing/pricing';
import { QuoteBuilder } from './components/quote-builder/quote-builder';
import { ServiceArea } from './components/service-area/service-area';
import { Services } from './components/services/services';
import { SiteFooter } from './components/site-footer/site-footer';
import { SiteHeader } from './components/site-header/site-header';

@Component({
  selector: 'app-root',
  imports: [
    SiteHeader,
    Hero,
    Benefits,
    OnTheJob,
    Services,
    HowItWorks,
    Pricing,
    ServiceArea,
    QuoteBuilder,
    Faq,
    SiteFooter,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
