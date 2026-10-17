import ImageGallery from "../ImageGallery/imageGallery";
import HeroText from "./HeroText";

function Hero() {
  return (
    <div className="flex items-center justify-center overflow-hidden px-12 pt-8 sm:mx-auto sm:max-w-5xl sm:pt-16">
      <div className="sm:flex sm:justify-between sm:gap-18 sm:px-16">
        <ImageGallery />
        <HeroText />
      </div>
    </div>
  );
}

export default Hero;
