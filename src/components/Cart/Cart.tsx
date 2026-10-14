import cartIcon from "../../assets/images/icon-cart.svg";

function Cart() {
  return (
    <div className="flex cursor-pointer items-center gap-2 rounded-lg bg-orange-500 px-12 py-1.5 transition duration-300 ease-in-out hover:bg-orange-400">
      <span>
        <img src={cartIcon} alt="cart Icon" />
      </span>
      <span className="text-sm font-semibold text-black">Add to Cart</span>
    </div>
  );
}

export default Cart;
