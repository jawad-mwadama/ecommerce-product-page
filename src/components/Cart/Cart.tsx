import cartIcon from "../../assets/images/icon-cart.svg";

function Cart() {
  return (
    <div className="flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-1.5">
      <span>
        <img className="" src={cartIcon} alt="cart Icon" />
      </span>
      <span className="text-xs font-semibold text-black">Add to Cart</span>
    </div>
  );
}

export default Cart;
