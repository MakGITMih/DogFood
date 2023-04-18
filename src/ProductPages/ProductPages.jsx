import React, { useContext, useEffect, useState } from "react";
import { Spinner } from "../Components/Spinner/Spinner";
import api from "../Utils/Request";
import {Product} from '../Components/Product/Product'
import { useParams } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { CardContext } from "../Context/CardContext";



export function ProductPages () {

    const [currentUser, setCurrentUser] = useState('');
    const[isLoading,setIsLoading] = useState (false);
    const[product,setProduct] = useState(null)

    const { handleProductLike } = useContext(UserContext);
    const { favorites } = useContext(CardContext);

    const onProductLike = (e) => {
      console.log(e);
      handleProductLike(product);
      setProduct({ ...product });
    };

    const { productId } = useParams();

     useEffect (() => {
            setIsLoading (true);
            api.getUserInfo().then((userData) => setCurrentUser(userData));
            api
            .getProductById(productId)
            .then((productData) => setProduct(productData))
            .catch((err) => console.log('err',err))
            .finally(() => setIsLoading (false));       
        },[productId,favorites]);     
        
    return (
      <main className="main">
      <div className="main__container _container">
            {isLoading ? <Spinner></Spinner> : <Product {...product} currentUser={currentUser} onProductLike={onProductLike} ></Product> }
          </div>
     </main>     
    )
    
}

 