import React, { Fragment } from "react";
import Button from "react-bootstrap/Button";

const ItemCount = ({ stock, count, onAdd }) => {
  return (
    <Fragment>
      <Button
        variant="dark"
        className="buttonCount"
        type="button"
        value={-1}
        disabled={count <= 1}
        onClick={onAdd}
        title="Rest count"
        style={{margin:'5px'}}
      >
        -
      </Button>
      <span>{count}</span>
      <Button
        variant="dark"
        className="buttonCount"
        type="button"
        value={1}
        disabled={count >= stock}
        onClick={onAdd}
        title="Sum count"
        style={{margin:'5px'}}
      >
        +
      </Button>
    </Fragment>
  );
};

export default ItemCount;