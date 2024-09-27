
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <ul className="flex justify-around text-white">
          <li>
            <Link
              to="/"
              className="hover:text-yellow-400 transition duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/sales"
              className="hover:text-yellow-400 transition duration-200"
            >
              Sales
            </Link>
          </li>
          <li>
            <Link
              to="/quick-sale"
              className="hover:text-yellow-400 transition duration-200"
            >
              Quick Sale
            </Link>
          </li>
          <li>
            <Link
              to="/customer-management"
              className="hover:text-yellow-400 transition duration-200"
            >
              Customer Management
            </Link>
          </li>
          <li>
            <Link
              to="/inventory-management"
              className="hover:text-yellow-400 transition duration-200"
            >
              Inventory Management
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-yellow-400 transition duration-200"
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
