import React from "react";
import '../CardList/CardList.css'
import  {Card}  from '../Card/Card';
// import data from '../data.json' 
// Локальная база данных

export function CardList ({ data}) {
    // console.log (data);
    return(
    <div className="cardlist _container"> 
         {data.map((item,index)=><Card {...item} key = {`${index}-${item.name}`}></Card>)}
     </div>        
    
    )
} 