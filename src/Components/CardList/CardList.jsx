import React from "react";
import '../CardList/CardList.css'
import  {Card}  from '../Card/Card';
import data from '../data.json' // Локальная база данных

export function CardList (params) {
    console.log ({data});
    return(
    <div className="cardlist _container"> 
         {data.map((item)=><Card {...item}></Card>)}
     </div>        
    
    )
}