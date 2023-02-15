import React from "react";
import './Search.css'




export function Search ({searchText,searchCount}) {
    return (
         searchText && <section className="search _container">
            <span className="search__container">По запросу <span className="search__text">   {searchText}</span>найдено{searchCount} товаров
            </span>
         </section>          
    )   
};
// {searchText}
// {searchCount}