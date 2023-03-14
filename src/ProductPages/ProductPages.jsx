import React, { useEffect, useState } from "react";
import { Spinner } from "../Components/Spinner/Spinner";
import api from "../Utils/Request";
import {Product} from '../Components/Product/Product'
import { useParams } from "react-router-dom";



export function ProductPages () {

    const[cards,setCards]=useState([]);
    const [searchQuery,setSearchQuery]=useState('');
    const [currentUser, setCurrentUser] = useState('');
    const[isLoading,setIsLoading] = useState (false);
    const[product,setProduct] = useState(null)

    const onProductLike = () => {}; 
    const { productId } = useParams();

      console.log(productId);
   
     useEffect (() => {
            setIsLoading (true);
            api.getUserInfo().then((userData) => setCurrentUser(userData));
            api
            .getProductById(productId)
            .then((productData) => setProduct(productData))
            .catch((err) => console.log('err',err))
            .finally(() => setIsLoading (false));       
        },[productId]); 
      
 
    function handleUpdateUser(userUpdateData) {
     api
        .setUserInfo(userUpdateData)
        .then((newUser) => {
        setCurrentUser(newUser);
     });
   }
        
    return (
      <main className="main">
      <div className="main__container _container">
            {isLoading ? <Spinner></Spinner> : <Product {...product} currentUser={currentUser} onProductLike={onProductLike} ></Product> }
          </div>
     </main>     
    )
    
}

 