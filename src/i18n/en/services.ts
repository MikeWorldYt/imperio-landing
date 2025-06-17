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
    content_4?: string;
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
        Your pool should be the heart of your backyard, but that's hard when you are staring at cracked tiles, rough plaster, or just an outdated style. It's time to transform your space from functional to unforgettable.
        <br>
        Our expert Pool Remodeling service is your all-in-one solution. We focus on what matters:
        <br>
          <li> <b>Replastering & Resurfacing:</b> For a silky-smooth finish in a beautiful new color. </li>
          <li> <b>New Tile & Coping:</b> The perfect frame for your pool with modern, durable materials. </li>
          <li> <b>Deck & Patio Renewal:</b> We create a safe, stylish, and comfortable space for relaxing and entertaining. </li>
        From essential renovations to luxury upgrades like waterfalls or custom LED lighting, we bring your vision to life.
        <br> <br>
        Ready to fall in love with your pool again? Contact us for a free consultation!
      `,
      content_2: `
        <h2> Is It Time to Renovate Your Pool? </h2>
        If you're nodding along to any of these common issues, it’s a clear sign your pool is ready for a transformation:
          <li> The surface feels rough, stained, or is cracking (plaster issues). </li>
          <li> You have chipped, broken, or simply outdated pool tiles. </li>
          <li> The pool coping (the edge of the pool) is damaged or looks old. </li>
          <li> Your pool deck has cracks, stains, or is dangerously slippery. </li>
          <li> You're simply tired of the old look and ready for something fresh and modern. </li>
        <br>
        Your pool should be more than just a place to swim, it should be the centerpiece of your backyard, a source of pride, relaxation, and endless fun.
        But over time, even the best pools can start to look outdated, worn-out, or simply stop reflecting your personal style.
        <br>
        Don't worry though, <b> We're here to help! </b>
        <br>
        Our Pool Remodeling service is designed to breathe new life into your outdoor space, turning it back into the luxurious escape you deserve.
        <br>
        We handle every aspect of your renovation project with professionalism and an eye for detail. We don’t just fix problems; we create beautiful, durable, and functional spaces.
      `,
      content_3: `
        <h2> Elevate Your Oasis with Modern Upgrades </h2>
        Why stop at the basics? A full pool remodeling is the perfect opportunity to add features that enhance your enjoyment and can even save you money:
          <li> Custom Water Features: Add the soothing sound of a waterfall or the elegant look of deck jets. </li>
          <li> LED Lighting: Create the perfect mood for evening swims with vibrant, energy-efficient color-changing lights. </li>
          <li> Energy-Efficient Equipment: Upgrade to a modern pump and filter to reduce your energy bills and maintenance time. </li>
          <li> Saltwater System Conversion: Enjoy softer, silkier water that's gentler on your skin and eyes. </li>
        <img 
          alt="Pool Remodeling"
          src="https://i.pinimg.com/1200x/b5/26/94/b526948f50e94a1f5374ed8794b88c09.jpg"
        >
        Ready to fall in love with your pool again? Let’s work together to design and build the backyard retreat you won't want to leave.
        <br> <br>
        Contact us today for a free, no-obligation consultation!
      `,
    },
    {
      id: 'plastering', // 
      title: 'Plastering',
      description: "The pool finish gives your water its beautiful color and provides a smooth surface underfoot. Choose from classic plaster to durable modern pebble styles.",
      image: "https://professionalpoolguy.com/wp-content/uploads/2024/04/pool-plastering-experts-in-plano-tx.webp",
      icon: '/icons/spa.svg',
      content_1: `
        Far too often, the pool finish (or plaster) is the overlooked element of your pool's look and feel.
        It's not just the material that presents to the interior of your pool, It's defining the color, texture, and overall personality of they.
        <br>
        A new pool plastering is not a repair; it's an opportunity to completely reshape the personality of your pool. Whether you desire a classic, modern, or custom look, we have the expertise to bring your vision to life.
        <br>
        <h2> Pool Finish Options </h2>
        We offer a thoughtfully curated range of top-of-the-line finishes to meet your design vision, lifestyle, and budget. Each one has its own unique characteristics:
        <h3> Regular Plaster </h3> 
        The classic one. It's the original smooth, white finish that creates that beautiful, light-blue water color. It's an inexpensive way of achieving a clean, fresh, and inviting look for your pool. It's the classic for a reason.
        <img 
          alt="Replaster"
          src="https://i.pinimg.com/1200x/f3/ac/49/f3ac495dc88f66d4c8dee8e0e5cb0249.jpg"
        >
      `,
      content_2: `
        <h3> Mini Pebble </h3> 
        The perfect blend of beauty and durability. Mini pebble finish consists of small rounded pebbles tumbled and mixed into a cement-based finish naturally. The result is a subtly textured, slip-resistant surface significantly stronger and stain-resistant than regular plaster. It has a more riverbed-like appearance and unbelievable durability.
        <img 
          alt="Mini Pebble"
          src="https://i.pinimg.com/1200x/ab/3d/53/ab3d539f395476ff54e445bcf56a9a9d.jpg"
        >
        `,
      content_3: `
        <h3> Micro Pebble </h3> 
        The epitome of elegance and smoothness. A micro pebble finish uses the smallest, most refined pebbles to make a surface that is extremely smooth to the hand, yet incredibly durable. This premium choice offers the maximum durability and stain resistance, yielding a deep, high-end look that will endure for decades.
        <img 
          alt="Micro Pebble"
          src=""
        >
        `,
        content_4: `
        <h3> Why a Professional Pool Resurfacing Matters? </h3>
        Choosing the right material is only the first step. The longevity of your pool finish depends entirely on proper application. Our experienced personnel ensures complete preparation of the original surface, flawless application of the new finish, and guidance on the critical curing process. This commitment to quality will have your new finish looking beautiful, durable, and a good investment.
        <br> <br>
        Ready to see and experience the difference a fresh pool finish can create?
        <br>
        Contact us today to see samples and get a free, detailed estimate!
        <br>
        `,
    },
    {
      id: 'new-pools-and-additionals', // Pool Construction, Planning, 
      title: 'New Pools & Additionals',
      description: "Loading...",
      image: 'https://www.385swim.com/wp-content/uploads/2020/10/Rochester-NY-In-Ground-Pool-Installer-41-scaled.jpg',
      icon: '/icons/renovation.svg',
      content_1: `
        503 Service Unavailable, Server in maintenance.
        <br> Please try after.
      `,
    },
    {
      id: 'waterfalls-and-fountains',
      title: 'Waterfalls & Fountains',
      description: 'Enhance your pool or spa with stunning waterfalls and fountains, offering a unique and captivating visual experience. From cascading waterfalls to cascading fountains, our expertly crafted waterfalls and fountains add a touch of elegance and sophistication to your outdoor oasis.',
      image: 'https://leisurepools.com.au/wp-content/uploads/2020/10/LeisurePoolsAU_Absolute_8m_SilverGrey_Rockhampton_2018-1.jpg',
      icon: '/icons/renovation.svg',
      content_1: `
        503 Service Unavailable, Server in maintenance.
        <br> Please try after.
      `,
    },
    {
      id: 'pool-equipment-upgrades',
      title: 'Pool Equipment Upgrades',
      description: "Upgrade your pool equipment for smarter control, lower energy bills, and easier maintenance, all from your phone. Enjoy modern convenience and make your pool work for you.",
      image: 'https://www.385swim.com/wp-content/uploads/2020/10/Rochester-NY-In-Ground-Pool-Installer-41-scaled.jpg',
      icon: '/icons/renovation.svg',
      content_1: `
        The equipment pad is the control hub of your pool, handling everything from circulation to sanitation. Although frequently out of sight, this system determines your pool's operating expense, water clarity, and overall convenience. One of the most significant upgrades a pool owner can undertake is to modern, efficient equipment.
        <h2> When is it Time to Upgrade Equipment? </h2>
        Upgrading is the reasonable option. In certain circumstances, it is unavoidable:
        <li> High Energy Costs: When your electric bill seems disproportionately high, a worn-out pump is likely to be the prime culprit. </li>
        <li> Frequent Repairs: If your device requires constant service calls and repairs, the maintenance cost can quickly approach replacement levels. </li>
        <li> Loud Machines: Grinding, whining, or noisy, cacophonous sounds are clear indications of mechanical wear and imminent failure. </li>
        <li> Dirty Water: If you're having trouble maintaining the water clear through proper chemical balancing, your pump or filter may not be functioning as well as it once did. </li>
        <li> Deteriorated Performance: The average equipment lasts 8-12 years of normal use. After that, efficiency plummets drastically. </li>
        If you have any of these issues, is important to upgrade your equipment.
        <br>
        You can count with qualified professionals to remplace your equipment with the latest models, ensuring optimal performance.
      `,
      content_2: `
        <h2> The Advantages of a New Equipment System </h2>
        When you replace your equipment, you get genuine payback for your dollar. The benefits are clear:
        <li> Major Energy Savings: New variable-speed pumps can lower your pool's circulation energy usage by as much as 90% compared to outdated single-speed pumps. </li>
        <li> Improved Water Quality: High-efficiency new filters paired with advanced sanitizing systems yield clearer, healthier water with fewer chemical treatments. </li>
        <li> Streamlined Operation & Automation: A control system offers single-point management of all your pool's operations—sometimes from an app on your smartphone—removing daily manual settings. </li>
        <li> Longer Swimming Season: Efficient pool heaters and heat pumps allow you to maintain your ideal water temperature for more of the year, maximizing your investment. </li>
        <br>
        Some equipment is more complex to replace, though you can count on us to handle it.
      `,

    },
    {
      id: "outdoor-living", // Landscapes
      title: "Outdoor Living",
      description: "Loading...",
      image: 'https://www.385swim.com/wp-content/uploads/2020/10/Rochester-NY-In-Ground-Pool-Installer-41-scaled.jpg',
      icon: '/icons/renovation.svg',
      content_1: `
        503 Service Unavailable, Server in maintenance.
        <br> Please try after.
      `,
    },
        {
      id: "weekly-pool-services",
      title: "Weekly Pool Services",
      description: "Loading...",
      image: 'https://www.385swim.com/wp-content/uploads/2020/10/Rochester-NY-In-Ground-Pool-Installer-41-scaled.jpg',
      icon: '/icons/renovation.svg',
      content_1: `
        503 Service Unavailable, Server in maintenance.
        <br> Please try after.
      `,
    },
  ]
};