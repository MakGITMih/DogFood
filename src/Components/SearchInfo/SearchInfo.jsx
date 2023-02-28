import React from "react";
import './SearchInfo.css'





export function Search ({searchText,searchCount}) {
    return (
         searchText && 
         <section className="search _container">
             <span className="search__container">По запросу <span className="search__text">  {searchText}</span> {searchCount != 1  ? 'найдено':'найден'} {searchCount} {searchCount > 4 || searchCount < 1 ? 'товаров': searchCount = searchCount > 1 && searchCount < 5 ? 'товара': searchCount = 1 ? 'товар': ''} 
             </span>
         </section>          
    )   
};
