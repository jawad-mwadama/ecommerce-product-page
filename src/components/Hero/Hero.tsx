// const images = [
//   {
//     image1: "../../assets/images/image-product-1.jpg",
//     thumbnail: "../../assets/images/image-product-1-thumbnail.jpg",
//     id: 1,
//   },
//   {
//     image1: "../../assets/images/image-product-2.jpg",
//     thumbnail: "../../assets/images/image-product-2-thumbnail.jpg",
//     id: 2,
//   },
//   {
//     image1: "../../assets/images/image-product-3.jpg",
//     thumbnail: "../../assets/images/image-product-3-thumbnail.jpg",
//     id: 3,
//   },
//   {
//     image1: "../../assets/images/image-product-4.jpg",
//     thumbnail: "../../assets/images/image-product-4-thumbnail.jpg",
//     id: 4,
//   },
// ];

import image1 from "../../assets/images/image-product-1.jpg";

import HeroText from "./HeroText";
function Hero() {
  return (
    <div className="mx-auto flex max-w-5xl items-center justify-center border border-blue-600 pt-16">
      <div className="flex justify-between gap-18 px-16">
        <img src={image1} className="h-96 rounded-xl" alt="image1" />
        <HeroText />
      </div>
    </div>
  );
}

export default Hero;
