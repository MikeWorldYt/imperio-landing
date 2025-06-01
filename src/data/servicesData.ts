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
        title: 'Pool Installation',
        description: 'We design and build custom in-ground pools with premium finishes.',
        image: 'https://leisurepools.eu/wp-content/uploads/2020/06/best-type-of-swimming-pool-for-my-home_2.jpg',
        icon: '/icons/pool.svg',
        subheading: 'In-Ground Pools',
        btnPrimary: [
            {
                href :"get-quote",
                className :"inline-block px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition",
                text: "Contact"
            }
        ],
        btnSecondary: [
            {
                href: "get-quote",
                className: "inline-block px-4 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition",
                text: "Learn More"
            }
        ]
    },
    {
        title: 'Jacuzzi & Spa',
        description: 'Relax with our luxurious spa and jacuzzi installations.',
        image: 'https://www.thefibreglasspoolcompany.com.au/wp-content/uploads/hamilton-sl-hero-1.jpg',
        icon: '/icons/spa.svg',
        subheading: 'Wellness Upgrade',
        btnPrimary: [
            {
                href:"get-quote",
                className:"inline-block px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition",
                text:"Contact",
            }
        ],
        btnSecondary: [
            {
                href:"get-quote",
                className:"inline-block px-4 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition",
                text:"Learn More",
            }
        ]
    },
    {
        title: 'Renovations',
        description: 'Modernize and enhance your existing pool or spa with expert remodeling.',
        image: 'https://www.385swim.com/wp-content/uploads/2020/10/Rochester-NY-In-Ground-Pool-Installer-41-scaled.jpg',
        icon: '/icons/renovation.svg',
        subheading: 'Pool Remodeling',
        btnPrimary: [
            {
                href:"tel:55555555",
                className:"inline-block px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition",
                text:"Contact",
            }
        ],
        btnSecondary: [
            {
                href:"get-quote",
                className:"inline-block px-4 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition",
                text:"Learn More",
            }
        ]
}];