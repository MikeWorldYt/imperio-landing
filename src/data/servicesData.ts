export interface Service {
    title: string;
    description: string;
    image: string;
    icon: string;
    subheading: string;
    actions: {
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
        actions: [
            {
                href :"tel:55555555",
                className :"inline-block px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition",
                text: "Contact"
            }
        ],
    },
    {
        title: 'Jacuzzi & Spa',
        description: 'Relax with our luxurious spa and jacuzzi installations.',
        image: 'https://www.thefibreglasspoolcompany.com.au/wp-content/uploads/hamilton-sl-hero-1.jpg',
        icon: '/icons/spa.svg',
        subheading: 'Wellness Upgrade',
        actions: [
            {
                href:"tel:55555555",
                className:"inline-block px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition",
                text:"Contact",
            }
        ],
    },
    {
        title: 'Renovations',
        description: 'Modernize and enhance your existing pool or spa with expert remodeling.',
        image: 'https://www.385swim.com/wp-content/uploads/2020/10/Rochester-NY-In-Ground-Pool-Installer-41-scaled.jpg',
        icon: '/icons/renovation.svg',
        subheading: 'Pool Remodeling',
        actions: [
            {
                href:"tel:55555555",
                className:"inline-block px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition",
                text:"Contact",
            }
        ],
}];