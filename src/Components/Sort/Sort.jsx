import React, { useContext } from "react";
import { CardContext } from "../../Context/CardContext";
import '../Sort/Sort.css'





export function Sort () {
    const 
    // res
     { onSortData }
     = useContext(CardContext);
    const tabs = [
        { id: 'popular', title: 'Популярные' },
        { id: 'newest', title: 'Новинки' },
        { id: 'cheep', title: 'Сначала дешевые' },
        { id: 'expensive', title: 'Сначала дорогие' },
        { id: 'discount', title: 'По скидке' },
      ];

      const handleChange = (id) => {
        onSortData(id);
      };

    return (  
         <>
         <div className="sort">
             {tabs.map(({id, title}) => (
             <div className="sort__link" onClick={() => handleChange(id)}>{title}</div>
             ))}
         </div>        
         </>   
    )    
};
