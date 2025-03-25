import { FaFacebookF } from "react-icons/fa";
import { FaInstagram, FaTiktok } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

function Footer() {
  return (
    <>
      <footer className="bg-black flex flex-col rounded-t-2xl mt-10 pt-16 px-16">
        <div className="text-white text-2xl lg:text-3xl">
          <ul>
            <li className="hover:text-neutral-400 cursor-pointer duration-300">
              Learn
            </li>
            <li className="hover:text-neutral-400 cursor-pointer duration-300">
              Tools
            </li>
            <li className="hover:text-neutral-400 cursor-pointer duration-300">
              Popular
            </li>
            <li className="hover:text-neutral-400 cursor-pointer duration-300">
              Heal
            </li>
            <li className="hover:text-neutral-400 cursor-pointer duration-300">
              Careers
            </li>
            <li className="hover:text-neutral-400 cursor-pointer duration-300">
              Connect
            </li>
          </ul>
        </div>
        <div className="flex my-10 text-white gap-4">
          <FaFacebookF className="rounded-full bg-neutral-800 hover:bg-white size-12 p-3 hover:text-black cursor-pointer duration-300" />
          <FaInstagram className="rounded-full bg-neutral-800 hover:bg-white size-12 p-3 hover:text-black cursor-pointer duration-300" />
          <BsTwitterX className="rounded-full bg-neutral-800 hover:bg-white size-12 p-3 hover:text-black cursor-pointer duration-300" />
          <FaTiktok className="rounded-full bg-neutral-800 hover:bg-white size-12 p-3 hover:text-black cursor-pointer duration-300" />
        </div>
        <p className="text-lg text-neutral-500">
          {new Date().getFullYear()} &#169; Heal
        </p>
        <div className="text-center">
          <span className="font-[DM_Serif_Display] text-[220px] sm:text-[350px] md:text-[400px] lg:text-[500px] xl:text-[600px] text-neutral-800 w-max">
            heal
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
