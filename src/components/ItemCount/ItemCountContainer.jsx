import React from "react";
import ItemCount from "./ItemCount";

const CountContainer = ({stock,initial,count, onAdd}) => {
  return (
    <div>
      <ItemCount stock={stock} count={count} initial={initial} onAdd={onAdd} />
    </div>
  );
};

export default CountContainer;