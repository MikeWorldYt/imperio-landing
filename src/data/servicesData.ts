export interface Service {
    title: string;
    description: string;
    image: string;
    icon: string;
    subheading: string;
    btnPrimary: {
        href: string;
        className: string;
        text: string;
    }[];
    btnSecondary?: {
        href: string;
        className: string;
        text: string;
    }[];
}

export const servicesAPI: Service[] = [{
        title: 'Pool Remodeling',
        description: 'Modernize and enhance your existing pool or spa with expert renovations.',
        image: 'https://leisurepools.eu/wp-content/uploads/2020/06/best-type-of-swimming-pool-for-my-home_2.jpg',
        icon: '/icons/pool.svg',
        subheading: 'In-Ground Pools',
        btnPrimary: [
            {
                href :"get-quote/form?s=renovation",
                className :"inline-block px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition",
                text: "Contact"
            }
        ],
        btnSecondary: [
            {
                href: "services",
                className: "inline-block px-4 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition",
                text: "Learn More"
            }
        ]
    },
    {
        title: 'Replastering',
        description: 'Transform your pool or spa with expert replastering services.',
        image: 'https://www.thefibreglasspoolcompany.com.au/wp-content/uploads/hamilton-sl-hero-1.jpg',
        icon: '/icons/spa.svg',
        subheading: 'Wellness Upgrade',
        btnPrimary: [
            {
                href:"get-quote/form?s=plaster",
                className:"inline-block px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition",
                text:"Contact",
            }
        ],
        btnSecondary: [
            {
                href:"services",
                className:"inline-block px-4 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition",
                text:"Learn More",
            }
        ]
    },
    {
        title: 'Waterfalls & Fountains',
        description: 'Enhance your pool or spa with stunning waterfalls and fountains.',
        image: 'https://leisurepools.com.au/wp-content/uploads/2020/10/LeisurePoolsAU_Absolute_8m_SilverGrey_Rockhampton_2018-1.jpg',
        icon: '/icons/renovation.svg',
        subheading: 'Pool Remodeling',
        btnPrimary: [
            {
                href:"get-quote/form?s=deco-features",
                className:"inline-block px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition",
                text:"Contact",
            }
        ],
        btnSecondary: [
            {
                href:"services",
                className:"inline-block px-4 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition",
                text:"Learn More",
            }
        ]
    },
    {
        title: 'Pool Deck',
        description: 'dec.',
        image: 'https://images.squarespace-cdn.com/content/v1/65eb3d8c9719340a9a48d8d7/6c62ce0a-e2cb-46b7-8ad8-b9df9e1db52f/Luxury+Custom+Pool+Seattle+-+Krisco+Pools+%282%29.jpg?format=2500w',
        icon: '/icons/renovation.svg',
        subheading: 'Pool Remodeling',
        btnPrimary: [
            {
                href:"get-quote/form?s=deck-bars",
                className:"inline-block px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition",
                text:"Contact",
            }
        ],
        btnSecondary: [
            {
                href:"services",
                className:"inline-block px-4 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition",
                text:"Learn More",
            }
        ]
    },
    {
        title: 'Test service 5',
        description: 'desc.',
        image: 'https://www.385swim.com/wp-content/uploads/2020/10/Rochester-NY-In-Ground-Pool-Installer-41-scaled.jpg',
        icon: '/icons/renovation.svg',
        subheading: 'Pool Remodeling',
        btnPrimary: [
            {
                href:"get-quote",
                className:"inline-block px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition",
                text:"Contact",
            }
        ],
        btnSecondary: [
            {
                href:"services",
                className:"inline-block px-4 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition",
                text:"Learn More",
            }
        ]
    },
];