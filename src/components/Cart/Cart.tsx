import cartIcon from "../../assets/images/icon-cart.svg";

function Cart() {
  return (
    <button className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 py-1.5 transition duration-300 ease-in-out hover:bg-orange-400">
      <span>
        <img
          src={cartIcon}
          className="hidden h-5 w-auto md:block"
          alt="cart Icon"
        />
      </span>
      <span className="sm:text-md w-full font-semibold text-black">
        Add to Cart
      </span>
    </button>
  );
}

export default Cart;
