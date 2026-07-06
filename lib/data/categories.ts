// lib/data/categories.ts

export interface Category {
  name: string;
  slug: string;
  label?: string;
  image: string;
  span?: string;
}

export const categories: Category[] = [
  {
    name: "SNEAKERS",
    slug: "sneakers",
    label: "Premium Kicks",
    image: "/1.png", //[cite: 4]
    span: "md:col-span-1",
  },
  {
    name: "FASHION WEAR",
    slug: "fashion-wear",
    label: "Your Drip",
    image: "/11.png", //[cite: 4]
    span: "md:col-span-1",
  },
  {
    name: "NEW ARRIVALS",
    slug: "new-arrivals",
    label: "Fresh Drops",
    image: "/2.png", //[cite: 4]
    span: "md:col-span-1",
  },
];

export const heroCategories = categories.slice(0, 5); //[cite: 4]

export const discoveryChips = [
  { id: 'trending', label: '🔥 Trending', context: 'Trending Styles' }, //[cite: 4]
  { id: 'best-sellers', label: '💯 Best Sellers', context: 'Best Sellers' }, //[cite: 4]
  { id: 'just-dropped', label: '🆕 Just Dropped', context: 'New Arrivals' }, //[cite: 4]
  { id: 'sneakers', label: '👟 Sneakers', context: 'Premium Kicks' }, //[cite: 4]
  { id: 'fashion-wear', label: '👕 Fashion Wear', context: 'Your Drip' }, //[cite: 4]
];

export const filterCategories = ['All', 'Sneakers', 'Fashion Wear', 'New Arrivals']; //[cite: 4]

export const searchSuggestions = ['Nike Shox White/Red', 'New Balance 2002R', 'Air Jordan 13 Retro Light Blue', 'Nike Air Max 97', 'Air Jordan 3 Pink']; //[cite: 4]

export const navSearchSuggestions = ['Sneakers', 'Fashion Wear', 'New Arrivals']; //[cite: 4]

export const navLinksData = [
  { label: "Shop All", href: "/shop", baseTextClass: "text-white", hoverTextClass: "hover:text-[#C6FF00]", underlineClass: "bg-[#C6FF00]", isLive: false }, //[cite: 4]
  { label: "New Drops", href: "/shop?category=new-arrivals", baseTextClass: "text-gray-400", hoverTextClass: "hover:text-white", underlineClass: "bg-white", isLive: false }, //[cite: 4]
  { label: "Trending", href: "/shop?category=trending", baseTextClass: "text-gray-400", hoverTextClass: "hover:text-white", underlineClass: "bg-white", isLive: false }, //[cite: 4]
  { label: "Offers", href: "/shop?category=offers", baseTextClass: "text-gray-400", hoverTextClass: "hover:text-[#FF0000]", underlineClass: "bg-[#FF0000]", isLive: true }, //[cite: 4]
];

export const priceRanges = ['Under 4000', '4000 - 5000', 'Over 5000']; //[cite: 4]

export const filterSizes = ['39', '40', '41', '42', '43', '44'];