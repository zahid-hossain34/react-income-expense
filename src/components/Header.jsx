import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <NavLink exact to="/">
        <h1>
          <span>Expense</span> Tracker
        </h1>{" "}
      </NavLink>
      <nav>
        <ul>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              to="/income"
            >
              Income
            </NavLink>
          </li>
          <li>
            <NavLink     className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              } to="/expense">Expense</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
