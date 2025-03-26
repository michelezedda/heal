import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaOpencart } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };
  return (
    <>
      <nav className="fixed top-0 flex justify-between items-center py-1 px-4 w-full text-3xl backdrop-blur-2xl font-[DM_Serif_Display] z-40 rounded-b-2xl shadow-md">
        <Link to={"/"}>
          <span>heal</span>
        </Link>
        <div className="flex">
          <div className="cursor-pointer p-3 z-50">
            <FaOpencart />
          </div>
          <div className="cursor-pointer p-3 z-50" onClick={toggleMenu}>
            {isMenuOpen ? <IoCloseSharp /> : <IoMdMenu />}{" "}
          </div>
        </div>
        {/* Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 h-screen"
            onClick={toggleMenu}
          ></div>
        )}
        {/* Side Menu */}
        {isMenuOpen && (
          <ul
            className={`absolute right-0 top-0 leading-12 pt-20 px-6 backdrop-blur-2xl h-[100dvh] w-3/4 lg:w-[500px] bg-white rounded-l-2xl z-40 duration-300 transform ${
              isMenuOpen && "motion-preset-slide-left"
            }`}
          >
            <Link to={"/"} onClick={toggleMenu}>
              <li className="hover:bg-neutral-100 rounded-full px-4 cursor-pointer flex items-center justify-between">
                Home <MdKeyboardArrowRight />
              </li>
            </Link>
            <Link to={"/sexual-health"} onClick={toggleMenu}>
              <li className="hover:bg-neutral-100 rounded-full px-4 cursor-pointer flex items-center justify-between">
                Sexual Health <MdKeyboardArrowRight />
              </li>
            </Link>
            <Link to={"/weight-loss"} onClick={toggleMenu}>
              <li className="hover:bg-neutral-100 rounded-full px-4 cursor-pointer flex items-center justify-between">
                Weight Loss <MdKeyboardArrowRight />
              </li>
            </Link>
            <Link to={"/hair-regrowth"} onClick={toggleMenu}>
              <li className="hover:bg-neutral-100 rounded-full px-4 cursor-pointer flex items-center justify-between">
                Hair Regrowth <MdKeyboardArrowRight />
              </li>
            </Link>
            <Link to={"/mental-health"} onClick={toggleMenu}>
              <li className="hover:bg-neutral-100 rounded-full px-4 cursor-pointer flex items-center justify-between">
                Mental Health <MdKeyboardArrowRight />
              </li>
            </Link>
            <li
              className="hover:bg-neutral-100 rounded-full px-4 cursor-pointer flex items-center justify-between"
              onClick={() =>
                window.open("https://coconut-cosmetics.vercel.app/", "_blank")
              }
            >
              Skincare <MdKeyboardArrowRight />
            </li>
            <Link to={"/shop"} onClick={toggleMenu}>
              <li className="hover:bg-neutral-100 rounded-full px-4 cursor-pointer flex items-center justify-between">
                Shop <MdKeyboardArrowRight />
              </li>
            </Link>
          </ul>
        )}
      </nav>
    </>
  );
}

export default Navbar;
