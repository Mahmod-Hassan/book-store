import { useEffect, useState } from "react";
import { HiSearch } from "react-icons/hi";
const Navbar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(inputValue);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [inputValue, onSearch]);

  return (
    <nav className="py-4 2xl:px-6">
      <div className="container flex items-center justify-between">
        <h1 className="font-bold text-2xl space-x-2">
          <span className="text-emerald-500 border-b-2 border-b-orange-500">
            Awesome
          </span>
          <span className="text-orange-500 border-b-2 border-b-emerald-500">
            Books
          </span>
        </h1>
        <ul className="hidden md:flex items-center space-x-6">
          <li className="cursor-pointer">Book Store</li>
          <li className="cursor-pointer">Wishlist</li>
          <li className="cursor-pointer">My Collection</li>
        </ul>

        <form>
          <div className="flex shadow-md rounded-full pl-4 p-1 relative justify-between bg-white items-center">
            <HiSearch className="absolute right-2" />
            <input
              onChange={(e) => setInputValue(e.target.value)}
              className="outline-none"
              type="text"
              placeholder="Search"
            />
          </div>
        </form>
      </div>
    </nav>
  );
};
export default Navbar;
