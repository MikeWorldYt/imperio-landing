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
                href :"en/get-quote",
                className :"inline-block px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition",
                text: "Contact"
            }
        ],
        btnSecondary: [
            {
                href: "en/services",
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
                href:"en/get-quote",
                className:"inline-block px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition",
                text:"Contact",
            }
        ],
        btnSecondary: [
            {
                href:"en/services",
                className:"inline-block px-4 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition",
                text:"Learn More",
            }
        ]
    },
    {
        title: 'Waterfalls & Fountains',
        description: 'Enhance your pool or spa with stunning waterfalls and fountains.',
        image: 'https://www.385swim.com/wp-content/uploads/2020/10/Rochester-NY-In-Ground-Pool-Installer-41-scaled.jpg',
        icon: '/icons/renovation.svg',
        subheading: 'Pool Remodeling',
        btnPrimary: [
            {
                href:"en/get-quote",
                className:"inline-block px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition",
                text:"Contact",
            }
        ],
        btnSecondary: [
            {
                href:"en/services",
                className:"inline-block px-4 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition",
                text:"Learn More",
            }
        ]
}];