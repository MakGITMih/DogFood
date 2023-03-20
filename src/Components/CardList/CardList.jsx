import React, { useContext } from "react";
import '../CardList/CardList.css'
import  {Card}  from '../Card/Card';



export function CardList ({data,currentUser, onProductLike}) {
        
    return(
    <div className="cardlist _container"> 
         {data.map((item,index)=><Card {...item} key={item._id} currentUser={currentUser}
          onProductLike={onProductLike}></Card>)}
     </div>        
    
    )
} 
