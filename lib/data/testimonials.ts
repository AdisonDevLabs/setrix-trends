// lib/data/testimonials.ts

export interface Testimonial {
  id: string | number;
  name: string;
  location?: string;
  rating: number;
  text: string;
  product?: string;
  profile: string;
  date?: string;
  purchased?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Kelvin M. – Nairobi",
    location: "Nairobi",
    rating: 5,
    text: "The Air Jordan 4 Pure Money looks completely premium! The white leather is pristine and the metallic silver details pop exactly like the photos. Delivery within Nairobi was super fast. Highly recommend Footwear Step!",
    product: "Air Jordan 4 Pure Money",
    profile: "https://picsum.photos/seed/kelvin/150/150",
  },
  {
    id: 2,
    name: "Brian K. – Nakuru",
    location: "Nakuru",
    rating: 5,
    text: "Got the Black Leather Chelsea Boots and they are incredibly sharp. Perfect for my smart-casual office look. I was worried about countrywide delivery to Nakuru, but the parcel arrived safely the next day.",
    product: "Black Leather Chelsea Boot",
    profile: "https://picsum.photos/seed/brian/150/150",
  },
  {
    id: 3,
    name: "Victor W. – Mombasa",
    location: "Mombasa",
    rating: 5,
    text: "The ASICS Gel-Kayano 14s are absolute heat. Very comfortable and the silver cream colorway is exactly what I was looking for. Excellent communication on WhatsApp throughout the order process.",
    product: "ASICS Gel-Kayano 14 Silver Cream",
    profile: "https://picsum.photos/seed/victor/150/150",
  },
];

export const productReviews: Testimonial[] = [
  {
    id: 1,
    name: "Stacy N.",
    location: "Eldoret",
    rating: 5,
    date: "2 days ago",
    text: "The Drake NOCTA AF1s are flawless. The 'Love you forever' detail is perfectly embossed. Customer service is top-notch and the countrywide delivery is actually reliable.",
    purchased: true,
    product: "Drake NOCTA x Nike Air Force 1 'Love You Forever'",
    profile: "https://picsum.photos/seed/stacy/150/150",
  },
  {
    id: 2,
    name: "Dennis O.",
    location: "Thika",
    rating: 5,
    date: "1 week ago",
    text: "Can't go wrong with the Keen Newport Sandals for the weekends. Super durable and comfortable. Footwear Step is definitely my new go-to plug.",
    purchased: true,
    product: "Keen Newport Sandals Olive",
    profile: "https://picsum.photos/seed/dennis/150/150",
  },
];

export const reviewAvatars = [
  "https://picsum.photos/seed/user1/100/100",
  "https://picsum.photos/seed/user2/100/100",
  "https://picsum.photos/seed/user3/100/100"
];

export const reviewStats = {
  averageRating: "4.8/5 Average Rating",
  totalCustomers: "2,000+ Happy Customers"
};