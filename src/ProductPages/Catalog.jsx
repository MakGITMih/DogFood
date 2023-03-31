import React from 'react';
import { useContext } from 'react';
import { CardList } from '../Components/CardList/CardList';
import { CardContext } from '../Context/CardContext';
import { UserContext } from '../Context/UserContext';
import { Sort } from '../Components/Sort/Sort';


export function Catalog ({currentUser}) {

  const { cards } = useContext(CardContext);
  const { handleProductLike } = useContext(UserContext);
       
    return (
        <>
        <div className="main__container _container">
        <Sort></Sort>       
       <CardList        
         data={cards} 
         currentUser={currentUser} 
         onProductLike={handleProductLike}>        
       </CardList>
          </div>
        </>
    );
    
};

 