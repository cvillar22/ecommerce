import React from "react";
import Item from "./Item";
import * as ReactBootstrap from "react-bootstrap";

const ItemList = ({ items }) => {

    return (
        <ReactBootstrap.Container>
        <ReactBootstrap.Row>
            {items.map(item =>
                <Item 
                key={item.id} 
                item={item}
                id={item.id}
                price={item.price}
                prodImg={item.prodImg}
                title={item.title}
                stock={item.stock}/>
            )}
        </ReactBootstrap.Row>
        </ReactBootstrap.Container>
    )
};

export default ItemList;