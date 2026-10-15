// import { useState } from "react";
import HeroText from "./HeroText";

const galleryData = [
  {
    id: 1,
    image: "/image-product-1.jpg",
    thumbnail: "/image-product-1-thumbnail.jpg",
  },
  {
    id: 2,
    image: "/image-product-2.jpg",
    thumbnail: "/image-product-2-thumbnail.jpg",
  },
  {
    id: 3,
    image: "/image-product-3.jpg",
    thumbnail: "/image-product-3-thumbnail.jpg",
  },
  {
    id: 1,
    image: "/image-product-4.jpg",
    thumbnail: "/image-product-4-thumbnail.jpg",
  },
];

function Hero() {
  // const [image, setImage] = useState(false);
  return (
    <div className="mx-auto flex max-w-5xl items-center justify-center border border-blue-600 pt-16">
      <div className="flex justify-between gap-18 px-16">
        {galleryData.map((item) => (
          <div>
            <img
              key={item.id}
              src={item.image[0]}
              className="h-92 rounded-xl"
              alt="image1"
            />
            <div className="flex w-full gap-4 py-6">
              <img src={item.thumbnail} alt="" />
            </div>
          </div>
        ))}

        <HeroText />
      </div>
    </div>
  );
}

export default Hero;
