import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/brain-logo.jpeg";

const navItems = [
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "Products", to: "/products" },
  { label: "Insights", to: "/insights" },
  { label: "About", to: "/about" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link className="brand" to="/" aria-label="The Software Consulting home">
          <span className="brand-mark">
            <img src={logo} alt="" />
          </span>
          <span className="brand-copy">
            <strong>The Software</strong>
            <span>Consulting</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <Link className="button button-small button-primary desktop-cta" to="/contact">
            Start a project <span aria-hidden="true">↗</span>
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div id="mobile-navigation" className={menuOpen ? "mobile-nav open" : "mobile-nav"}>
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => (isActive ? "mobile-nav-item active" : "mobile-nav-item")}
          >
            {item.label} <span aria-hidden="true">↗</span>
          </NavLink>
        ))}
        <Link className="button button-primary" to="/contact">
          Start a project
        </Link>
      </div>
    </header>
  );
};

export default Header;
