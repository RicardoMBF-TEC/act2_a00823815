// components/Navbar.js
import CustomImage from "./customImage";
import Link from "next/link";
import Button from "@/app/components/button"; 

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-900 text-white p-4 flex items-center fixed top-0 left-0 z-10">
      {/* Logo Section on the left with Link to Homepage */}
      <div className="ml-4">
        <Link href="/" passHref>
          <CustomImage src="/Umbrella_Corporation_logo.svg.png" alt="Logo" width={50} height={50} />
        </Link>
      </div>

      {/* Buttons Section (Centering the buttons) */}
      <div className="flex-grow flex justify-center">
        <div className="flex space-x-4">
          <Button href="/" text="Home" variant="text" /> 
          <Button href="/page2" text="ColorButtons" variant="text" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;