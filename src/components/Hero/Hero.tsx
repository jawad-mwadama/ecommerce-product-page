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
import image1Thumbnail from "../../assets/images/image-product-1-thumbnail.jpg";
import image2Thumbnail from "../../assets/images/image-product-2-thumbnail.jpg";
import image3Thumbnail from "../../assets/images/image-product-3-thumbnail.jpg";
import image4Thumbnail from "../../assets/images/image-product-4-thumbnail.jpg";
import HeroText from "./HeroText";
function Hero() {
  return (
    <div className="mx-auto flex max-w-5xl items-center justify-center border border-blue-600 pt-16">
      <div className="flex justify-between gap-18 px-16">
        <div>
          <img src={image1} className="h-92 rounded-xl" alt="image1" />
          <div className="flex w-full gap-4 py-6">
            <img className="h-20 rounded-lg" src={image1Thumbnail} alt="" />
            <img className="h-20 rounded-lg" src={image2Thumbnail} alt="" />
            <img className="h-20 rounded-lg" src={image3Thumbnail} alt="" />
            <img className="h-20 rounded-lg" src={image4Thumbnail} alt="" />
          </div>
        </div>
        <HeroText />
      </div>
    </div>
  );
}

export default Hero;
