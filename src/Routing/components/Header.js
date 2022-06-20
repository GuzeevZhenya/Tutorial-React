import React from "react";
import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  
  let {pathname} = useLocation();
  return (
    <div className="header">
      <h2>React Blog</h2>
      <Nav variant="pills">
        <Nav.Item>
          <Nav.Link active={pathname==='/'} to="/" as={Link}>
            Главная
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link active={pathname==='/about'} to="/about" as={Link}>
            Обо мне
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link active={pathname==='/login'} to="/login" as={Link}>
            Войтит
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};
