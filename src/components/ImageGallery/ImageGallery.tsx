import { useState } from "react";
import { galleryData } from "../../Data/Data";

function ImageGallery() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedImage = galleryData[selectedIndex];
  return (
    <div>
      <img
        src={selectedImage.image}
        alt={`ProductImage ${selectedIndex + 1}`}
        className="h-92 max-w-none rounded-lg object-cover"
      />

      {/* thumbnails */}
      <div className="flex w-full gap-4 py-6">
        {galleryData.map((item, index) => {
          const isSelected = selectedIndex === index;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedIndex(index)}
              aria-label={`View product image ${index + 1}`}
              aria-pressed={isSelected}
              className={`rounded-lg ${
                isSelected
                  ? "outline-2 outline-offset-4 outline-orange-500"
                  : "hover:outline-2 hover:outline-offset-4 hover:outline-orange-500"
              }`}
            >
              <img
                src={item.thumbnail}
                alt=""
                className={`h-20 w-20 rounded-lg object-cover ${
                  isSelected ? "-z-10 opacity-50" : "opacity-100"
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ImageGallery;
