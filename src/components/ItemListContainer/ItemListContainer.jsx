import React,{useState, useEffect} from 'react';
import ItemList from "./ItemList";
import Load from '../Load/Load';


const ItemListContainer = () => {

     const [data, setData] = useState({
        items: [],
        isLoading: true,
    });

    const requestData = () => {
        setTimeout(function startFetch() {
            fetch("/products.json")
            .then((response) => response.json())
            .then((json) => setData({ items: json, isLoading: false }));
            }, 2000);
        };

    useEffect(requestData, []);
      
    return (
         <div>
            {data.isLoading ? <Load /> : <ItemList items={data.items} />}
        </div>
    );
}

export default ItemListContainer;