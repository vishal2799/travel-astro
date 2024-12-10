export const navLinks = [
  { id: 1, label: 'Destinations', url: '/destinations' },
  { id: 2, label: 'Tours', url: '/tours' },
  { id: 3, label: 'Services', url: '/services' },
  { id: 4, label: 'About', url: '/about-us' },
  { id: 5, label: 'Contact', url: '/contact-us' },
  { id: 6, label: 'Blog', url: '/blogs' },
  { id: 7, label: 'Gallery', url: '/gallery' },
];

export const destinations = [
  {
    id: 1,
    name: 'Rajasthan',
    image: '/images/rajasthan/1.jpg',
    description:
      'Rajasthan, the Land of Kings, is known for its majestic forts, opulent palaces, and rich cultural heritage. Explore this vibrant states desert landscapes and bustling cities.',
    activities: [
      'Explore Amber Fort in Jaipur',
      'Camel safari in the Thar Desert',
      'Visit Udaipurs City Palace',
    ],
    bestTimeToVisit: 'October to March',
    averageTemperature: '25°C to 35°C',
    language: 'Hindi, Rajasthani',
    currency: 'Indian Rupee (INR)',
    timeZone: 'GMT+5:30',
  },
  {
    id: 2,
    name: 'Kerala',
    image: '/images/kerala/1.jpg',
    description:
      'Known as "Gods Own Country," Kerala is famous for its backwaters, lush greenery, and cultural richness. Ideal for relaxation and nature lovers.',
    activities: [
      'Cruise in Alleppey backwaters',
      'Explore Munnar tea gardens',
      'Attend a Kathakali performance',
    ],
    bestTimeToVisit: 'September to March',
    averageTemperature: '20°C to 32°C',
    language: 'Malayalam',
    currency: 'Indian Rupee (INR)',
    timeZone: 'GMT+5:30',
  },
  {
    id: 3,
    name: 'Goa',
    image: '/images/goa/1.jpg',
    description:
      'Goa, with its stunning beaches and vibrant nightlife, offers the perfect blend of relaxation and adventure.',
    activities: [
      'Relax on Baga Beach',
      'Visit Basilica of Bom Jesus',
      'Enjoy water sports at Calangute',
    ],
    bestTimeToVisit: 'November to February',
    averageTemperature: '25°C to 30°C',
    language: 'Konkani',
    currency: 'Indian Rupee (INR)',
    timeZone: 'GMT+5:30',
  },
  {
    id: 4,
    name: 'Himachal Pradesh',
    image: '/images/hp/1.jpg',
    description:
      'Nestled in the Himalayas, Himachal Pradesh is known for its scenic beauty, adventure sports, and serene landscapes.',
    activities: [
      'Trek in Manali',
      'Visit Shimlas Ridge',
      'Paragliding in Bir Billing',
    ],
    bestTimeToVisit: 'March to June',
    averageTemperature: '15°C to 25°C',
    language: 'Hindi, Pahari',
    currency: 'Indian Rupee (INR)',
    timeZone: 'GMT+5:30',
  },
  {
    id: 5,
    name: 'Tamil Nadu',
    image: '/images/tn/1.jpg',
    description:
      'Tamil Nadu, known for its Dravidian temples and cultural heritage, offers a unique blend of history and spirituality.',
    activities: [
      'Visit Meenakshi Temple in Madurai',
      'Explore Marina Beach in Chennai',
      'Enjoy a hill retreat in Ooty',
    ],
    bestTimeToVisit: 'October to March',
    averageTemperature: '25°C to 35°C',
    language: 'Tamil',
    currency: 'Indian Rupee (INR)',
    timeZone: 'GMT+5:30',
  },
  {
    id: 6,
    name: 'Ladakh',
    image: '/images/ladakh/1.jpg',
    description:
      'Ladakh, a high-altitude desert in the Himalayas, is known for its stunning landscapes, Buddhist monasteries, and adventure tourism.',
    activities: [
      'Visit Pangong Lake',
      'Explore Leh Palace',
      'Go on a bike ride through Nubra Valley',
    ],
    bestTimeToVisit: 'May to September',
    averageTemperature: '10°C to 20°C',
    language: 'Ladakhi',
    currency: 'Indian Rupee (INR)',
    timeZone: 'GMT+5:30',
  },
];

