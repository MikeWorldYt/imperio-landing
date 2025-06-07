export interface Service {
  title: string;
  subtitle: string;
  services: {
    id: string;
    title: string;
    short: string;
    description: string;
    image: string; // Only use 3:2 aspect ratio images
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
  subtitle: 'These are our services',
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
      short: "Transform your pool or spa with expert replastering services...",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "https://www.thefibreglasspoolcompany.com.au/wp-content/uploads/hamilton-sl-hero-1.jpg",
      icon: '/icons/spa.svg',
      features: [
        'Smooth, durable finishes',
        'Wide range of plaster options',
        'Improved longevity and water quality'
      ]
    },
    {
      id: 'waterfalls-and-fountains',
      title: 'Waterfalls & Fountains',
      short: 'Enhance your pool or spa with stunning waterfalls and fountains...',
      description: 'Enhance your pool or spa with stunning waterfalls and fountains, offering a unique and captivating visual experience. From cascading waterfalls to cascading fountains, our expertly crafted waterfalls and fountains add a touch of elegance and sophistication to your outdoor oasis.',
      image: 'https://leisurepools.com.au/wp-content/uploads/2020/10/LeisurePoolsAU_Absolute_8m_SilverGrey_Rockhampton_2018-1.jpg',
      icon: '/icons/renovation.svg',
      features: [
        'Beautiful waterfalls and fountains',
        'Custom designs and styles',
        'Enhanced aesthetics and functionality'
      ]
    },
    {   
      id: 'pool-deck',
      title: 'Pool Deck',
      short: 'This is a test service for demonstration purposes...',
      description: "This is a test service for demonstration purposes.",
      image: 'https://images.squarespace-cdn.com/content/v1/65eb3d8c9719340a9a48d8d7/6c62ce0a-e2cb-46b7-8ad8-b9df9e1db52f/Luxury+Custom+Pool+Seattle+-+Krisco+Pools+%282%29.jpg?format=2500w',
      icon: '/icons/renovation.svg',
      features: [
        'Beautiful waterfalls and fountains',
        'Custom designs and styles',
        'Enhanced aesthetics and functionality'
      ]
    },
    {
      id: 'test-service-5',
      title: 'Test service 5',
      short: 'This is a test service for demonstration purposes...',
      description: "This is a test service for demonstration purposes",
      image: 'https://www.385swim.com/wp-content/uploads/2020/10/Rochester-NY-In-Ground-Pool-Installer-41-scaled.jpg',
      icon: '/icons/renovation.svg',
      features: [
        'Beautiful waterfalls and fountains',
        'Custom designs and styles',
        'Enhanced aesthetics and functionality'
      ]
    },
  ]
};