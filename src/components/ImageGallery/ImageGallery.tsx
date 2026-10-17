import { useState } from "react";

type GalleryItem = {
  id: number;
  image: string;
  thumbnail: string;
};

const galleryData: GalleryItem[] = [
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
    id: 4,
    image: "/image-product-4.jpg",
    thumbnail: "/image-product-4-thumbnail.jpg",
  },
];

function ImageGallery() {
  const [imageId, setImageId] = useState(0);
  return (
    <div>
      <img
        src={galleryData[imageId].image}
        className="h-92 max-w-none rounded-lg"
        alt={`ProductImage ${imageId + 1}`}
      />

      {/* thumbnails */}
      <div className="flex w-full gap-4 py-6">
        {galleryData.map((item, index) => (
          <img
            key={item.id}
            src={item.thumbnail}
            onClick={() => setImageId(index)}
            className="hover h-20 w-20 cursor-pointer rounded-lg object-cover"
          />
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
