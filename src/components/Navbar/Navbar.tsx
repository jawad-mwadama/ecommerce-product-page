import logo from "../../assets/images/logo.svg";
import cartIcon from "../../assets/images/icon-cart.svg";
import avatar from "../../assets/images/image-avatar.png";

// function Navbar() {
//   return (
//     <nav className="flex items-center justify-between border-b border-stone-400 px-4 py-2 sm:px-8 lg:px-16 xl:px-24">
//       <div className="flex items-center">
//         <img src={logo} alt="sneaker logo" />
//         <div className="px-12">
//           <ul className="flex gap-4">
//             <li className="cursor-pointer text-stone-400 transition duration-150 ease-in-out hover:text-black">
//               Collections
//             </li>
//             <li className="cursor-pointer text-stone-400 transition duration-150 ease-in-out hover:text-black">
//               Men
//             </li>
//             <li className="cursor-pointer text-stone-400 transition duration-150 ease-in-out hover:text-black">
//               Women
//             </li>
//             <li className="cursor-pointer text-stone-400 transition duration-150 ease-in-out hover:text-black">
//               About
//             </li>
//             <li className="cursor-pointer text-stone-400 transition duration-150 ease-in-out hover:text-black">
//               Contact
//             </li>
//           </ul>
//         </div>
//       </div>

//       <div className="flex items-center gap-8">
//         <button className="h-4.5">
//           <img src={cartIcon} alt="cartIcon" />
//         </button>
//         <img className="h-14 rounded-full" src={avatar} alt="avatar" />
//       </div>
//     </nav>
//   );
// }

const navLinks = [
  { label: "Collections", href: "/collections" },
  { label: "Men", href: "/Men" },
  { label: "Women", href: "/Women" },
  { label: "About", href: "/About" },
  { label: "Contact", href: "/contact" },
];

function Navbar() {
  return (
    <nav
      aria-label="Main Navigation"
      className="mx-auto flex items-center justify-between border-b border-stone-200 px-4 py-4 sm:px-8 lg:px-16 xl:px-24"
    >
      <div className="flex items-center gap-10">
        <a href="/" aria-label="Sneaker store Home">
          <img src={logo} alt="" />
        </a>

        <ul className="flex items-center gap-5">
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
            src={avatar}
            alt="avatar profile"
            className="h-10 w-10 rounded-full border-2 border-transparent hover:border-orange-500"
          />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