export const tours2 = [
  {
    id: 1,
    title: 'Rajasthan Royal Heritage Tour',
    image: '/images/rajasthan/1.jpg',
    description:
      'Explore Rajasthans iconic cities and experience its rich heritage. From Jaipurs Amber Fort to Jaisalmers desert landscapes.',
    highlights: ['Amber Fort', 'City Palace', 'Desert Safari'],
    bestSeason: 'October to March',
    tourType: 'Cultural & Historical',
    tourImages: [
      '/images/rajasthan/2.jpg',
      '/images/rajasthan/3.jpg',
      '/images/rajasthan/4.jpg',
      '/images/rajasthan/5.jpg',
    ],
    places: 'Jaipur, Jodhpur, Udaipur',
    overview:
      'This tour offers a deep dive into the royal history and cultural legacy of Rajasthan.',
    destinationId: 1,
  },
  {
    id: 2,
    title: 'Thar Desert Adventure',
    image: '/images/rajasthan/2.jpg',
    description:
      'Experience the thrill of a camel safari and desert camping in the golden sands of the Thar Desert.',
    highlights: ['Camel Ride', 'Overnight Camping', 'Jaisalmer Fort'],
    bestSeason: 'November to February',
    tourType: 'Adventure',
    tourImages: [
      '/images/rajasthan/1.jpg',
      '/images/rajasthan/3.jpg',
      '/images/rajasthan/4.jpg',
      '/images/rajasthan/5.jpg',
    ],
    places: 'Jaisalmer',
    overview:
      'Perfect for adventure enthusiasts exploring Rajasthans desert culture.',
    destinationId: 1,
  },
  {
    id: 3,
    title: 'Kerala Backwaters Cruise',
    image: '/images/kerala/1.jpg',
    description:
      'Relax on a luxurious houseboat while exploring the peaceful backwaters of Alleppey.',
    highlights: ['Houseboat Stay', 'Vembanad Lake', 'Local Cuisine'],
    bestSeason: 'September to March',
    tourType: 'Nature & Leisure',
    tourImages: [
      '/images/kerala/2.jpg',
      '/images/kerala/3.jpg',
      '/images/kerala/4.jpg',
      '/images/kerala/5.jpg',
    ],
    places: 'Alleppey',
    overview:
      'Enjoy the scenic beauty and village life of Keralas famous backwaters.',
    destinationId: 2,
  },
  {
    id: 4,
    title: 'Munnar Tea Garden Retreat',
    image: '/images/kerala/2.jpg',
    description:
      'Visit the lush green tea plantations of Munnar and experience the serenity of Keralas hill stations.',
    highlights: ['Tea Gardens', 'Eravikulam National Park', 'Tea Museum'],
    bestSeason: 'October to February',
    tourType: 'Nature',
    tourImages: [
      '/images/kerala/1.jpg',
      '/images/kerala/3.jpg',
      '/images/kerala/4.jpg',
      '/images/kerala/5.jpg',
    ],
    places: 'Munnar',
    overview:
      'Perfect for nature lovers wanting to explore the highlands of Kerala.',
    destinationId: 2,
  },
  {
    id: 5,
    title: 'Goa Beach Bonanza',
    image: '/images/goa/1.jpg',
    description: 'Experience the vibrant beaches and nightlife of Goa.',
    highlights: ['Baga Beach', 'Nightclubs', 'Water Sports'],
    bestSeason: 'November to February',
    tourType: 'Relaxation & Nightlife',
    tourImages: [
      '/images/goa/2.jpg',
      '/images/goa/3.jpg',
      '/images/goa/4.jpg',
      '/images/goa/5.jpg',
    ],
    places: 'North Goa',
    overview:
      'Ideal for travelers looking to unwind on the sunny shores of Goa.',
    destinationId: 3,
  },
  {
    id: 6,
    title: 'Himalayan Adventure in Manali',
    image: '/images/hp/1.jpg',
    description:
      'An adventure-packed tour in the Himalayas, featuring trekking, river rafting, and more.',
    highlights: ['Trekking', 'Rohtang Pass', 'River Rafting'],
    bestSeason: 'May to October',
    tourType: 'Adventure',
    tourImages: [
      '/images/hp/2.jpg',
      '/images/hp/3.jpg',
      '/images/hp/4.jpg',
      '/images/hp/5.jpg',
    ],
    places: 'Manali',
    overview: 'A thrilling adventure tour for nature and adrenaline lovers.',
    destinationId: 4,
  },
  {
    id: 7,
    title: 'Ladakh Adventure Tour',
    image: '/images/ladakh/1.jpg',
    description:
      'Explore the rugged terrains and stunning landscapes of Ladakh, including the majestic Pangong Lake, Khardung La, and Leh Palace.',
    highlights: ['Pangong Lake', 'Khardung La', 'Leh Palace'],
    bestSeason: 'June to September',
    tourType: 'Adventure & Nature',
    tourImages: [
      '/images/ladakh/2.jpg',
      '/images/ladakh/3.jpg',
      '/images/ladakh/4.jpg',
      '/images/ladakh/5.jpg',
    ],
    places: 'Leh, Pangong Lake, Nubra Valley',
    destinationId: 6,
    overview:
      'Journey through the serene landscapes and high-altitude adventures in Ladakh. Experience the mesmerizing beauty of Pangong Lake and Nubra Valley, along with Leh’s historic monasteries.',
  },
  {
    id: 8,
    title: 'Leh Cultural Tour',
    image: '/images/ladakh/2.jpg',
    description:
      'Immerse yourself in the culture and traditions of Ladakh, visiting ancient monasteries, palaces, and experiencing the unique lifestyle of the locals.',
    highlights: ['Hemis Monastery', 'Thiksey Monastery', 'Leh Palace'],
    bestSeason: 'June to September',
    tourType: 'Cultural & Historical',
    tourImages: [
      '/images/ladakh/1.jpg',
      '/images/ladakh/3.jpg',
      '/images/ladakh/4.jpg',
      '/images/ladakh/5.jpg',
    ],
    places: 'Leh, Hemis, Thiksey, Shey',
    destinationId: 6,
    overview:
      'Dive into the rich culture and history of Ladakh with visits to its famous monasteries and palaces, including Hemis Monastery and Thiksey Monastery. A perfect blend of spiritual serenity and historical exploration.',
  },

  // Tamil Nadu Tours
  {
    id: 9,
    title: 'Tamil Nadu Temple Tour',
    image: '/images/tn/1.jpg',
    description:
      "Visit the grand temples of Tamil Nadu, including the iconic Meenakshi Temple and Brihadeeswarar Temple, and explore the state's rich cultural and spiritual heritage.",
    highlights: ['Meenakshi Temple', 'Brihadeeswarar Temple', 'Kanchipuram'],
    bestSeason: 'November to March',
    tourType: 'Cultural & Religious',
    tourImages: [
      '/images/tn/2.jpg',
      '/images/tn/3.jpg',
      '/images/tn/4.jpg',
      '/images/tn/5.jpg',
    ],
    places: 'Madurai, Thanjavur, Kanchipuram',
    destinationId: 5,
    overview:
      'Discover the architectural wonders and religious significance of Tamil Nadu’s temple towns. The Meenakshi Temple and Brihadeeswarar Temple are masterpieces of Dravidian architecture.',
  },
  {
    id: 10,
    title: 'Tamil Nadu Coastal Escape',
    image: '/images/tn/2.jpg',
    description:
      'Relax by the serene beaches of Tamil Nadu, from Marina Beach in Chennai to the peaceful shores of Rameswaram and Kanyakumari.',
    highlights: ['Marina Beach', 'Rameswaram', 'Kanyakumari'],
    bestSeason: 'November to March',
    tourType: 'Coastal & Leisure',
    tourImages: [
      '/images/tn/1.jpg',
      '/images/tn/3.jpg',
      '/images/tn/4.jpg',
      '/images/tn/5.jpg',
    ],
    places: 'Chennai, Rameswaram, Kanyakumari',
    destinationId: 5,
    overview:
      "Unwind along Tamil Nadu's stunning coastline, exploring its famous beaches and scenic coastal towns like Rameswaram and Kanyakumari, with views of the Bay of Bengal and Arabian Sea.",
  },
];

