import { Menu, X } from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 rounded-md bg-gray-800 text-white md:hidden"
      >
        {isOpen ? <X className="size-4" /> : <Menu className="size-4" />}
      </button>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <nav className="p-5">
          <h2 className="text-2xl font-bold mb-4 flex items-center">BlogHub</h2>
          <ul className="space-y-2">
            <li>
              <a href="/" className="block p-2 hover:bg-gray-700 rounded">
                Home
              </a>
            </li>
            <li>
              <a href="/create" className="block p-2 hover:bg-gray-700 rounded">
                Create Post
              </a>
            </li>
          </ul>
          <div className="flex flex-col gap-y-4 mt-6">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Log In
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Sign Up
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
