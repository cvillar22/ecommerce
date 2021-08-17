import React from 'react';
import Button from "react-bootstrap/Button";
import Table from 'react-bootstrap/Table';

//routing
// import { Link } from 'react-router-dom';

// const Cart = () => {

//     const generateRow = (item)=>{
//         return(
//             <tr>
//                 <td>{item.quantity}</td>
//                 <td>{item.title}</td>
//                 <td>{item.price}</td>
//                 <td>${item.price*item.quantity}</td>
//                 <td>
//                     <Button
//                         value={item.id}
//                         onClick={deleteItem}
//                     >
//                         Borrar
//                     </Button>
//                     <Link to={`/`}>
//                         <Button
//                         role="link"
//                         className="button is-warning is-dark"
//                         title="Edit order"
//                         >
//                         Editar
//                         </Button>
//                     </Link>
//                 </td>
//             </tr>    
//         )
//     };
    
//     if (cart.length !==0){
//         return (
//         <div>
//             <h1>Carrito</h1>
       
//             <Table striped bordered hover variant="dark">
//                 <thead>
//                     <tr>
//                     <th>Cantidad</th>
//                     <th>Nombre</th>
//                     <th>Precio</th>
//                     <th>Total</th>
//                     </tr>
//                 </thead>
                
//                 <tbody>{cart.map((item) => generateRow(item))}</tbody>
//                 <div>
//                         <p>
//                             Subtotal ${ total }
//                         </p>
//                         <Link to="/order"><Button>Finalizar compra</Button></Link>
//                 </div>
//             </Table>
//         </div>
//     )} else{
//         return(
//             <div >
//                 <h4>Parece que tu carrito está vacio <br/> </h4>
//                 <Link to="/"><Button >Volver a la tienda </Button></Link> 
//             </div>
//         )
//     }
// };

// export default Cart;

