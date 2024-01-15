interface Reviews {
  imageUrl: string;
  name: string;
  date: Date;
  review: string;
}

const reviews: Reviews[] = [
  {
    imageUrl: "https://cdn-icons-png.flaticon.com/512/219/219969.png",
    name: "John Doe",
    date: new Date("2022-01-10T14:30:00Z"),
    review:
      "Ordered a custom-made championship belt from Belt Wrestle and I couldn't be happier! The craftsmanship is top-notch, and the attention to detail is amazing. Highly recommended for any wrestling fan!",
  },
  {
    imageUrl: "https://cdn-icons-png.flaticon.com/512/219/219969.png",
    name: "Jane Smith",
    date: new Date("2022-02-15T10:45:00Z"),
    review:
      "The custom championship belt I received from Belt Wrestle exceeded all my expectations. The design, quality, and overall aesthetic are fantastic. I feel like a true champion!",
  },
  {
    imageUrl: "https://cdn-icons-png.flaticon.com/512/219/219969.png",
    name: "Bob Johnson",
    date: new Date("2022-03-20T18:15:00Z"),
    review:
      "Absolutely thrilled with my custom championship belt purchase. The team at Belt Wrestle went above and beyond to bring my vision to life. The belt is a true work of art.",
  },
  {
    imageUrl: "https://cdn-icons-png.flaticon.com/512/219/219969.png",
    name: "Alice Thompson",
    date: new Date("2022-04-25T12:00:00Z"),
    review:
      "As a wrestling enthusiast, I've always dreamed of owning a custom championship belt. Belt Wrestle made that dream a reality. The belt is stunning, and I proudly showcase it in my collection.",
  },
  {
    imageUrl: "https://cdn-icons-png.flaticon.com/512/219/219969.png",
    name: "David Rodriguez",
    date: new Date("2022-05-18T15:30:00Z"),
    review:
      "The craftsmanship and attention to detail in the custom-made championship belt from Belt Wrestle are unparalleled. It's a true testament to their dedication to quality. Highly satisfied customer!",
  },
  {
    imageUrl: "https://cdn-icons-png.flaticon.com/512/219/219969.png",
    name: "Sarah Turner",
    date: new Date("2022-06-12T20:45:00Z"),
    review:
      "Ordered a custom championship belt for my wrestling league, and Belt Wrestle delivered beyond expectations. The customization options were vast, and the final product was a crowd-pleaser.",
  },
];

export default reviews;
