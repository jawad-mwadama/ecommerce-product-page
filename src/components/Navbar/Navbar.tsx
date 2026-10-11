import logo from "../../assets/images/logo.svg";
import cartIcon from "../../assets/images/icon-cart.svg";
import avatar from "../../assets/images/image-avatar.png";

function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-stone-400 px-4 py-2 sm:px-8 lg:px-16 xl:px-24">
      <div className="flex items-center">
        <img src={logo} alt="sneaker logo" />
        <div className="px-12">
          <ul className="flex gap-4">
            <li className="cursor-pointer text-stone-400 transition duration-150 ease-in-out hover:text-black">
              Collections
            </li>
            <li className="cursor-pointer text-stone-400 transition duration-150 ease-in-out hover:text-black">
              Men
            </li>
            <li className="cursor-pointer text-stone-400 transition duration-150 ease-in-out hover:text-black">
              Women
            </li>
            <li className="cursor-pointer text-stone-400 transition duration-150 ease-in-out hover:text-black">
              About
            </li>
            <li className="cursor-pointer text-stone-400 transition duration-150 ease-in-out hover:text-black">
              Contact
            </li>
          </ul>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <button className="h-4.5">
          <img src={cartIcon} alt="cartIcon" />
        </button>

        <img className="h-14 rounded-full" src={avatar} alt="avatar" />
      </div>
    </nav>
  );
}

export default Navbar;
