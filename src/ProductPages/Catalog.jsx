import React from 'react';
import { CardList } from '../Components/CardList/CardList';






export function Catalog ({ cards, currentUser, handleProductLike }) {
       
    return (
        <>
        <div className="main__container _container">          
       <CardList        
         data={cards} 
         currentUser={currentUser} 
         onProductLike={handleProductLike}>        
       </CardList>
          </div>
        </>
    );
    
};

 