export const tours = [
  {
    id: 1,
    title: 'Golden Triangle Tour',
    image: '/tour11.jpg',
    description:
      'Explore the iconic cities of Delhi, Agra, and Jaipur on this classic Indian journey.',
    highlights: ['Taj Mahal', 'Amber Fort', 'Qutub Minar'],
    bestSeason: 'October to March',
    tourType: 'Cultural & Historical',
    tourImages: ['/tour11.jpg', '/tour12.jpg', '/tour13.jpg', '/tour14.jpg'],
    places: 'Delhi, Agra, Jaipur',
    overview:
      'Embark on a journey through India Golden Triangle exploring the iconic cities of Delhi, Agra, and Jaipur. Experience the rich history, stunning architecture, and vibrant culture of North India. From the bustling streets of Delhi to the majestic Taj Mahal in Agra and the pink city of Jaipur, this tour offers an unforgettable blend of experiences.',
  },
  {
    id: 2,
    title: 'Kerala Backwaters Cruise',
    image: '/tour12.jpg',
    description:
      "Experience the serene beauty of Kerala's backwaters on a traditional houseboat.",
    highlights: ['Alleppey', 'Kumarakom', 'Kochi'],
    bestSeason: 'September to March',
    tourType: 'Nature & Relaxation',
  },
  {
    id: 3,
    title: 'Rajasthan Heritage Tour',
    image: '/tour13.jpg',
    description:
      "Discover the royal heritage and colorful culture of Rajasthan's majestic cities.",
    highlights: ['Udaipur', 'Jodhpur', 'Jaisalmer'],
    bestSeason: 'October to March',
    tourType: 'Heritage & Culture',
  },
  {
    id: 4,
    title: 'Himalayan Adventure',
    image: '/tour14.jpg',
    description:
      'Trek through the breathtaking landscapes of the Indian Himalayas in Ladakh.',
    highlights: ['Leh Palace', 'Pangong Lake', 'Nubra Valley'],
    bestSeason: 'June to September',
    tourType: 'Adventure & Trekking',
  },
  {
    id: 5,
    title: 'Goa Beach Retreat',
    image: '/tour1.jpg',
    description:
      'Relax on the beautiful beaches of Goa and explore its Portuguese heritage.',
    highlights: ['Calangute Beach', 'Old Goa Churches', 'Spice Plantations'],
    bestSeason: 'November to February',
    tourType: 'Beach & Heritage',
  },
  {
    id: 6,
    title: 'Spiritual Journey to Varanasi',
    image: '/tour2.jpg',
    description:
      'Experience the spiritual heart of India in the holy city of Varanasi on the Ganges.',
    highlights: ['Ganga Aarti', 'Sarnath', 'Morning Boat Ride'],
    bestSeason: 'October to March',
    tourType: 'Spiritual & Cultural',
  },
];

