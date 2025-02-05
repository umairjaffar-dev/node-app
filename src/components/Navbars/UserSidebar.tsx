import { NavLink } from "react-router";

const UserSidebar = () => {
  return (
    <nav className="flex flex-col space-y-3 mt-4">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive ? "bg-gray-100 text-gray-800" : "text-black bg-gray-200"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        end
        className={({ isActive }) =>
          isActive ? "bg-gray-100 text-gray-800" : "text-black bg-gray-200"
        }
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "bg-gray-100 text-gray-800" : "text-black bg-gray-200"
        }
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default UserSidebar;
