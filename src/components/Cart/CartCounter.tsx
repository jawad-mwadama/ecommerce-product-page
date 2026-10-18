import plusIcon from "../../assets/images/icon-plus.svg";
import minusIcon from "../../assets/images/icon-minus.svg";

type CounterProps = {
  cartQuantity: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
};

function Counter({
  cartQuantity,
  handleIncrement,
  handleDecrement,
}: CounterProps) {
  return (
    <div className="flex cursor-pointer items-center gap-7 rounded-lg bg-stone-100 px-6 py-1.5">
      <button
        type="button"
        onClick={handleIncrement}
        aria-label="Increase quantity"
        className="cursor-pointer"
      >
        <img src={plusIcon} alt="" />
      </button>

      <span className="font-bold">{cartQuantity}</span>

      <button
        type="button"
        onClick={handleDecrement}
        aria-label="Decrease quantity"
        className="cursor-pointer"
      >
        <img src={minusIcon} alt="" />
      </button>
    </div>
  );
}

export default Counter;
