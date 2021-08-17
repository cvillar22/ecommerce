import React from "react";
import { Link } from "react-router-dom";
import * as ReactBootstrap from "react-bootstrap";


const NavBarCategories = ({ categories }) => {
  return (
    <ReactBootstrap.Nav className="categoriesNav">
      {categories.map((category) => (
          <ReactBootstrap.Nav.Link key={category.id}>
            <Link to={`/category/${category.id}`}>
                {category.title}>

            </ReactBootstrap.Nav.Link>
         </Link>
      ))}
   </ReactBootstrap.Nav>
  );
};

export default NavBarCategories;