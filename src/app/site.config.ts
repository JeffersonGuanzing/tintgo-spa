export const PHONE_DISPLAY = '0962 767 8138';
export const PHONE_HREF = 'tel:+639627678138';
export const EMAIL_DISPLAY = 'hello@tintgo.example';
export const EMAIL_HREF = 'mailto:hello@tintgo.example';

// TODO: Replace YOUR_PAGE_NAME with the real Facebook Page username before launch.
export const MESSENGER_URL = 'https://www.facebook.com/profile.php?id=61595828817791';

export type BenefitIcon = 'value' | 'speed' | 'quality';
export type ServiceIcon = 'car' | 'sides' | 'windshield' | 'removal';

export interface Benefit {
  readonly icon: BenefitIcon;
  readonly title: string;
  readonly description: string;
}

export interface Service {
  readonly icon: ServiceIcon;
  readonly name: string;
  readonly description: string;
}

export interface Step {
  readonly title: string;
  readonly description: string;
}

export interface PricingFactor {
  readonly title: string;
  readonly description: string;
}

export interface FaqItem {
  readonly question: string;
  readonly answer: string;
  readonly link?: {
    readonly label: string;
    readonly href: string;
    readonly external: boolean;
  };
}

export interface SiteImage {
  readonly src: string;
  readonly alt: string;
  readonly caption: string;
  readonly width: number;
  readonly height: number;
}

