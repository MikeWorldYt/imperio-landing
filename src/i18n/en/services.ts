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
    // features: string[];
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
      id: 'pool-remodeling', // Renovations, Remodel, no Repairs
      title: 'Pool Remodeling',
      short: 'Transform your existing pool with our expert remodeling services...',
      description: 'Transform your existing pool with our expert remodeling services. We enhance aesthetics and functionality, ensuring your pool meets modern standards and your personal style.',
      image: "https://leisurepools.eu/wp-content/uploads/2020/06/best-type-of-swimming-pool-for-my-home_2.jpg",
      icon: '/icons/pool.svg',
      content: "This is a <b>text</b> for demonstration purposes,<br> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti non eius corrupti recusandae repellat, nulla commodi amet modi delectus nam consectetur in tenetur molestias aliquid. Non voluptas esse amet voluptate! ",
    },
    {
      id: 'plastering', // 
      title: 'Plastering',
      short: "Transform your pool or spa with expert replastering services...",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "https://images.squarespace-cdn.com/content/v1/65eb3d8c9719340a9a48d8d7/6c62ce0a-e2cb-46b7-8ad8-b9df9e1db52f/Luxury+Custom+Pool+Seattle+-+Krisco+Pools+%282%29.jpg?format=2500w",
      icon: '/icons/spa.svg',
      content: "<i>This is a <b>text</b> for demonstration purposes</i> ",
    },
    {
      id: 'addition', // Pool Construction, Planning, 
      title: 'New Pools & Additionals',
      short: 'This is a test service for demonstration purposes...',
      description: "This is a test service for demonstration purposes",
      image: 'https://www.385swim.com/wp-content/uploads/2020/10/Rochester-NY-In-Ground-Pool-Installer-41-scaled.jpg',
      icon: '/icons/renovation.svg',
      content: "This is a <b>text</b> for demonstration purposes, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti non eius corrupti recusandae repellat, nulla commodi amet modi delectus nam consectetur in tenetur molestias aliquid. Non voluptas esse amet voluptate! ",
    },
    {
      id: 'waterfalls-and-fountains',
      title: 'Waterfalls & Fountains',
      short: 'Enhance your pool or spa with stunning waterfalls and fountains...',
      description: 'Enhance your pool or spa with stunning waterfalls and fountains, offering a unique and captivating visual experience. From cascading waterfalls to cascading fountains, our expertly crafted waterfalls and fountains add a touch of elegance and sophistication to your outdoor oasis.',
      image: 'https://leisurepools.com.au/wp-content/uploads/2020/10/LeisurePoolsAU_Absolute_8m_SilverGrey_Rockhampton_2018-1.jpg',
      icon: '/icons/renovation.svg',
      content: "This is a <b>text for demonstration purposes</b>, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti non eius corrupti recusandae repellat, nulla commodi amet modi delectus nam consectetur in tenetur molestias aliquid. Non voluptas esse amet voluptate! ",
    },
    {
      id: 'pool-equipment',
      title: 'Pool Equipment Upgrades',
      short: 'This is a test service for demonstration purposes...',
      description: "This is a test service for demonstration purposes",
      image: 'https://www.385swim.com/wp-content/uploads/2020/10/Rochester-NY-In-Ground-Pool-Installer-41-scaled.jpg',
      icon: '/icons/renovation.svg',
      content: "This is a <b>text</b> for demonstration purposes, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti non eius corrupti recusandae repellat, nulla commodi amet modi delectus nam consectetur in tenetur molestias aliquid. Non voluptas esse amet voluptate! ",
    },
    {
      id: "landscapes",
      title: "Outdoor Kitchen",
      short: 'This is a test service for demonstration purposes...',
      description: "This is a test service for demonstration purposes",
      image: 'https://www.385swim.com/wp-content/uploads/2020/10/Rochester-NY-In-Ground-Pool-Installer-41-scaled.jpg',
      icon: '/icons/renovation.svg',
      content: "This is a <b>text</b> for demonstration purposes",
    },
        {
      id: "maintenence",
      title: "Weekly Pool Service",
      short: 'This is a test service for demonstration purposes...',
      description: "This is a test service for demonstration purposes",
      image: 'https://www.385swim.com/wp-content/uploads/2020/10/Rochester-NY-In-Ground-Pool-Installer-41-scaled.jpg',
      icon: '/icons/renovation.svg',
      content: "This is a <b>text</b> for demonstration purposes",
    },
  ]
};