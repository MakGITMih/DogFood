import React, { useContext, useEffect, useState } from "react";
import { Spinner } from "../Components/Spinner/Spinner";
import api from "../Utils/Request";
import {Product} from '../Components/Product/Product'
import { useParams } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { CardContext } from "../Context/CardContext";
import { openNotification } from "../Components/Notification/Notification";


export function ProductPages () {

    const [currentUser, setCurrentUser] = useState('');
    const[isLoading,setIsLoading] = useState (false);
    const[product,setProduct] = useState(null)
    const [reviews, setReviews] = useState([]);

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
        
        const onSendReview =async (data) => { console.log(data);
          try {            
          const result = await api.addReview(product._id, data);
            openNotification (
              'success', 'Success','Ваш отзыв успешно отправлен');
            setProduct({ ...result });
          } catch (error) {
            console.log({error});
            openNotification ('error', 'Error', 'Не получилось отправить отзыв');
          }
        };

        const deleteReview = async (id) => {
          try {
            const result = await api.deleteReview(product._id, id);
            openNotification (
              'success', 'Success','Ваш отзыв успешно удален');
            setProduct({ ...result });
          } catch (error) {
            openNotification('error', 'Error', 'Не получилось удалить отзыв');
          }
        };   
      
        useEffect(() => {
          if (product?.reviews && Array.isArray(product?.reviews)) {
            setReviews([...product?.reviews?.sort((a,b) => new Date(b.updated_at) - new Date(a.updated_at))])
          }
        }, [product?.reviews]);
        
        
    return (
      <main className="main">
      <div className="main__container _container">
            {isLoading ? (
            <Spinner></Spinner>
            ): ( <Product 
             {...product}
             reviews={reviews}
             currentUser={currentUser}
             onProductLike={onProductLike}
             setProduct ={setProduct}
             onSendReview ={onSendReview}
             deleteReview={deleteReview}
             ></Product> )}
          </div>
     </main>     
    )
    
}

 