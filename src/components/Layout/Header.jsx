import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Link } from "react-router-dom";
import { FaCode } from "react-icons/fa";

const Header = () => {
  return (
    <Navbar className="p-5   bg-gray-200" fluid>
      <NavbarBrand>
        <Link className="text-4xl   flex items-center text-[#0284c7] gap-1 font-black">
          <span className="text-5xl p-0 m-0">
            <FaCode />
          </span>{" "}
          Azizdev{" "}
        </Link>
      </NavbarBrand>
      <NavbarToggle className="w-[60px]  text-center flex items-center justify-center" />
      <NavbarCollapse>
        <NavbarLink className="text-[#0284c7] text-xl " href="#">
          Home
        </NavbarLink>
        <NavbarLink className="text-[#0284c7] text-xl" href="#">
          About
        </NavbarLink>
        <NavbarLink className="text-[#0284c7] text-xl" href="#">
          Services
        </NavbarLink>
        <NavbarLink className="text-[#0284c7] text-xl" href="#">
          Pricing
        </NavbarLink>
        <NavbarLink className="text-[#0284c7] text-xl" href="#">
          Contact
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default Header;
