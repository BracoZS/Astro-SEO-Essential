import type { ImageMetadata } from 'astro';

export type SEOImage = {
  src: string | ImageMetadata;
  alt: string;
};

export type SEOMetadata = {
  name: string;
  title: string;
  description: string;
  image?: SEOImage;
  canonicalURL?: URL | string;
  locale?: string;
};

export type OpenGraph = Partial<SEOMetadata> & {
  type?: string;
};

export type Twitter = Partial<SEOMetadata> & {
  handle?: string;
  card?: 'summary' | 'summary_large_image';
};

export type SEOProps = SEOMetadata & {
  og?: OpenGraph;
  twitter?: Twitter;
};
