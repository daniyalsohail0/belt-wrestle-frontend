interface Blogs {
  id: string;
  title: string;
  description: string;
  blogImage: string;
  link: string;
}

const blogData: Blogs[] = [
  {
    id: "1a",
    title: "Exploring the World of Wrestling Belts",
    description:
      "Discover the intricate details and craftsmanship behind the world's most iconic wrestling belts.",
    blogImage: require("../images/blog-image.jpg"),
    link: "/blog/exploring-world-wrestling-belts",
  },
  {
    id: "2a",
    title: "Choosing the Right Wrestling Belt for You",
    description:
      "A guide to selecting the perfect wrestling belt that matches your style and personality.",
    blogImage: require("../images/blog-image.jpg"),
    link: "/blog/choosing-right-wrestling-belt",
  },
  {
    id: "3a",
    title: "Behind the Scenes: Crafting Championship Belts",
    description:
      "Take a sneak peek into the manufacturing process of championship wrestling belts.",
    blogImage: require("../images/blog-image.jpg"),
    link: "/blog/behind-scenes-crafting-championship-belts",
  },
  {
    id: "4a",
    title: "The Impact of Wrestling Belts on Athletes",
    description:
      "Explore how wrestling belts play a crucial role in motivating and inspiring athletes.",
    blogImage: require("../images/blog-image.jpg"),
    link: "/blog/impact-wrestling-belts-on-athletes",
  },
];

export default blogData;
