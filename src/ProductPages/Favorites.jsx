import React from 'react';
import { useContext } from 'react';
import { CardList } from '../Components/CardList/CardList';
import { CardContext } from '../Context/CardContext';
import { UserContext } from '../Context/UserContext';
import { useNavigate } from "react-router-dom";
import '../Components/Card/Card.css'

export function Favorites ({currentUser}) {
    const { favorites } = useContext(CardContext);
    const { handleProductLike } = useContext(UserContext);

    let navigate = useNavigate();
     const handleClick = () => {
        navigate('/');
      };
     
    return (
        <>
        <div className='favorites _container'>
             <button onClick={handleClick} className="product__btn"> Назад </button>
             <h1 className='favorites__title'>Избранное</h1>       
             <div> 
                  <div className="favorites__card">                                             
                     <CardList                          
                          data={favorites}
                          currentUser={currentUser}
                          onProductLike={handleProductLike}>                         
                     </CardList>
                  </div>
            </div>
          </div>
        </>
    );
};