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
        <br>
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
        <img 
          alt="Replaster"
          class="img-float-right"
          src="https://i.pinimg.com/1200x/f3/ac/49/f3ac495dc88f66d4c8dee8e0e5cb0249.jpg"
        >
        The classic one, it has been a long-time favorite among generations. This finish is known for offering a smooth and elegant look that gives water its signature color.

        This pool finish, such as plaster, creates a classic and timeless look. Its smooth surface beautifully reflects light, enhancing the natural hues of the water for a truly inviting appearance.
        Color you select for the finish directly pigments the water
        And this allows you to customize your pool's appearance, creating anything from a bright, tropical turquoise to a deep, tranquil lagoon.
        
        <br> Simple and elegant, besides plus is they have a smoother finish and won’t hurt anyone’s.
      `,
      content_2: `
        <h3> Mini Pebble </h3> 
        <img 
          alt="Mini Pebble"
          class="img-float-left"
          src="https://i.pinimg.com/1200x/ab/3d/53/ab3d539f395476ff54e445bcf56a9a9d.jpg"
        >
        The perfect blend of beauty and durability. Mini pebble finish consists of small rounded pebbles tumbled and mixed into a cement-based finish naturally. The result is a subtly textured, slip-resistant surface significantly stronger and stain-resistant than regular plaster. It has a more riverbed-like appearance and unbelievable durability.
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
      description: "Elevate your pool with custom water features that add beauty and soothing sound. From tranquil waterfalls to fun slides, transform your backyard into a sensory oasis.",
      image: 'https://leisurepools.com.au/wp-content/uploads/2020/10/LeisurePoolsAU_Absolute_8m_SilverGrey_Rockhampton_2018-1.jpg',
      icon: '/icons/renovation.svg',
      content_1: `
        A pool is a significant architectural element, yet the introduction of flowing water transforms a static feature into a lively piece of art. The sound and action of waterfalls, fountains, and jets create a resort-like atmosphere of opulence, taking the entire outdoor living experience to the maximum. We are experts at designing and constructing unique custom water features that complement beautifully your new or old pool.
        <h2> Why Add Custom Water Features? </h2>
        Water feature incorporation is an investment in your pool's ambiance and functionality. The primary advantages are:
        <li> More Recreation & Fun: Personalized jets and interactive slides provide an added measure of fun for family and guests. </li>
        <li> Calming Auditory Atmosphere: The gentle noise of running water muffles ambient sound and offers a soothing, relaxing environment. </li>
        <li> Architectural Aesthetic: A waterfall or fountain is a stunning sight, bringing architectural style and natural beauty. </li>
        <li> Complete Personalization: Personalized style and design make your new water feature a personalized reflection of your own style, perfectly adapted to fit your home's architecture. </li>
        See how our custom water features can transform your backyard into a serene oasis.
      `,
      content_2: `
        <h2> Our Custom Water Feature Services </h2>
        We offer a wide range of features, all designed to meet our high quality and aesthetic standards:
        <h3> Grottos & Waterfalls </h3>
        <img 
          alt="Grotto"
          class="img-float-left"
          src="https://i.pinimg.com/1200x/6f/7b/fd/6f7bfd2356b12fad604debe5bedfb9d8.jpg"
        >
        Waterfalls are one of <i>the most popular pool water features</i>, transformed spaces with their elegance, soothing sound, and therapeutic benefits. Whether it's naturalistic <b>Rock Waterfalls</b> that immerse memories of a mountain spring, or a Modern <b> Sheer Descent</b>, forming a smooth crystal-clear veil of water, they add dynamics and glamour to any pool.
        <br> Besides <b>Grottos</b> create a nauturalistic atmosphere, making every swim a relaxing escape.
        <br> More than decoration, waterfalls shape outdoor spaces, crafting an experience that is as visually dramatic as it is deeply refreshing.
        <h3> Fountains & Bubblers </h3>
        <img 
          alt="Fountain"
          class="img-float-right"
          src="https://i.pinimg.com/1200x/f9/b5/87/f9b587f4a01c833b1b7386533f74c7e3.jpg"
        >
        Fountains and bubblers <i> bring energy, elegance, and movement to any pool</i>, creating a dynamic and visually captivating experience.
        Whether they're soft streams or <b>lively bubbling jets</b>, they form a whimsical, sophisticated impression, enhancing ambiance with their soothing sound and mesmerizing movement.
        <br>
        Fountains and bubblers enhance outdoor spaces, rendering them dynamic oases where water comes alive.
        `,
        content_3: `
        <h3> Deck Jets & Laminars </h3>
        <img 
          alt="Deck Jet"
          class="img-float-left"
          src="https://hiveoutdoor.com/wp-content/uploads/2022/11/Laminars-Water-Descent-Hive-Outddoor-Living.jpg"
        >
        Deck jets and laminar jets add movement, elegance, and excitement your pool.
        <br> They create dynamic and a modern ambiance, transforming the space with a mesmerizing visual effect. <s>Deck jets produce soft, bubbling streams, offering a playful and relaxing ambiance, while laminar jets create smooth, glass-like tubes of water, often enhanced with LED lighting for a dazzling nighttime display.</s>
        <br> Whether for daytime enjoyment or an illuminated evening spectacle, these features bring a dynamic and sophisticated touch.
        <h3> Slides </h3>
        <img 
          alt="Slide"
          class="img-float-right"
          src="https://i.pinimg.com/1200x/6c/f1/98/6cf198cef563a89adbfa7ecc0cd9155c.jpg"
        >
        Our slides are crafted with thoughtfulness to blend unobtrusively into their surroundings, frequently being integrated into rock outcroppings or gardens to achieve a refined, organic aesthetic. We craft from only top-quality materials, they offer a resilient and a resort-level experience.
        <br> Above all, <b>your safety is our priority</b>, each design being carefully planned for stability and safe use. So for a fun or sophisticated poolside flair, Slides add excitement with seamless style.
      `,
      content_4: `
        <h2>  The Design & Integration Process </h2>
        Every installation of a water feature requires careful, professional attention. Our work begins with a consultation to develop one-of-a-kind designs and style concepts designed specifically to fit your vision. Then we perform a thorough examination of your pool's integrity and hydraulic system to ensure that every new feature not only looks breathtaking but also functions smoothly and efficiently, without interrupting your existing pool operations.
        <br> <br>
        Ready to bring a new level of sophistication and thrill to your pool?
        <br>
        Contact us today for a professional design consultation and to explore the possibilities for your backyard.
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
      content_3: `
        <h2> Core Equipment Upgrades We Provide </h2>
        We provide professional installation of the finest equipment designed for performance and longevity:
        <li> New Pumps: We provide high-efficiency, variable-speed pumps that are quiet, reliable, and the cornerstone of an energy-efficient pool. </li>
        <li> New Filters: From cartridge filters that contain lots of water to D.E. systems, we have your pool as the ideal filter for perfect water clarity. </li>
        <li> Pool Heaters: Our energy-efficient gas heaters and electric heat pumps give you hot water in the palm of your hand when you want it. </li>
        <li> PNew Lights: Upgrade to new, energy-efficient LED new lights for enhanced safety and dramatic night atmosphere, with color-changing models to choose from. </li>
        <li> Advanced Sanitation: We provide cutting-edge systems that provide a better swim experience. This includes the very sought-after salt system for gentler water, as well as strong UV3 and Ozone systems that significantly reduce chemical demand. </li>
        <li> Automation Systems: Put your entire equipment pad under one convenient easy-to-use platform for total control and convenience. </li>
        <br>
        Investing in your pool's equipment is a smart decision for any homeowner.
        <br>
        Contact us today for a professional assessment of your current system and a detailed upgrade consultation.
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