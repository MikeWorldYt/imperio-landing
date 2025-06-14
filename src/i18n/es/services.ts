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
    content: string;
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
      content: "This is a <b>text</b> for demonstration purposes, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti non eius corrupti recusandae repellat, nulla commodi amet modi delectus nam consectetur in tenetur molestias aliquid. Non voluptas esse amet voluptate! ",
    },
    {
      id: 'plastering',
      title: 'Replaster',
      short: 'Revitalize ... desc desc',
      description: "Es Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "https://www.thefibreglasspoolcompany.com.au/wp-content/uploads/hamilton-sl-hero-1.jpg",
      icon: '/icons/spa.svg',
      content: "This is a <b>text</b> for demonstration purposes, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti non eius corrupti recusandae repellat, nulla commodi amet modi delectus nam consectetur in tenetur molestias aliquid. Non voluptas esse amet voluptate! ",
    },
    {
      id: 'new-pools-and-additionals', // Pool Construction, Planning, 
      title: 'Nuevas Piscinas y Ampliaciones',
      short: 'This is a test service for demonstration purposes...',
      description: "This is a test service for demonstration purposes",
      image: 'https://www.385swim.com/wp-content/uploads/2020/10/Rochester-NY-In-Ground-Pool-Installer-41-scaled.jpg',
      icon: '/icons/renovation.svg',
      content: "This is a <b>text</b> for demonstration purposes, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti non eius corrupti recusandae repellat, nulla commodi amet modi delectus nam consectetur in tenetur molestias aliquid. Non voluptas esse amet voluptate! ",
    },
    {
      id: 'waterfalls-and-fountains',
      title: 'Cascadas y Fuentes',
      short: 'Revitalize ... desc desc',
      description: "Lorem ipsum",
      image: "https://leisurepools.com.au/wp-content/uploads/2020/10/LeisurePoolsAU_Absolute_8m_SilverGrey_Rockhampton_2018-1.jpg",
      icon: '/icons/renovation.svg',
      content: "This is a <b>text</b> for demonstration purposes, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti non eius corrupti recusandae repellat, nulla commodi amet modi delectus nam consectetur in tenetur molestias aliquid. Non voluptas esse amet voluptate! ",
    },
    {
      id: 'pool-equipment-upgrades',
      title: 'Equipos de Piscina',
      short: 'This is a test service for demonstration purposes...',
      description: "This is a test service for demonstration purposes",
      image: 'https://www.385swim.com/wp-content/uploads/2020/10/Rochester-NY-In-Ground-Pool-Installer-41-scaled.jpg',
      icon: '/icons/renovation.svg',
      content: "This is a <b>text</b> for demonstration purposes, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti non eius corrupti recusandae repellat, nulla commodi amet modi delectus nam consectetur in tenetur molestias aliquid. Non voluptas esse amet voluptate! ",
    },
    {
      id: "outdoor-living", // Landscapes
      title: "Patios",
      short: 'This is a test service for demonstration purposes...',
      description: "This is a test service for demonstration purposes",
      image: 'https://www.385swim.com/wp-content/uploads/2020/10/Rochester-NY-In-Ground-Pool-Installer-41-scaled.jpg',
      icon: '/icons/renovation.svg',
      content: "This is a <b>text</b> for demonstration purposes",
    },
        {
      id: "weekly-pool-services",
      title: "Servicios Semanales",
      short: 'This is a test service for demonstration purposes...',
      description: "This is a test service for demonstration purposes",
      image: 'https://www.385swim.com/wp-content/uploads/2020/10/Rochester-NY-In-Ground-Pool-Installer-41-scaled.jpg',
      icon: '/icons/renovation.svg',
      content: "This is a <b>text</b> for demonstration purposes",
    },
  ]
};