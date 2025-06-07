export interface Service {
    title: string;
    short: string;
    description: string;
    image: string;
    icon: string;
}

export const servicesAPI: Service[] = [
    {   
        title: 'Pool Remodeling',
        short: 'Modernize and enhance your existing pool or spa with expert ...',
        description: 'Modernize and enhance your existing pool or spa with expert renovations.',
        image: 'https://leisurepools.eu/wp-content/uploads/2020/06/best-type-of-swimming-pool-for-my-home_2.jpg',
        icon: '/icons/pool.svg',
    },
    {
        title: 'Replastering',
        short: 'Transform your pool or spa with expert replastering services...',
        description: 'Transform your pool or spa with expert replastering services.',
        image: 'https://www.thefibreglasspoolcompany.com.au/wp-content/uploads/hamilton-sl-hero-1.jpg',
        icon: '/icons/spa.svg',
    },
    {
        title: 'Waterfalls & Fountains',
        short: 'Enhance your pool or spa with stunning waterfalls and fountains...',
        description: 'Enhance your pool or spa with stunning waterfalls and fountains.',
        image: 'https://leisurepools.com.au/wp-content/uploads/2020/10/LeisurePoolsAU_Absolute_8m_SilverGrey_Rockhampton_2018-1.jpg',
        icon: '/icons/renovation.svg',
    },
    {   
        title: 'Pool Deck',
        description: 'dec.',
        short: 'Transform your pool area with our expert deck renovation services...',
        image: 'https://images.squarespace-cdn.com/content/v1/65eb3d8c9719340a9a48d8d7/6c62ce0a-e2cb-46b7-8ad8-b9df9e1db52f/Luxury+Custom+Pool+Seattle+-+Krisco+Pools+%282%29.jpg?format=2500w',
        icon: '/icons/renovation.svg',
    },
    {
        title: 'Test service 5',
        description: 'desc.',
        short: 'This is a test service for demonstration purposes...',
        image: 'https://www.385swim.com/wp-content/uploads/2020/10/Rochester-NY-In-Ground-Pool-Installer-41-scaled.jpg',
        icon: '/icons/renovation.svg',
    },
];