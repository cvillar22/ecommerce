import React,{useState} from "react";
import ItemCountContainer from '../ItemCount/ItemCountContainer';
import { Link } from "react-router-dom";
import * as ReactBootstrap from "react-bootstrap";
import Button from "react-bootstrap/Button";

const ItemDetail = ({item}) => {

  const [count, setCount] = useState(1);
  const updateCount = (event)=> setCount(count + +event.target.value);

  const [finished, setFinished] = useState(false);
  
  const handleState = () =>setFinished(!finished);

 

  const handleSend = () => {
    const newItemFiltered = {...item, quantity: count};
    
  };

  return (

    <ReactBootstrap.Container style={{marginLeft:'420px'}} >
    <ReactBootstrap.Row className="itemDetail">
    <ReactBootstrap.Card style={{ width: '20rem' }}>
       <ReactBootstrap.Card.Img variant="top" src={item.prodImg} />
        <ReactBootstrap.Card.Body>
            <ReactBootstrap.Card.Title> <h2> {item.title} </h2> </ReactBootstrap.Card.Title>
                <ReactBootstrap.Card.Text>
                    <h6>stock:{item.stock}</h6>
                 </ReactBootstrap.Card.Text>
                <ReactBootstrap.Card.Text>
                    <h3>${item.price}</h3>
                </ReactBootstrap.Card.Text>
                <ReactBootstrap.Card.Text>
                 <p>{item.description}</p>
                </ReactBootstrap.Card.Text>
                <div>
                 {!finished ? ( 
                 <>
                     <ItemCountContainer stock={item.stock} initial={1} count={count} onAdd={updateCount} isAdded={isAdded} setIsAdded={setIsAdded} />
                     <Button  onClick ={()=>{handleState(); handleSend(item);}} variant="dark" type="button" style={{margin:'7px'}}>Comprar</Button> 
            
                 </>
                ):(
                 <>
                    <Link to ="/cart" onClick={handleState}>
                    <Button onClick = {handleState} variant="success" style={{margin:'7px'}}>Listo!</Button>
                    </Link>
                     <Button onClick = {()=> { handleState()}} variant="secondary" style={{margin:'7px'}}>Cambiar</Button>
                </>
                )}
                 </div>
        </ReactBootstrap.Card.Body>
    </ReactBootstrap.Card>
    </ReactBootstrap.Row>
    </ReactBootstrap.Container>
 );
 };

 export default ItemDetail;