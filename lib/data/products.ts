// lib/data/products.ts

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  rating: number;
  reviews: number;
  sizes: string[];
  colors: string[];
  isNewArrival?: boolean;
  isBestSeller?: boolean;
  isFlashDeal?: boolean;
  description: string;
}

export const products: Product[] = [
  {
    id: "p1",
    name: "Nike Shox White/Red",
    price: 4500,
    image: "/1.png",
    images: ["/1.png"],
    category: "Sneakers",
    rating: 4.8,
    reviews: 120,
    sizes: ["40", "41", "42", "43", "44"],
    colors: ["White", "Red"],
    isBestSeller: true,
    description: "Classic Nike Shox design in a clean white colorway with bold red swoosh accents and comfortable cushioning."
  },
  {
    id: "p2",
    name: "Nike Shox Blue/Black",
    price: 4500,
    image: "/2.png",
    images: ["/2.png"],
    category: "Sneakers",
    rating: 4.7,
    reviews: 95,
    sizes: ["40", "41", "42", "43", "44"],
    colors: ["Blue", "Black"],
    isNewArrival: true,
    description: "Striking Nike Shox featuring a blue marble-effect upper, durable black overlays, and reinforced lacing."
  },
  {
    id: "p3",
    name: "New Balance 2002R Blue/Orange",
    price: 4800,
    image: "/3.png",
    images: ["/3.png"],
    category: "Sneakers",
    rating: 4.9,
    reviews: 150,
    sizes: ["40", "41", "42", "43", "44"],
    colors: ["Blue", "Orange", "White"],
    isBestSeller: true,
    description: "Vibrant New Balance 2002R combining comfort and style with a bold blue and orange color palette."
  },
  {
    id: "p4",
    name: "Nike Air Force 1 Flame Edition",
    price: 3800,
    image: "/4.png",
    images: ["/4.png"],
    category: "Sneakers",
    rating: 4.8,
    reviews: 110,
    sizes: ["40", "41", "42", "43", "44"],
    colors: ["Beige", "Green"],
    isFlashDeal: true,
    description: "Limited edition Air Force 1 featuring embroidered flame designs and contrast green branding."
  },
  {
    id: "p5",
    name: "Air Jordan 13 Retro Light Blue",
    price: 5200,
    image: "/5.png",
    images: ["/5.png"],
    category: "Sneakers",
    rating: 4.9,
    reviews: 200,
    sizes: ["40", "41", "42", "43", "44"],
    colors: ["White", "Light Blue"],
    isBestSeller: true,
    description: "Elegant Air Jordan 13 Retro with a premium white leather upper and soft light blue color blocking."
  },
  {
    id: "p6",
    name: "Nike Air Max 97 Blue/Red",
    price: 4200,
    image: "/6.png",
    images: ["/6.png"],
    category: "Sneakers",
    rating: 4.7,
    reviews: 130,
    sizes: ["40", "41", "42", "43", "44"],
    colors: ["Blue", "Red"],
    isNewArrival: true,
    description: "Dynamic Air Max 97 silhouette in a bold blue and red colorway, perfect for making a statement."
  },
  {
    id: "p7",
    name: "Venom-Inspired Air Force 1",
    price: 4000,
    image: "/7.png",
    images: ["/7.png"],
    category: "Sneakers",
    rating: 4.6,
    reviews: 85,
    sizes: ["40", "41", "42", "43", "44"],
    colors: ["White", "Black"],
    description: "Creative Air Force 1 customization featuring fluid black 'venom' paint drip details over a crisp white base."
  },
  {
    id: "p8",
    name: "Nike Air Max 97 Blue/White",
    price: 4000,
    image: "/8.png",
    images: ["/8.png"],
    category: "Sneakers",
    rating: 4.7,
    reviews: 105,
    sizes: ["40", "41", "42", "43", "44"],
    colors: ["Blue", "White"],
    description: "Clean and classic Air Max 97 featuring layered blue piping and a breathable white mesh upper."
  },
  {
    id: "p9",
    name: "Air Jordan 3 Pink/White",
    price: 4800,
    image: "/9.png",
    images: ["/9.png"],
    category: "Sneakers",
    rating: 4.8,
    reviews: 90,
    sizes: ["39", "40", "41", "42", "43"],
    colors: ["Pink", "White"],
    isBestSeller: true,
    description: "Stylish Air Jordan 3 with a soft pink leather build and playful decorative flower charms."
  },
  {
    id: "p10",
    name: "Air Jordan 3 Floral Accents",
    price: 4800,
    image: "/10.png",
    images: ["/10.png"],
    category: "Sneakers",
    rating: 4.8,
    reviews: 95,
    sizes: ["39", "40", "41", "42", "43"],
    colors: ["White", "Pink"],
    description: "Unique Air Jordan 3 design incorporating delicate floral lace attachments for a customized fashion-forward look."
  },
  {
    id: "p11",
    name: "Keen Newport H2 Black",
    price: 3200,
    image: "/11.png",
    images: ["/11.png"],
    category: "Casual",
    rating: 4.7,
    reviews: 75,
    sizes: ["40", "41", "42", "43", "44"],
    colors: ["Black"],
    description: "Versatile Keen outdoor sandals in all-black, featuring a secure lacing system and protective toe design."
  }
];

export const getBestSellers = () => products.filter((p) => p.isBestSeller);
export const getNewArrivals = () => products.filter((p) => p.isNewArrival);
export const getFlashDeals = () => products.filter((p) => p.isFlashDeal);
export const getProductById = (id: string) => products.find((p) => p.id === id);

export const colorMap: Record<string, string> = {
  'Black': '#000000',
  'White': '#ffffff',
  'Red': '#ff0000',
  'Blue': '#0000ff',
  'Orange': '#ffa500',
  'Silver': '#c0c0c0',
  'Grey': '#808080',
  'Pink': '#ffc0cb',
  'Light Blue': '#add8e6'
};

export const sizeGuideData = [
  {eu: 39, uk: 6, us: 7, cm: 24.5},
  {eu: 40, uk: 6.5, us: 7.5, cm: 25.0},
  {eu: 41, uk: 7, us: 8, cm: 26.0},
  {eu: 42, uk: 8, us: 9, cm: 27.0},
  {eu: 43, uk: 9, us: 10, cm: 28.0},
  {eu: 44, uk: 10, us: 11, cm: 29.0}
];