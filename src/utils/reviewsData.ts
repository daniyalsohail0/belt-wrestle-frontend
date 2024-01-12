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
      "Had a great experience with Belt Wrestle. The product quality is excellent.",
  },
  {
    imageUrl: "https://cdn-icons-png.flaticon.com/512/219/219969.png",
    name: "Jane Smith",
    date: new Date("2022-02-15T10:45:00Z"),
    review: "Belt Wrestle exceeded my expectations. Highly recommended!",
  },
  {
    imageUrl: "https://cdn-icons-png.flaticon.com/512/219/219969.png",
    name: "Bob Johnson",
    date: new Date("2022-03-20T18:15:00Z"),
    review: "Fantastic service and quality. Will definitely purchase again.",
  },
];

export default reviews;
