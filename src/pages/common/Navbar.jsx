import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <section className="flex justify-between items-center h-24 max-w-[--max-width] px-4 border-b border-gray-900 m-auto">
        <h1 className=" text-3xl font-bold text-[--text-green]">
          <a href="#">REACT.</a>
        </h1>
        <ul className="hidden md:flex">
          <li className="p-4">
            <a className="custom-hover px-2" href="#">
              Home
            </a>
          </li>
          <li className="p-4">
            <a className="custom-hover px-2" href="#company">
              Company
            </a>
          </li>
          <li className="p-4">
            <a className="custom-hover px-2" href="#">
              Resources
            </a>
          </li>
          <li className="p-4">
            <a className="custom-hover px-2" href="#">
              About
            </a>
          </li>
          <li className="p-4">
            <a className="custom-hover px-2" href="#">
              Contact
            </a>
          </li>
        </ul>

        {/* TOOGLE MENU AND CLOSE HUMBURGER MENU */}

        <div onClick={handleNav} className="md:hidden">
          {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
        </div>

        {/* MOBILE NAV */}
        <section
          className={
            nav
              ? "fixed top-[-30px] left-0 w-[60%] border-r h-full border-r-gray-900 mt-7 bg-[--bg-black] ease-in-out duration-100 z-10"
              : "fixed hidden"
          }
        >
          <h1 className=" text-3xl font-bold text-[--text-green] px-4 pt-[2rem]">
            REACT.
          </h1>
          <ul className="uppercase p-4 ">
            <li className="p-4 border-b border-gray-600">
              <a href="#">Home</a>
            </li>
            <li className="p-4 border-b border-gray-600">
              <a href="#company">Company</a>
            </li>
            <li className="p-4 border-b border-gray-600">
              <a href="#">Rosources</a>
            </li>
            <li className="p-4 border-b border-gray-600">
              <a href="#">About</a>
            </li>
            <li className="p-4 border-b border-gray-600">
              <a href="#">Contact</a>
            </li>
          </ul>
        </section>
      </section>
    </>
  );
}

export default Navbar;
