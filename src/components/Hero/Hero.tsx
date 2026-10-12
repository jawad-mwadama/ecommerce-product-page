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
function Hero() {
  return (
    <div className="">
      <img src={image1} className="h-64" alt="image1" />
    </div>

    // <div>
    //   {/* image side */}
    //   <div>
    //     {images.map((image) => (
    //       <img src={image.image1} key={image.id} />
    //     ))}
    //   </div>
    // </div>
  );
}

export default Hero;
