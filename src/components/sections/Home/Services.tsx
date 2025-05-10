import React from 'react';
import Card from '../../ui/Card';

const services = [
    {
      title: 'Pool Installation',
      description: 'We design and build custom in-ground pools with premium finishes.',
      image: 'https://leisurepools.eu/wp-content/uploads/2020/06/best-type-of-swimming-pool-for-my-home_2.jpg',
      icon: '/icons/pool.svg',
      subheading: 'In-Ground Pools',
      actions: (
        <a
          href="tel:55555555"
          className="inline-block px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Contact
        </a>
      ),
    },
    {
      title: 'Jacuzzi & Spa',
      description: 'Relax with our luxurious spa and jacuzzi installations.',
      image: 'https://www.thefibreglasspoolcompany.com.au/wp-content/uploads/hamilton-sl-hero-1.jpg',
      icon: '/icons/spa.svg',
      subheading: 'Wellness Upgrade',
      actions: (
        <a
          href="tel:55555555"
          className="inline-block px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Contact
        </a>
      ),
    },
    {
      title: 'Renovations',
      description: 'Modernize and enhance your existing pool or spa with expert remodeling.',
      image: 'https://www.385swim.com/wp-content/uploads/2020/10/Rochester-NY-In-Ground-Pool-Installer-41-scaled.jpg',
      icon: '/icons/renovation.svg',
      subheading: 'Pool Remodeling',
      actions: (
        <a
          href="tel:55555555"
          className="inline-block px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Contact
        </a>
      ),
    },
  ];
  
  const Services = () => {
    return (
      <section className="w-full py-16 bg-blue-600/50 flex flex-col items-center justify-center text-black">
        <h2 className="global-section mb-8">Services</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-screen-xl px-4">
          {services.map((service, index) => (
            <Card key={index} {...service} />
          ))}
        </div>
      </section>
    );
  };

  export default Services;