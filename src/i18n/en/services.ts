export interface Service {
  title: string;
  subtitle: string;
  services: {
    id: string;
    title: string;
    short: string;
    description: string;
    image: string;
    icon: string;
    features: string[];
    // btnSecondary: {
    //   href: string;
    //   className: string;
    //   text: string;
    // }[];
  }[];
}

export const servicesTexts: Service = {
  title: 'Services - Imperio Pools',
  subtitle: 'This is our services.',
  services: [
    {
      id: 'pool-remodeling',
      title: 'Pool Remodeling',
      short: 'Transform your existing pool with our expert remodeling services...',
      description: 'Transform your existing pool with our expert remodeling services. We enhance aesthetics and functionality, ensuring your pool meets modern standards and your personal style.',
      image: "https://leisurepools.eu/wp-content/uploads/2020/06/best-type-of-swimming-pool-for-my-home_2.jpg",
      icon: '/icons/pool.svg',
      features: [
        'Custom designs tailored to your preferences',
        'High-quality materials for durability',
        'Energy-efficient upgrades available',
        'Expert craftsmanship and attention to detail'
      ]
    },
    {
      id: 'replastering',
      title: 'Replastering',
      short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      description: "En - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "https://www.thefibreglasspoolcompany.com.au/wp-content/uploads/hamilton-sl-hero-1.jpg",
      icon: '/icons/spa.svg',
      features: [
        'Smooth, durable finishes',
        'Wide range of plaster options',
        'Improved longevity and water quality'
      ]
    }
  ]
};