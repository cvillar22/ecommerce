import React from "react";
import { Link } from "react-router-dom";
import * as ReactBootstrap from "react-bootstrap";

const Item = ({prodImg, title, price, stock, id }) => {
 
  return (
     <ReactBootstrap.Card style={{ width: '15rem' }}>
        <ReactBootstrap.Card.Img variant="top" src={prodImg} />
        <ReactBootstrap.Card.Body>
          <ReactBootstrap.Card.Title> <h2> {title} </h2> </ReactBootstrap.Card.Title>
          <ReactBootstrap.Card.Text>
           <h6>stock :{stock}</h6>
          </ReactBootstrap.Card.Text>
          <ReactBootstrap.Card.Text>
           <h3>$ {price}</h3>
          </ReactBootstrap.Card.Text>
          <Link to={`/product/${id}`}>
           <ReactBootstrap.Button  type="button" title="description" value={id} variant="dark">Descripcion</ReactBootstrap.Button>
           </Link>
        </ReactBootstrap.Card.Body>
    </ReactBootstrap.Card>
  );
};

export default Item;