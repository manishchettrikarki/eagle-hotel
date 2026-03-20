import { IconFacebook, IconInstagram } from "@/icons";
import type { ClubBenefit, NavLink, RoomType, ServiceCard } from "@/types";

//
export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const ABOUT_CONTENT = {
  title: "Welcome to Hotel Golden Eagle",
  desc: "Hotel Golden Eagle offers a perfect blend of comfort and breathtaking scenery. Located in a peaceful mountain destination, our hotel provides magical rooms, authentic mountain dining, and peaceful meditation experiences for travelers seeking both adventure and relaxation.",
  images: [
    "/images/hotel/about-1.jpg",
    "/images/hotel/about-2.jpg",
    "/images/hotel/about-3.jpg",
  ],
};

export const HOTEL_NAME = {
  full: "Hotel Golden Eagle",
  first: "Hotel",
  second: "Golden",
  third: "Eagle",
  heroFirst: "In the heart",
  heroSecond: "of Upper Dolpo",
};

export const HOMEPAGE_GALLERY = {
  shortTitle: "A glimpse of Hotel Golden Eagle",
  title: "Experience the Magic of Hotel Golden Eagle",
  desc: "Discover the breathtaking beauty and unparalleled luxury of Hotel Golden Eagle through our curated gallery. From stunning mountain vistas to our elegant interiors, each image captures the essence of your unforgettable stay.",
};

export const HOMEPAGE_ROOMS = {
  subtitle: "Rest at altitude",
  title: "Rooms & Suites",
  desc: "Each room is crafted from local stone and timber, warmed by traditional hearths and designed to frame the raw grandeur of the Tarap valley and the Dhaulagiri peaks beyond.",
};

export const ABOUTPAGE_VALUES = [
  {
    icon: "✦",
    title: "Authentic Dolpo Hospitality",
    body: "Guests are welcomed with the warmth of traditional Dolpo culture. Our lodge reflects the lifestyle of the high Himalayas, where hospitality is rooted in community and respect for visitors.",
  },
  {
    icon: "◈",
    title: "Community First",
    body: "Our team is locally based, supporting families and farmers from villages like Dho Tarap. We prioritize local food, local guides, and community development through tourism.",
  },
  {
    icon: "◇",
    title: "Protecting the Wilderness",
    body: "Located near Shey Phoksundo National Park, we follow responsible tourism and Leave No Trace principles to protect the fragile ecosystems of Upper Dolpa.",
  },
  {
    icon: "○",
    title: "Experienced Mountain Guides",
    body: "Our guides are from the Dolpa region and know the ancient trails, high passes, and cultural landmarks of Upper Dolpa better than anyone.",
  },
];

export const ABOUTPAGE_TEAM = [
  {
    name: "Pemba Sherpa",
    role: "Founder & Head Guide",
    bio: "Born in Dho Tarap, Pemba has guided trekkers through Upper Dolpa for over 25 years. His knowledge of the land, language and culture is unmatched.",
    img: "/images/userPlaceholder.jpg",
  },
  {
    name: "Sita Budha",
    role: "Lodge Manager",
    bio: "A Dolpa native and trained hospitality professional, Sita ensures every guest experiences the warmth of Tarap valley's legendary generosity.",
    img: "/images/userPlaceholder.jpg",
  },
  {
    name: "Dawa Lama",
    role: "Head Chef",
    bio: "Dawa transforms the seasonal harvest of the Tarap valley into extraordinary meals — from yak-butter dumplings to high-altitude herb infusions.",
    img: "/images/userPlaceholder.jpg",
  },
  {
    name: "Tenzin Gurung",
    role: "Expedition Lead",
    bio: "With 15 years guiding remote Himalayan expeditions, Tenzin plans every route with meticulous care for safety, ecology and cultural respect.",
    img: "/images/userPlaceholder.jpg",
  },
];

export const BLOG_POSTS = [
  {
    title: "Top 5 Reasons to Stay in a Mountain Hotel",
    desc: "Discover why mountain hotels offer a unique experience with stunning views, fresh air, and peaceful surroundings.",
    img: "/images/hotel/blog-1.jpg",
    date: "March 2026",
  },
  {
    title: "Luxury Spa Experiences in the Mountains",
    desc: "Relax your body and mind with exclusive spa treatments surrounded by nature.",
    img: "/images/hotel/blog-2.jpg",
    date: "February 2026",
  },
  {
    title: "Winter Travel Tips for Mountain Destinations",
    desc: "Planning a winter getaway? Here are the best tips to enjoy your mountain trip.",
    img: "/images/hotel/blog-3.jpg",
    date: "January 2026",
  },
];

