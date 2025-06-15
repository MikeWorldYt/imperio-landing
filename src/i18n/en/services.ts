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
      description: "Let's transform it from a simple pool into the stunning backyard oasis you’ve always dreamed of, making it the favorite spot for your family and friends.",
      image: "https://leisurepools.eu/wp-content/uploads/2020/06/best-type-of-swimming-pool-for-my-home_2.jpg",
      icon: '/icons/pool.svg',
      content_1: `

      `,
      content_2: `

      `,
      content_3: `

      `,
    },
    {
      id: 'plastering', // 
      title: 'Plastering',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "https://images.squarespace-cdn.com/content/v1/65eb3d8c9719340a9a48d8d7/6c62ce0a-e2cb-46b7-8ad8-b9df9e1db52f/Luxury+Custom+Pool+Seattle+-+Krisco+Pools+%282%29.jpg?format=2500w",
      icon: '/icons/spa.svg',
      content_1: `
        <i>This is a <b>text</b> for demonstration purposes</i> 
      `,
    },
    {
      id: 'new-pools-and-additionals', // Pool Construction, Planning, 
      title: 'New Pools & Additionals',
      description: "This is a test service for demonstration purposes",
      image: 'https://www.385swim.com/wp-content/uploads/2020/10/Rochester-NY-In-Ground-Pool-Installer-41-scaled.jpg',
      icon: '/icons/renovation.svg',
      content_1: `
        This is a <b>text</b> for demonstration purposes, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti non eius corrupti recusandae repellat, nulla commodi amet modi delectus nam consectetur in tenetur molestias aliquid. Non voluptas esse amet voluptate!
      `,
    },
    {
      id: 'waterfalls-and-fountains',
      title: 'Waterfalls & Fountains',
      description: 'Enhance your pool or spa with stunning waterfalls and fountains, offering a unique and captivating visual experience. From cascading waterfalls to cascading fountains, our expertly crafted waterfalls and fountains add a touch of elegance and sophistication to your outdoor oasis.',
      image: 'https://leisurepools.com.au/wp-content/uploads/2020/10/LeisurePoolsAU_Absolute_8m_SilverGrey_Rockhampton_2018-1.jpg',
      icon: '/icons/renovation.svg',
      content_1: `
        This is a <b>text for demonstration purposes</b>, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti non eius corrupti recusandae repellat, nulla commodi amet modi delectus nam consectetur in tenetur molestias aliquid. Non voluptas esse amet voluptate!
      `,
    },
    {
      id: 'pool-equipment-upgrades',
      title: 'Pool Equipment Upgrades',
      description: "This is a test service for demonstration purposes",
      image: 'https://www.385swim.com/wp-content/uploads/2020/10/Rochester-NY-In-Ground-Pool-Installer-41-scaled.jpg',
      icon: '/icons/renovation.svg',
      content_1: `
        This is a <b>text</b> for demonstration purposes, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti non eius corrupti recusandae repellat, nulla commodi amet modi delectus nam consectetur in tenetur molestias aliquid. Non voluptas esse amet voluptate! 
      `,
    },
    {
      id: "outdoor-living", // Landscapes
      title: "Outdoor Living",
      description: "This is a test service for demonstration purposes",
      image: 'https://www.385swim.com/wp-content/uploads/2020/10/Rochester-NY-In-Ground-Pool-Installer-41-scaled.jpg',
      icon: '/icons/renovation.svg',
      content_1: `
        This is a <b>text</b> for demonstration purposes
      `,
    },
        {
      id: "weekly-pool-services",
      title: "Weekly Pool Services",
      description: "This is a test service for demonstration purposes",
      image: 'https://www.385swim.com/wp-content/uploads/2020/10/Rochester-NY-In-Ground-Pool-Installer-41-scaled.jpg',
      icon: '/icons/renovation.svg',
      content_1: `
        This is a <b>text</b> for demonstration purposes
      `,
    },
  ]
};