export const services = [
  {
    icon: 'compass',
    title: 'Custom India Tours',
    description:
      'Tailored itineraries designed to match your preferences, budget, and travel style across the diverse landscapes of India.',
  },
  {
    icon: 'airplane',
    title: 'Domestic Flight Booking',
    description:
      'Access to the best deals on flights within India. We handle all your air travel needs, ensuring comfortable and convenient journeys.',
  },
  {
    icon: 'geo-alt',
    title: 'Accommodation Selection',
    description:
      'Curated selection of hotels, resorts, and unique stays across India. From luxury palaces to eco-friendly retreats and local homestays.',
  },
  {
    icon: 'people',
    title: 'Group Travel Coordination',
    description:
      'Specialized planning for group trips, family reunions, and corporate retreats across various Indian destinations.',
  },
  {
    icon: 'headset',
    title: '24/7 On-Trip Support',
    description:
      'Round-the-clock assistance throughout your journey in India. Our team is always available to help with any situation.',
  },
  {
    icon: 'shield-check',
    title: 'Travel Insurance',
    description:
      'Comprehensive travel insurance options to protect your trip within India, covering cancellations, medical emergencies, and more.',
  },
];

export const tracks = [
  {
    id: 1,
    title: 'Sacred India Pilgrimage',
    description:
      "Embark on a transformative journey through India's most revered spiritual sites",
    image: '/tour11.jpg',
    duration: '12 days',
    groupSize: 'Max 16 people',
    destinations: ['Varanasi', 'Rishikesh', 'Amritsar', 'Bodhgaya'],
    highlights: [
      'Ganga Aarti ceremony',
      'Yoga in Rishikesh',
      'Golden Temple visit',
      'Mahabodhi Temple',
    ],
  },
  {
    id: 2,
    title: 'Himalayan Meditation Retreat',
    description:
      'Find inner peace and tranquility in the serene Himalayan mountains',
    image: '/tour12.jpg',
    duration: '10 days',
    groupSize: 'Max 12 people',
    destinations: ['Dharamshala', 'McLeod Ganj', 'Manali'],
    highlights: [
      'Tibetan Buddhism',
      'Meditation sessions',
      'Dalai Lama Temple',
      'Nature walks',
    ],
  },
  {
    id: 3,
    title: 'South India Temple Trail',
    description:
      "Discover the rich spiritual heritage of South India's magnificent temples",
    image: '/tour13.jpg',
    duration: '14 days',
    groupSize: 'Max 14 people',
    destinations: ['Madurai', 'Thanjavur', 'Mahabalipuram', 'Tirupati'],
    highlights: [
      'Meenakshi Temple',
      'Brihadeeswara Temple',
      'Shore Temple',
      'Tirupati Balaji',
    ],
  },
  {
    id: 4,
    title: 'Ayurvedic Wellness Journey',
    description:
      'Rejuvenate your body and soul with ancient Ayurvedic practices in Kerala',
    image: '/tour14.jpg',
    duration: '8 days',
    groupSize: 'Max 10 people',
    destinations: ['Kovalam', 'Varkala', 'Alleppey'],
    highlights: [
      'Ayurvedic treatments',
      'Yoga sessions',
      'Backwater cruise',
      'Herbal gardens',
    ],
  },
  {
    id: 5,
    title: 'Buddhist Circuit Expedition',
    description:
      'Follow in the footsteps of Buddha on this enlightening spiritual journey',
    image: '/tour11.jpg',
    duration: '11 days',
    groupSize: 'Max 15 people',
    destinations: ['Lumbini', 'Bodhgaya', 'Sarnath', 'Kushinagar'],
    highlights: [
      "Buddha's birthplace",
      'Bodhi Tree',
      'Dhamek Stupa',
      'Mahaparinirvana Temple',
    ],
  },
  {
    id: 6,
    title: 'Spiritual Rajasthan',
    description:
      'Experience the mystical and spiritual side of colorful Rajasthan',
    image: '/tour11.jpg',
    duration: '9 days',
    groupSize: 'Max 12 people',
    destinations: ['Pushkar', 'Ajmer', 'Ranakpur', 'Mount Abu'],
    highlights: [
      'Brahma Temple',
      'Ajmer Sharif Dargah',
      'Jain Temples',
      'Sunset Point meditation',
    ],
  },
];

