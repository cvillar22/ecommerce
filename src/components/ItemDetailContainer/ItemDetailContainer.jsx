import React, { useEffect, useState} from 'react'

//Components
import ItemDetail from './ItemDetail';

//Hooks
import {useParams} from 'react-router-dom';



const ItemDetailContainer = (props) => {

    const {id} = useParams();//Utilizo el id de la ruta actual para saber que componente buscar y mostrar su detalle

    const [product, setProduct ] = useState([]);

    const getProductDetail = () => {
        fetch("/products.json")
        .then((resp)=> resp.json())
        .then((json)=>{
            const productFiltered =json.find( prod => prod.id === +id);
            setProduct(productFiltered)
        });
    };

    useEffect( getProductDetail,[id] );

    return(
        <div>
        { product && <ItemDetail item={product} />}
        </div>
    );
    
}

export default ItemDetailContainer;