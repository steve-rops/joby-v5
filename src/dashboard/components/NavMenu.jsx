import { NavLink } from "react-router";

export const NavMenu = ({ className }) => {
  return (
    <nav className={className}>
      <NavLink
        className={({ isActive }) =>
          `hover:text-accent-foreground ${
            isActive && "border-b border-b-primary text-primary"
          }`
        }
        to={"/dashboard/search"}
      >
        Search
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `hover:text-accent-foreground ${
            isActive && "border-b border-b-primary text-primary"
          }`
        }
        to="/dashboard/map"
      >
        Map
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `hover:text-accent-foreground ${
            isActive && "border-b border-b-primary text-primary"
          }`
        }
        to="dashboard/liked"
      >
        Liked
      </NavLink>
    </nav>
  );
};
