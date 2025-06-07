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
  title: 'Servicios - Imperio Pools',
  subtitle: 'Estos son nuestros servicios.',
  services: [
    {
      id: 'pool-remodeling',
      title: 'Remodelelación de Piscinas',
      short: "Transforma tu piscina existente con nuestros servicios de remodelación expertos...",
      description: "Transforma tu piscina existente con nuestros servicios de remodelación expertos. Mejoramos la estética y funcionalidad, asegurando que tu piscina cumpla con los estándares modernos y tu estilo personal.",
      image: "https://leisurepools.eu/wp-content/uploads/2020/06/best-type-of-swimming-pool-for-my-home_2.jpg",
      icon: '/icons/pool.svg',
      features: [
        'Diseños personalizados y modernos',
        'Instalación segura y eficiente',
        'Mantenimiento preventivo y correctivo',
        'Garantía de calidad y durabilidad'
      ]
    },
    {
      id: 'replastering',
      title: 'Replaster',
      short: 'Revitalize ... desc desc',
      description: "Es Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
      title: 'Cascadas y Fuentes',
      short: 'Revitalize ... desc desc',
      description: "Lorem ipsum",
      image: "https://leisurepools.com.au/wp-content/uploads/2020/10/LeisurePoolsAU_Absolute_8m_SilverGrey_Rockhampton_2018-1.jpg",
      icon: '/icons/renovation.svg',
      features: [
        'editar',
        'editar',
        'editar',
        'editar'
      ]
    },
    {
      id: 'pool-deck',
      title: 'Instalación de Azulejos',
      short: 'Revi... desc desc',
      description: "Lorem ipsum",
      image: "https://images.squarespace-cdn.com/content/v1/65eb3d8c9719340a9a48d8d7/6c62ce0a-e2cb-46b7-8ad8-b9df9e1db52f/Luxury+Custom+Pool+Seattle+-+Krisco+Pools+%282%29.jpg?format=2500w",
      icon: '/icons/renovation.svg',
      features: [
        'editar',
        'editar',
        'editar',
        'editar'
      ]
    }









  ]
};