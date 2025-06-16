export interface Service {
  title: string;
  subtitle: string;
  services: {
    id: string;
    title: string;
    description: string;
    image: string; // Only use 3:2 aspect ratio images
    icon: string;
    content_1: string;
    content_2?: string;
    content_3?: string;
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
      description: "Transfomamos una simple piscina al impresionante Oasis en el patio trasero que siempre has soñado, convirtiéndolo en el lugar favorito de tu familia y amigos.",
      image: "https://leisurepools.eu/wp-content/uploads/2020/06/best-type-of-swimming-pool-for-my-home_2.jpg",
      icon: '/icons/pool.svg',
      content_1: `
        503 Service Unavailable, Server in maintenance.
        <br> Please try after.
      `
    },
    {
      id: 'plastering',
      title: 'Replaster',
      description: "Es Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "https://www.thefibreglasspoolcompany.com.au/wp-content/uploads/hamilton-sl-hero-1.jpg",
      icon: '/icons/spa.svg',
      content_1: `
        503 Service Unavailable, Server in maintenance.
        <br> Please try after.
      `,
    },
    {
      id: 'new-pools-and-additionals', // Pool Construction, Planning, 
      title: 'Nuevas Piscinas y Ampliaciones',
      description: "This is a test service for demonstration purposes",
      image: 'https://www.385swim.com/wp-content/uploads/2020/10/Rochester-NY-In-Ground-Pool-Installer-41-scaled.jpg',
      icon: '/icons/renovation.svg',
      content_1: `
        503 Service Unavailable, Server in maintenance.
        <br> Please try after.
      `,
    },
    {
      id: 'waterfalls-and-fountains',
      title: 'Cascadas y Fuentes',
      description: "Lorem ipsum",
      image: "https://leisurepools.com.au/wp-content/uploads/2020/10/LeisurePoolsAU_Absolute_8m_SilverGrey_Rockhampton_2018-1.jpg",
      icon: '/icons/renovation.svg',
      content_1: `
        503 Service Unavailable, Server in maintenance.
        <br> Please try after.
      `,
    },
    {
      id: 'pool-equipment-upgrades',
      title: 'Equipos de Piscina',
      description: "This is a test service for demonstration purposes",
      image: 'https://www.385swim.com/wp-content/uploads/2020/10/Rochester-NY-In-Ground-Pool-Installer-41-scaled.jpg',
      icon: '/icons/renovation.svg',
      content_1: `
        503 Service Unavailable, Server in maintenance.
        <br> Please try after.
      `,
    },
    {
      id: "outdoor-living", // Landscapes
      title: "Patios",
      description: "This is a test service for demonstration purposes",
      image: 'https://www.385swim.com/wp-content/uploads/2020/10/Rochester-NY-In-Ground-Pool-Installer-41-scaled.jpg',
      icon: '/icons/renovation.svg',
      content_1: `
        503 Service Unavailable, Server in maintenance.
        <br> Please try after.
      `,
    },
        {
      id: "weekly-pool-services",
      title: "Servicios Semanales",
      description: "This is a test service for demonstration purposes",
      image: 'https://www.385swim.com/wp-content/uploads/2020/10/Rochester-NY-In-Ground-Pool-Installer-41-scaled.jpg',
      icon: '/icons/renovation.svg',
      content_1: `
        503 Service Unavailable, Server in maintenance.
        <br> Please try after.
      `,
    },
  ]
};