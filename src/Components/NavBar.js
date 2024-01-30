import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import '../CSS/NavBar.css';

export default function NavBar() {
  return (
    <nav className="navBar">
      <h1>TPC Chico</h1>
      <h2>Technical Projects Club</h2>
      <ul>
        <CustomLink to="/HomePage">HomePage</CustomLink>
        <CustomLink to="/About">About</CustomLink>
        <CustomLink to="/Projects">Projects</CustomLink>
        <CustomLink to="/Contact">Contact Us</CustomLink>
        <CustomLink to="/Events">Events</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
