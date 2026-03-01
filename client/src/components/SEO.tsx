import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
}

export function SEO({
  title = 'Hemanth Kumar - DevOps & Cloud Engineer Portfolio',
  description = 'Hemanth Kumar Talluri - Senior DevOps & SRE Engineer. 9+ years of experience in cloud orchestration, CI/CD automation, Kubernetes, AWS, Azure, and infrastructure management.',
  canonical = 'https://hemanth.tech/',
  ogImage = 'https://hemanth.tech/og-image.jpg',
  ogType = 'website'
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    const updatePropertyTag = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // Update standard meta tags
    updateMetaTag('description', description);

    // Update Open Graph tags
    updatePropertyTag('og:title', title);
    updatePropertyTag('og:description', description);
    updatePropertyTag('og:image', ogImage);
    updatePropertyTag('og:type', ogType);
    updatePropertyTag('og:url', canonical);

    // Update Twitter tags
    updatePropertyTag('twitter:title', title);
    updatePropertyTag('twitter:description', description);
    updatePropertyTag('twitter:image', ogImage);

    // Update canonical URL
    let canonicalElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalElement) {
      canonicalElement = document.createElement('link');
      canonicalElement.rel = 'canonical';
      document.head.appendChild(canonicalElement);
    }
    canonicalElement.href = canonical;
  }, [title, description, canonical, ogImage, ogType]);

  return null;
}