export const tours3 = [
  {
    id: 1,
    title: 'Golden Triangle Tour',
    description:
      "Embark on a journey through India's Golden Triangle, exploring the iconic cities of Delhi, Agra, and Jaipur. Experience the rich history, stunning architecture, and vibrant culture of North India.",
    images: ['/tour11.jpg', '/tour12.jpg', '/tour13.jpg', '/tour14.jpg'],
    duration: '6 Days',
    groupSize: 'Max 15 people',
    destinations: ['Delhi', 'Agra', 'Jaipur'],
    overview:
      'Experience the rich history, stunning architecture, and vibrant culture of North India. From the bustling streets of Delhi to the majestic Taj Mahal in Agra and the pink city of Jaipur, this tour offers an unforgettable blend of experiences.',
    features: [
      { icon: 'Plane', text: 'Airport transfers included' },
      { icon: 'Hotel', text: '4-5 star accommodations' },
      { icon: 'Utensils', text: 'Daily breakfast included' },
      { icon: 'Car', text: 'Private air-conditioned vehicle' },
      { icon: 'Camera', text: 'Guided sightseeing tours' },
      { icon: 'Mountain', text: 'Monument entrance fees included' },
    ],
    itinerary: [
      {
        day: 'Day 1-2: Delhi',
        activities: [
          "Explore Old Delhi's Chandni Chowk and Jama Masjid",
          "Visit Humayun's Tomb and Qutub Minar",
          'Drive past India Gate and Presidential Palace',
          'Experience the modern Akshardham Temple',
        ],
      },
      {
        day: 'Day 3-4: Agra',
        activities: [
          'Witness the breathtaking Taj Mahal at sunrise',
          'Explore the impressive Agra Fort',
          'Visit the abandoned city of Fatehpur Sikri',
          'Optional: Mohabbat the Taj show in the evening',
        ],
      },
      {
        day: 'Day 5-6: Jaipur',
        activities: [
          'Ascend to the magnificent Amber Fort',
          'Explore the City Palace and Jantar Mantar observatory',
          'Photo stop at the iconic Hawa Mahal',
          'Optional: Elephant ride or hot air balloon experience',
        ],
      },
    ],
    importantInfo: [
      'Valid passport and visa required for entry to India',
      'Comfortable walking shoes recommended',
      'Dress modestly when visiting religious sites',
      'Travel insurance recommended',
      'Local currency (INR) or major credit cards accepted',
    ],
  },
  // Add more tour objects here...
];

