import { HttpClient } from '@angular/common/http';
import {
  Component,
  ElementRef,
  computed,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { siteConfig } from '../../site.config';

@Component({
  selector: 'app-quote-builder',
  templateUrl: './quote-builder.html',
  styleUrl: './quote-builder.scss',
})
export class QuoteBuilder {
  private readonly http = inject(HttpClient);
  protected readonly site = siteConfig;
  protected readonly car = signal('');
  protected readonly service = signal<string>(siteConfig.quote.options[0]);
  protected readonly location = signal('');
  protected readonly status = signal('');
  protected readonly isSubmitting = signal(false);

  protected readonly message = computed(() => {
    const copy = siteConfig.quote.message;
    const car = this.car().trim() || copy.carPlaceholder;
    const location = this.location().trim() || copy.locationPlaceholder;

    return [
      copy.greeting,
      '',
      `${copy.carLabel}: ${car}`,
      `${copy.serviceLabel}: ${this.service()}`,
      `${copy.locationLabel}: ${location}`,
      '',
      copy.closing,
    ].join('\n');
  });

  private readonly messageBox =
    viewChild<ElementRef<HTMLTextAreaElement>>('messageBox');

  protected updateCar(event: Event): void {
    this.car.set((event.target as HTMLInputElement).value);
    this.status.set('');
  }

  protected updateService(event: Event): void {
    this.service.set((event.target as HTMLSelectElement).value);
    this.status.set('');
  }

  protected updateLocation(event: Event): void {
    this.location.set((event.target as HTMLInputElement).value);
    this.status.set('');
  }

  protected preventSubmit(event: Event): void {
    event.preventDefault();
  }

  protected async copyMessage(): Promise<void> {
    const text = this.message();

    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error('Clipboard API unavailable');
      }

      await navigator.clipboard.writeText(text);
      this.status.set(this.site.quote.copiedStatus);
    } catch {
      const textarea = this.messageBox()?.nativeElement;

      if (textarea) {
        textarea.focus();
        textarea.select();
      }

      this.status.set(this.site.quote.fallbackStatus);
    }
  }

  protected submitQuote(): void {
    if (this.isSubmitting()) return;
    this.isSubmitting.set(true);
    const formData = {
      car: this.car(),
      service: this.service(),
      location: this.location(),
      message: this.message(),
    };

    this.http.post('https://formspree.io/f/maqlygrj', formData).subscribe({
      next: () => {
        this.status.set('Quote sent successfully!');
        this.car.set('');
        this.location.set('');
        this.isSubmitting.set(false);
      },
      error: () => {
        this.status.set('Failed to send. Please try again later.');
        this.isSubmitting.set(false);
      },
    });
  }
}
