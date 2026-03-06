import type { ClubBenefit, NavLink, RoomType, ServiceCard } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const ABOUT_CONTENT = {
  title: "Welcome to Mountain View Hotel",
  desc: "Mountain View Hotel offers a perfect blend of luxury, comfort, and breathtaking scenery. Located in a peaceful mountain destination, our hotel provides premium rooms, world-class dining, and relaxing spa experiences for travelers seeking both adventure and relaxation.",
  images: [
    "/images/hotel/about-1.jpg",
    "/images/hotel/about-2.jpg",
    "/images/hotel/about-3.jpg",
  ],
};

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
  address: "123 Alpine Road, Mountain Valley",
  phone: "+1 234 567 890",
  email: "info@mountainviewhotel.com",
  mapImage: "/images/hotel/map.jpg",
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
  "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
  "https://images.unsplash.com/photo-1617575521317-d2974f3b56d2?w=800&q=80",
  "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&q=80",
  "https://images.unsplash.com/photo-1502920514313-52581002a659?w=800&q=80",
];

export const GASTRO_IMGS: string[] = [
  "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80",
  "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80",
  "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=800&q=80",
];

export const ROOM_TYPES: RoomType[] = [
  {
    name: "Eagle Suite",
    img: "/images/rooms/1.jpg",
  },
  {
    name: "Himalayan Deluxe",
    img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80",
  },
  {
    name: "Valley View Double",
    img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=80",
  },
  {
    name: "Tarap Twin Room",
    img: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=600&q=80",
  },
  {
    name: "Dolpa Stone Cottage",
    img: "https://images.unsplash.com/photo-1506974210756-8e1b8985d348?w=600&q=80",
  },
  {
    name: "Trekker's Lodge",
    img: "/images/rooms/1.jpg",
  },
  {
    name: "Family Mountain Room",
    img: "/images/rooms/1.jpg",
  },
];

export const SERVICES: ServiceCard[] = [
  {
    title: "High-Altitude Trekking",
    desc: "Expert-guided treks through the Dho Tarap valley, ancient trade routes, and the pristine wilderness of Upper Dolpa.",
    img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80",
    href: "#services",
  },
  {
    title: "Cultural Immersion",
    desc: "Explore centuries-old Bon monasteries, sacred sky-burial sites, and the living Newar traditions of the Tarap valley.",
    img: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=600&q=80",
    href: "#services",
  },
  {
    title: "Mountain Wellness",
    desc: "Himalayan hot-stone therapy, herbal steam baths, and altitude yoga with panoramic views of the Dhaulagiri massif.",
    img: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600&q=80",
    href: "#spa",
  },
  {
    title: "Snow Leopard Safaris",
    desc: "Guided wildlife expeditions in one of the last habitats of the snow leopard, Himalayan wolf, and blue sheep.",
    img: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=600&q=80",
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
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
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
