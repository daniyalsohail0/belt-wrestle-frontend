interface Blog {
  id: number;
  title: string;
  description: string;
  blogUrl: string;
  imageUrl: string;
}

const data: Blog[] = [
  {
    id: 1,
    title: "The Best Custom Championship Belt in the US",
    description:
      "If you are looking for the perfect championship belt, look no further, we have got you covered.",
    blogUrl: `/blogs/1`,
    imageUrl: require("../images/image_0cc5a9d5-bbb3-4456-a7ba-a7b08a30f464_1024x1024.webp"),
  },
  {
    id: 2,
    title: "Unveiling the Latest Wrestling Trends",
    description:
      "Explore the newest trends in the world of wrestling and stay ahead in the game.",
    blogUrl: `/blogs/2`,
    imageUrl: require("../images/image_0cc5a9d5-bbb3-4456-a7ba-a7b08a30f464_1024x1024.webp"),
  },
  {
    id: 3,
    title: "Behind the Scenes: Crafting Championship Excellence",
    description:
      "Step into our workshop and discover the meticulous craftsmanship behind our championship belts.",
    blogUrl: `/blogs/3`,
    imageUrl: require("../images/image_0cc5a9d5-bbb3-4456-a7ba-a7b08a30f464_1024x1024.webp"),
  },
  {
    id: 4,
    title: "Wrestling Legends: Their Impact on the Sport",
    description:
      "Reflecting on the contributions of wrestling legends that have shaped the landscape of the sport.",
    blogUrl: `/blogs/4`,
    imageUrl: require("../images/image_0cc5a9d5-bbb3-4456-a7ba-a7b08a30f464_1024x1024.webp"),
  },
];

export default data;
