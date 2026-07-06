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
    text: "The Air Jordan 13 Retro looks completely premium! The white leather is pristine and the light blue details pop exactly like the photos. Delivery within Nairobi was super fast. Highly recommend Setrix Trends!", //[cite: 5]
    product: "Air Jordan 13 Retro Light Blue", //[cite: 5]
    profile: "https://picsum.photos/seed/kelvin/150/150", //[cite: 5]
  },
  {
    id: 2,
    name: "Brian K. – Nakuru",
    location: "Nakuru",
    rating: 5,
    text: "Got the New Balance 2002R and they are incredibly sharp. Perfect for my everyday drip. I was worried about countrywide delivery to Nakuru, but the parcel arrived safely the next day.", //[cite: 5]
    product: "New Balance 2002R Blue/Orange", //[cite: 5]
    profile: "https://picsum.photos/seed/brian/150/150", //[cite: 5]
  },
  {
    id: 3,
    name: "Victor W. – Mombasa",
    location: "Mombasa",
    rating: 5,
    text: "The Nike Shox White/Red are absolute heat. Very comfortable and the colorway is exactly what I was looking for. Excellent communication on WhatsApp throughout the order process.", //[cite: 5]
    product: "Nike Shox White/Red", //[cite: 5]
    profile: "https://picsum.photos/seed/victor/150/150", //[cite: 5]
  },
];

export const productReviews: Testimonial[] = [
  {
    id: 1,
    name: "Stacy N.",
    location: "Eldoret",
    rating: 5,
    date: "2 days ago", //[cite: 5]
    text: "The Venom-Inspired Air Force 1s are flawless. The custom drip detail is perfectly executed. Customer service is top-notch and the countrywide delivery is actually reliable.", //[cite: 5]
    purchased: true, //[cite: 5]
    product: "Venom-Inspired Air Force 1", //[cite: 5]
    profile: "https://picsum.photos/seed/stacy/150/150", //[cite: 5]
  },
  {
    id: 2,
    name: "Dennis O.",
    location: "Thika",
    rating: 5,
    date: "1 week ago", //[cite: 5]
    text: "Can't go wrong with the Keen Newport Sandals for the weekends. Super durable and comfortable. Setrix Trends is definitely my new go-to plug.", //[cite: 5]
    purchased: true, //[cite: 5]
    product: "Keen Newport H2 Black", //[cite: 5]
    profile: "https://picsum.photos/seed/dennis/150/150", //[cite: 5]
  },
];

export const reviewAvatars = [
  "https://picsum.photos/seed/user1/100/100", //[cite: 5]
  "https://picsum.photos/seed/user2/100/100", //[cite: 5]
  "https://picsum.photos/seed/user3/100/100" //[cite: 5]
];

export const reviewStats = {
  averageRating: "4.8/5 Average Rating", //[cite: 5]
  totalCustomers: "1,500+ Happy Customers" //[cite: 5]
};