export const blogs = [
  {
    id: 1,
    title: '10 Hidden Gems in Rajasthan',
    content: `
      <p>Rajasthan, the Land of Kings, is renowned for its majestic forts and opulent palaces. However, beyond these well-known attractions lie hidden treasures waiting to be discovered. In this post, we'll explore ten hidden gems that will take your breath away and provide unforgettable experiences off the beaten path.</p>
  
      <h2>1. Bhangarh Fort, Alwar</h2>
      <p>Known as one of the most haunted places in India, Bhangarh Fort offers a blend of history and mystery. The ruins of this 17th-century fort tell tales of curses and paranormal activities, making it a thrilling destination for adventure seekers.</p>
  
      <h2>2. Chand Baori, Abhaneri</h2>
      <p>This ancient stepwell is an architectural marvel with its intricate geometric patterns. Dating back to the 8th century, Chand Baori is one of the largest and deepest stepwells in India, offering a unique glimpse into the region's water conservation heritage.</p>
  
      <h2>3. Kumbhalgarh Wildlife Sanctuary</h2>
      <p>Home to the second-longest wall in the world after the Great Wall of China, this sanctuary offers not just historical significance but also rich biodiversity. Spot leopards, wolves, and various bird species while exploring the rugged Aravalli hills.</p>
  
      <h2>4. Ranakpur Jain Temple</h2>
      <p>Hidden in a remote valley of the Aravalli Range, this 15th-century temple is a masterpiece of intricate marble carvings. With 1,444 uniquely carved pillars, it's a testament to the region's rich architectural heritage.</p>
  
      <h2>5. Barmer</h2>
      <p>This lesser-known desert town is a hub of traditional Rajasthani crafts. Explore its colorful bazaars filled with intricate woodcarvings, vibrant textiles, and unique pottery, offering an authentic glimpse into rural Rajasthan.</p>
  
      <p>These hidden gems in Rajasthan offer unique experiences that go beyond the typical tourist trail. By venturing off the beaten path, you'll discover the true essence of this diverse and captivating state. Remember to travel responsibly and respect local cultures and environments to help preserve these beautiful destinations for future generations.</p>
    `,
    excerpt:
      'Discover lesser-known destinations in the Land of Kings that will take your breath away and provide unforgettable experiences off the beaten path.',
    image: '/tour11.jpg',
    author: 'Priya Sharma',
    date: 'May 15, 2023',
    category: 'Destinations',
    readTime: '10 min read',
    tags: ['Rajasthan', 'Hidden Gems', 'Adventure', 'Culture', 'History'],
  },
];
