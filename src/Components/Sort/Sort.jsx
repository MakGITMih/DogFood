import React, { useContext, useState } from "react";
import { CardContext } from "../../Context/CardContext";
import '../Sort/Sort.css'


export function Sort () {
    const { onSortData, }= useContext(CardContext);
    const [sortedId, setSortedId] = useState('newest');
    const tabs = [
        { id: 'popular', title: 'Популярные' },
        { id: 'newest', title: 'Новинки' },
        { id: 'cheep', title: 'Сначала дешевые' },
        { id: 'expensive', title: 'Сначала дорогие' },
        { id: 'rating', title: 'По рейтингу ' },
        { id: 'discount', title: 'По скидке' },  
      ];

      const handleChange = (id) => {
        onSortData(id);
        setSortedId(id);
      };

    return (  
         <>
         <div className="sort">
             {tabs.map(({id, title}) => (
            <span className={`sort__link ${id === sortedId ? 'sort__link_selected' : ''} `}
            onClick={() => handleChange(id)}>
                 {title}
             </span>
             ))}
         </div>        
         </>   
    )    
};