export const siteConfig = {
  name: 'TintGo Mobile Window Tint',
  brand: {
    first: 'Tint',
    second: 'Go',
  },
  phone: {
    display: PHONE_DISPLAY,
    href: PHONE_HREF,
  },
  email: {
    display: EMAIL_DISPLAY,
    href: EMAIL_HREF,
  },
  messengerUrl: MESSENGER_URL,
  hero: {
    badge: 'NOW OPEN',
    titleLead: 'Window tint that',
    titleAccent: 'comes to you.',
    lead: 'Beat the Metro Manila heat without losing half your day in a shop. Send us your car model and location, and we tint your windows right where you park.',
    primaryCta: 'Message us for a free quote',
    secondaryCta: 'Build my quote message',
    checklist: ['Affordable', 'Fast', 'Quality tint'],
    illustrationAlt:
      'Illustration of a sedan with one dark-tinted window and one clear window, orange speed lines behind it and a yellow sun overhead.',
  },
  benefits: [
    {
      icon: 'value',
      title: 'Affordable',
      description:
        'Fair rates quoted before we start. No shop overhead, so no surprise charges.',
    },
    {
      icon: 'speed',
      title: 'Fast',
      description:
        'No queueing and no driving across the city. We come to your home, office or parking area.',
    },
    {
      icon: 'quality',
      title: 'Quality tint',
      description:
        'Clean edges, smooth film, and a careful finish on every window.',
    },
  ] satisfies readonly Benefit[],
  onTheJob: {
    eyebrow: 'On the job',
    title: 'Your car stays put. We do the work.',
    body: 'No waiting room, no queue, no driving across town. We arrive with the film, tools and clean-up gear, and work carefully around your schedule — at home, in the office or in your building’s parking area.',
    scene: {
      src: 'assets/tintgo-scene.mp4',
      alt: 'A TintGo technician applying window film to a car parked outdoors in Metro Manila.',
      caption: 'A TintGo technician applying film on site.',
      width: 1000,
      height: 325,
    },
    poster: {
      src: 'assets/tintgo-poster.png',
      alt: 'TintGo mobile window tint promotional poster.',
      caption: 'Now open across Metro Manila.',
      width: 900,
      height: 1027,
    },
  },
  services: [
    {
      icon: 'car',
      name: 'Full car tint',
      description:
        'Sides and rear glass in one visit — our most popular option for complete heat and glare control.',
    },
    {
      icon: 'sides',
      name: 'Side windows only',
      description:
        'Privacy and heat relief on the doors without touching the front windshield.',
    },
    {
      icon: 'windshield',
      name: 'Front windshield film',
      description:
        'A clear or light-tint film that cuts heat and glare while keeping night visibility in mind.',
    },
    {
      icon: 'removal',
      name: 'Old tint removal',
      description:
        'We strip tired, bubbling or purple film and clean the glass properly before fitting new tint.',
    },
  ] satisfies readonly Service[],
  steps: [
    {
      title: 'Message us',
      description:
        'Send your car make and model, what you want tinted, and your location in Metro Manila.',
    },
    {
      title: 'Get your quote',
      description:
        'We reply with one clear, all-in price and a schedule that works for you.',
    },
    {
      title: 'We tint on site',
      description:
        'We come to your home, office or parking area and finish the job right where you park.',
    },
  ] satisfies readonly Step[],
  pricing: {
    eyebrow: 'Pricing',
    title: 'What goes into your quote.',
    factors: [
      {
        title: 'Car size',
        description:
          'Sedan, hatchback, SUV, pickup or van — more glass means more film and more time.',
      },
      {
        title: 'Windows covered',
        description:
          'Side doors, rear glass or the full cabin. You only pay for what you choose.',
      },
      {
        title: 'Film shade and type',
        description:
          'Shade, heat rejection and film quality change the price. We explain the options first.',
      },
      {
        title: 'Old tint removal',
        description:
          'Removing old film takes extra time and care, so it is quoted separately and agreed before we start.',
      },
    ] satisfies readonly PricingFactor[],
    freeLabel: '₱ Free quote',
    cardTitle: 'Know the price before we arrive.',
    cardBody:
      'Send your car, service and location. We reply with one clear price and an available schedule — before any work starts.',
    cta: 'Build my quote message',
  },
  serviceArea: {
    eyebrow: 'Service area',
    title: 'Serving all of Metro Manila.',
    lead: 'We travel across the capital region. If your city is on this list, we can come to you.',
    cities: [
      'Quezon City',
      'Manila',
      'Makati',
      'Pasig',
      'Taguig',
      'Mandaluyong',
      'San Juan',
      'Parañaque',
      'Las Piñas',
      'Muntinlupa',
      'Caloocan',
      'Marikina',
      'Pasay',
      'Valenzuela',
      'Malabon',
      'Navotas',
      'Pateros',
    ],
  },
  quote: {
    eyebrow: 'Free quote',
    title: 'Tell us what you drive. We’ll tell you the price.',
    lead: 'Fill in the details below, copy the message, and paste it into Messenger or a text. Nothing is sent automatically.',
    carLabel: 'Car make and model',
    carPlaceholder: 'e.g. Toyota Vios 2019',
    serviceLabel: 'What to tint',
    locationLabel: 'City or area',
    locationPlaceholder: 'e.g. Quezon City',
    options: [
      'Full car (sides and rear)',
      'Side windows only',
      'Rear windshield only',
      'Front windshield film',
      'Old tint removal and re-tint',
      'Not sure, please advise',
    ],
    previewLabel: 'Your message',
    copyCta: 'Copy message',
    copiedStatus: 'Copied. Paste it into Messenger or a text.',
    fallbackStatus:
      'Could not copy automatically. The message is selected — press Ctrl+C or long-press to copy.',
    message: {
      greeting: 'Hi TintGo! I would like a free quote for mobile window tint.',
      carLabel: 'Car',
      serviceLabel: 'Service',
      locationLabel: 'Location',
      closing:
        'Please let me know the price and your available schedule. Thank you!',
      carPlaceholder: '[car make and model]',
      locationPlaceholder: '[city or area]',
    },
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Quick answers before you message.',
    items: [
      {
        question: 'Do I need to bring my car anywhere?',
        answer:
          'No. We come to you anywhere in Metro Manila — home, office or parking area. Just leave the car parked for the length of the job.',
      },
      {
        question: 'Is the quote really free?',
        answer:
          'Yes. Send your car model, what you want tinted and your location, and we’ll reply with a clear price. No obligation.',
      },
      {
        question: 'Can you remove my old tint?',
        answer:
          'Yes. We remove old, bubbling or purple film, clean the glass and can fit the new tint in the same visit.',
      },
      {
        question: 'How long does the job take?',
        answer:
          'It depends on your car size and the number of windows. We include an estimate with your quote so you can plan your day.',
      },
      {
        question: 'How do I reach you?',
        answer:
          'Message us on Facebook Messenger or call/text 0962 767 8138. We usually reply during the day.',
        link: {
          label: 'Open Messenger',
          href: MESSENGER_URL,
          external: true,
        },
      },
    ] satisfies readonly FaqItem[],
  },
  footer: {
    tagline: 'Mobile window tint across Metro Manila',
  },
} as const;

export type SiteConfig = typeof siteConfig;
