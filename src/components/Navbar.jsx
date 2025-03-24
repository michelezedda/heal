import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };
  return (
    <>
      <nav className="fixed top-0 flex justify-between items-center py-1 px-4 w-full text-3xl backdrop-blur-sm font-[DM_Serif_Display] z-50">
        <Link to={"/"}>
          <span>heal</span>
        </Link>
        <div
          className="cursor-pointer hover:rounded-full hover:bg-neutral-100 p-3"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <IoCloseSharp /> : <IoMdMenu />}
          {isMenuOpen && (
            <ul className="absolute right-10 top-15 leading-12">
              <li className="hover:bg-neutral-100 rounded-full px-4">
                Sexual Health
              </li>
              <li className="hover:bg-neutral-100 rounded-full px-4">
                Weight Loss
              </li>
              <li className="hover:bg-neutral-100 rounded-full px-4">
                Hair Regrowth
              </li>
              <li className="hover:bg-neutral-100 rounded-full px-4">
                Mental Health
              </li>
              <li className="hover:bg-neutral-100 rounded-full px-4">Skin</li>
              <li className="hover:bg-neutral-100 rounded-full px-4">
                Everyday Health
              </li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
