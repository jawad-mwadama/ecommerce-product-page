import Cart from "../Cart/Cart";
import Counter from "../Counter/Counter";

function HeroText() {
  return (
    <div>
      <div className="max-w-sm border border-red-500 px-2.5 py-6">
        <span className="text-xs font-bold tracking-widest text-stone-400">
          SNEAKER COMPANY
        </span>
        <h1 className="py-2 text-3xl font-bold tracking-normal">
          Fall Limited Edition Sneakers
        </h1>

        <p className="py-2 text-sm text-stone-500">
          These low-profle sneakers are your perfect casual wear
          companion.Featuring a durable rubber outer sole,they'll withstand
          everything the weather can offer
        </p>
        <div className="flex items-center gap-4 py-2">
          <span className="cursor-pointer text-3xl font-bold">$125</span>
          <div className="rounded-lg bg-black px-1.5 text-white">
            <span>50%</span>
          </div>
        </div>
        <span className="cursor-pointer font-bold text-gray-400 line-through">
          $250
        </span>
        {/* cart and counter */}
        <div className="flex items-center gap-4 py-6">
          <Counter />
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default HeroText;
