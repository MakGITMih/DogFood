import React from "react";
import '../CardList/CardList.css'
import  {Card}  from '../Card/Card';
import data from '../data.json'

export function CardList (params) {
    // console.log ({data});
    return(
    <div className="cardlist _container"> 
    {/* <div className="cardlist__wrap"> */}
     {data.map((item)=><Card></Card>)}
     
     </div>        
    // </div>
    )
}