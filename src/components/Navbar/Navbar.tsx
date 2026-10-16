import logo from "../../assets/images/logo.svg";
import cartIcon from "../../assets/images/icon-cart.svg";
import hamburgerMenu from "../../assets/images/icon-menu.svg";
import closeMenu from "../../assets/images/icon-close.svg";
import { useState } from "react";
// import avatar from "../../assets/images/image-avatar.png";

const navLinks = [
  { label: "Collections", href: "/collections" },
  { label: "Men", href: "/Men" },
  { label: "Women", href: "/Women" },
  { label: "About", href: "/About" },
  { label: "Contact", href: "/contact" },
];

function Navbar() {
  // state to handle nav toggle which is initially false so that it doesn't appear wothout the state toggle
  const [nav, setNav] = useState(false);

  // a function that will handle the state toggle
  const handleNav = () => setNav(!nav);
  return (
    <nav
      aria-label="Main Navigation"
      className="flex items-center justify-between border-b border-stone-200 px-4 py-4 sm:px-8 lg:px-12 xl:px-20"
    >
      <div className="flex items-center gap-10">
        <a href="/" aria-label="Sneaker store Home">
          <img src={logo} alt="" />
        </a>
        {/* automatically hiding the navLinks unless the required viewport to display them is achieved */}
        <ul className="hidden items-center gap-5 md:flex">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-stone-500 transition-colors duration-150 hover:text-black focus-visible:outline-2 focus-visible:outline-orange-500"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-6">
        <button
          type="button"
          aria-label="Open Shopping cart"
          className="rounded-md p-2 hover:bg-stone-100 focus-visible:outline-2 focus-visible:outline-orange-500"
        >
          <img src={cartIcon} alt="cart" className="h-5 w-5" />
        </button>

        <button
          type="button"
          aria-label="Open profile"
          className="rounded-full focus-visible:outline-2 focus-visible:outline-orange-500"
        >
          <img
            src="/image-avatar.png"
            alt="avatar profile"
            className="h-10 w-10 rounded-full border-2 border-transparent hover:border-orange-500"
          />
        </button>

        {/* menu toggles controlled by nav state */}
        <button
          type="button"
          className="block md:hidden"
          onClick={handleNav}
          aria-label={nav ? closeMenu : hamburgerMenu}
        >
          <img
            src={nav ? closeMenu : hamburgerMenu}
            alt={nav ? "close Menu" : "open menu"}
            className="md:hidden"
          />
        </button>
      </div>

      {/* mobile nav sidebar with the states*/}

      <div
        className={`fixed top-0 left-0 h-full w-[70%] bg-white p-6 transition-transform duration-300 ${nav ? "translate-x-0" : "-translate-x-full"} md:hidden`}
      >
        <a href="/" aria-label="Sneaker store Home">
          <img src={logo} alt="" />
        </a>

        <ul className="mt-10 flex flex-col gap-6">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-stone-500 transition-colors duration-150 hover:text-black focus-visible:outline-2 focus-visible:outline-orange-500"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
