import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { siteConfig } from '../../site.config';

@Component({
  selector: 'app-on-the-job',
  imports: [NgOptimizedImage],
  templateUrl: './on-the-job.html',
  styleUrl: './on-the-job.scss',
})
export class OnTheJob implements AfterViewInit, OnDestroy {
  protected readonly site = siteConfig;
  @ViewChild('sceneVideo') sceneVideo!: ElementRef<HTMLVideoElement>;
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const video = this.sceneVideo?.nativeElement;
    if (!video) return;
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        }
      },
      { threshold: 0.5 },
    );
    this.observer.observe(video);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}