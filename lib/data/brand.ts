// lib/data/brand.ts

import { Truck, MessageCircle, Star, Sparkles, Tag, CheckCircle, ShieldCheck } from 'lucide-react';

export const brand = {
  name: "Setrix Trends",
  url: 'https://setrixtrends.vercel.app',
  shortName: "Setrix Trends",
  logo: "/brand-logo.jpeg",
  tagline: "YOUR DRIP YOUR CONFIDENCE 🇰🇪",
  description:
    "Your ultimate plug for premium sneakers and fashion wear in Kenya. Client satisfaction is our commitment. Call or WhatsApp us to elevate your drip today.",
  location: "Nairobi, Kenya",
  seo: {
    title: "Setrix Trends | Premium Sneakers & Fashion Wear in Kenya",
    description: "Shop the best sneakers and fashion wear at Setrix Trends. Your drip is your confidence. Client satisfaction is our ultimate commitment.",
    ogImage: '/og-preview.png',
    favicon: '/favicon.ico',
    appleIcon: '/apple-touch-icon.png',
  },

  hero: {
    badge: "17.3K Likes on TikTok ⚡",
    headlineTop: "YOUR DRIP YOUR ",
    headlineHighlight: "CONFIDENCE",
    backgroundImage: "/1.png",
    ctaPrimary: "Order on WhatsApp",
    ctaSecondary: "Shop Collection",
  },

  sections: {
    featured: {
      title: "Featured Drip",
      subtitle: "Find your perfect pair. Browse our curated selection of quality sneakers and trending fashion wear."
    },
    flashDeals: {
      badge: "Live Offers",
      title: "Flash Deals",
      subtitle: "Cop your favorite shoes at unbeatable prices before stocks run out.",
      cta: "View All Deals"
    },
    newArrivals: {
      badge: "Just Dropped",
      title: "Latest Arrivals",
      subtitle: "Fresh pairs added directly from our TikTok feed — step out in the latest trends.",
      cta: "View All Arrivals",
      trendingBadgePrefix: "Trending in"
    },
    bestSellers: {
      badge: "Customer Favorites",
      title: "BEST SELLERS",
      subtitle: "Highly reviewed and loved by our fashion community across Kenya.",
      cta: "View All Favorites"
    },
    whyUs: {
      badge: "Trust & Reliability",
      titleTop: "WHY SHOP WITH",
      subtitle: "We offer high-quality fashion wear, guaranteed client satisfaction, and a seamless conversational checkout experience."
    },
    reviews: {
      badge: "Real Feedback from TikTok & WhatsApp",
      titleTop: "WHAT OUR",
      titleBottom: "CUSTOMERS SAY"
    },
    whatsappCta: {
      badge: "We Are Active",
      titleTop: "LOCK IN",
      titleBottom: "YOUR DRIP",
      subtitle: "Chat with us directly on WhatsApp to secure your size and confirm your delivery details."
    }
  },

  whatsappNumber: "254796370325",
  whatsappMessage: {
    general:
      "Hello Setrix Trends,\n\nI would like to place an order.\n\nItem: \n\nSize:\n\nDelivery:\n\nPlease confirm availability. Thank you",
  },
  socialLinks: {
    instagram: "https://instagram.com/setrix_trends.ke",
    facebook: "https://facebook.com/setrix_trends",
    tiktok: "https://www.tiktok.com/@setrix_trends.ke.backup",
  },
  deliveryInfo: {
    standard: "Reliable deliveries done across Kenya. 🚚",
    Nairobi: "Fast and convenient dispatch for all customers within Nairobi.",
  },
  trustStatements: [
    "17.3K+ TikTok Likes",
    "Client Satisfaction Guaranteed ✅",
    "Premium Sneakers & Fashion",
    "Call or WhatsApp to Order",
  ],
  features: [
    {
      title: "Premium Drip",
      description: "We stock a versatile range of stylish, high-quality sneakers and fashion wear to suit your aesthetic."
    },
    {
      title: "Reliable Delivery",
      description: "No matter where you are, we ensure your fresh kicks and apparel are delivered safely."
    },
    {
      title: "Client Satisfaction",
      description: "Your confidence is our priority. We are committed to providing the best customer experience."
    },
    {
      title: "Active Support",
      description: "Reach us anytime on +254 796 370 325 for instant order processing."
    }
  ],
  whatsappTrustSignals: [
    "Replies within minutes",
    "Safe & secure checkout",
    "Fast dispatch",
    "Verified Setrix Trends Plug"
  ],
  whatsappMockChat: [
    {
      sender: "user",
      text: `Hello Setrix Trends

I'd like to order:

• Nike Shox White/Red
Size 42

Delivery: Nairobi CBD

Please confirm availability, total payable and payment method.

Thank you.`,
      time: "10:30 AM" },
    { sender: "brand",
      text: `Hello! Yes, that pair is fully available in Size 42. Client satisfaction is our commitment! ✅

We can process your order immediately and dispatch it via parcel for delivery! 🚚`,
      time: "10:32 AM"
    }
  ],
  salesCallout: "Elevate Your Drip Today! 🚚",

  featuredImages: [
    "/1000701837.png",
    "/1000701838.png",
    "/1000701839.png",
    "/1000701840.png",
    "/1000701841.png",
    "/1000701842.png",
    "/1000701843.png",
    "/1000701844.png",
    "/1000701845.png",
    "/1000701846.png",
    "/1000701847.png"
  ]
};

export const announcementMessages = [
  { text: "Client Satisfaction is Our Commitment ✅", icon: Star },
  { text: "Order via WhatsApp (+254 796 370 325)", icon: MessageCircle },
  { text: "17.3K Likes on TikTok", icon: Sparkles },
  { text: "Premium Sneakers & Fashion Wear 🔥", icon: Truck },
  { text: "Your Drip Your Confidence!", icon: Tag },
];

export const cartTrustFeatures = [
  { text: "Reliable Delivery 🚚", icon: Truck },
  { text: "Premium Fashion & Sneakers", icon: CheckCircle },
  { text: "Order via Call/WhatsApp", icon: MessageCircle },
  { text: "Client Satisfaction Guaranteed", icon: ShieldCheck },
];

export const footerQuickShopLinks = [
  { label: "Sneakers", href: "/shop?category=sneakers" },
  { label: "Fashion Wear", href: "/shop?category=fashion-wear" },
  { label: "New Arrivals", href: "/shop?category=new-arrivals" },
  { label: "Best Sellers", href: "/shop?category=best-sellers" }
];

export const footerSupportLinks = [
  { label: "How to Order", href: "/how-to-order" },
  { label: "Delivery Info", href: "/delivery" },
  { label: "Size Guide", href: "/size-guide" },
  { label: "Returns & Exchanges", href: "/returns" },
  { label: "FAQ", href: "/faq" },
];