export const CONTACT_INFO = {
  address: "Tarap Valley, Dho Tarap Village",
  city: "Upper Dolpa District, Karnali Province, Nepal",
  height: "3,950m above sea level",
  phone: "+977 9745216366",
  email: "hotelgoldeneagle1@gmail.com",
  mapImage: "/images/hotel/map.jpg",
  location: "Dho Tarap · Upper Dolpa · Nepal",
};

export const HOTEL_GALLERY = [
  "/images/hotel/gallery-1.jpg",
  "/images/hotel/gallery-2.jpg",
  "/images/hotel/gallery-3.jpg",
  "/images/hotel/gallery-4.jpg",
];

export const SPA_FEATURES: string[] = [
  "Piscina exterior",
  "Baños de vapor Wellpro",
  "Sauna",
  "Tratamientos personalizados",
];

export const CLUB_BENEFITS: ClubBenefit[] = [
  { label: "Mejor precio garantizado" },
  { label: "Descuentos en tus reservas" },
  { label: "Acceso a ofertas exclusivas" },
  { label: "Servicios prioritarios" },
];

export const LOCATION_STATS = [
  { value: "50m", label: "from the nearest remoteness point" },
  { value: "120km", label: "from the center of Juphal" },
  { value: "3,950m", label: "above sea level" },
];

export const GALLERY_IMGS: string[] = [
  "/images/one.jpeg",
  "/images/six.jpg",
  "/images/three.jpg",
  "/images/six.jpg",
  "/images/five.jpg",
];

export const GASTRO_IMGS: string[] = [
  "/images/food-1.jpg",
  "/images/food-2.jpg",
  "/images/food-4.jpg",
];

export const VENUES = [
  "The Tarap Table — Nepali & Tibetan highland cuisine",
  "Eagle Hearth — Open-fire trekker's dining hall",
  "Butter Tea Lounge — Traditional Bon hospitality",
];

export const ROOM_TYPES: RoomType[] = [
  {
    name: "Dining Hall",
    img: "/images/dinning.jpg",
  },
  {
    name: "Camping Area",
    img: "/images/camping.jpg",
  },
  // {
  //   name: "Valley View Double",
  //   img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=80",
  // },
  // {
  //   name: "Tarap Twin Room",
  //   img: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=600&q=80",
  // },
  // {
  //   name: "Dolpa Stone Cottage",
  //   img: "https://images.unsplash.com/photo-1506974210756-8e1b8985d348?w=600&q=80",
  // },
  // {
  //   name: "Trekker's Lodge",
  //   img: "/images/rooms/1.jpg",
  // },
  {
    name: "Room",
    img: "/images/rooms/room1.png",
  },
];

export const SERVICES: ServiceCard[] = [
  {
    title: "Guided Upper Dolpo Treks",
    desc: "Experienced local guides lead treks through Shey Phoksundo National Park, Dho Tarap valley, and ancient Himalayan trade routes.",
    img: "/images/village.jpg",
    href: "#services",
  },
  {
    title: "Monastery & Cultural Tours",
    desc: "Visit ancient Bon and Buddhist monasteries such as Shey Gompa and explore traditional Tibetan-influenced villages of Upper Dolpa.",
    img: "/images/upper-dolpa.png",
    href: "#services",
  },
  {
    title: "Local Food & Village Homestay",
    desc: "Experience authentic Dolpo life by staying with local families and enjoying traditional meals like dal bhat, Tibetan bread, and butter tea.",
    img: "/images/homestay.jpg",
    href: "#services",
  },
  {
    title: "Wildlife & Nature Exploration",
    desc: "Explore the wilderness of Shey Phoksundo National Park, home to rare wildlife such as snow leopards, blue sheep, and Himalayan wolves.",
    img: "/images/wildlife.jpg",
    href: "#services",
  },
];

// Footer links
export const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Cookie Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Cancellation Policy", href: "#" },
  { label: "Booking Conditions", href: "#" },
  { label: "Cookie Settings", href: "#" },
];

export const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "#",
    icon: <IconFacebook />,
  },
  {
    label: "Instagram",
    href: "#",
    icon: <IconInstagram />,
  },
];

export const NAV_COLS = [
  {
    heading: "The Lodge",
    links: [
      { label: "Rooms & Suites", href: "#rooms" },
      { label: "Dining", href: "#gastronomy" },
      { label: "Mountain Wellness", href: "#spa" },
      { label: "Gallery", href: "#gallery" },
    ],
  },
  {
    heading: "Experiences",
    links: [
      { label: "Trekking & Expeditions", href: "#services" },
      { label: "Cultural Immersion", href: "#services" },
      { label: "Wildlife Safaris", href: "#services" },
      { label: "Seasonal Offers", href: "#promotions" },
    ],
  },
  {
    heading: "Plan Your Visit",
    links: [
      { label: "How to Reach Us", href: "#location" },
      { label: "Permits & Visas", href: "#location" },
      { label: "Contact", href: "#contact" },
      { label: "Trekker's Circle", href: "#club" },
    ],
  },
];
