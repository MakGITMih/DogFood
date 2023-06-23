import React, { useContext, useState, } from "react";
import { CardContext } from "../../Context/CardContext";
import '../Sort/Sort.css'
import { useTranslation } from "react-i18next";



export function Sort () {
    const { onSortData, }= useContext(CardContext);
    const [sortedId, setSortedId] = useState('newest');

    const { t } = useTranslation ( )

    const tabs = [
        { id: 'popular', title: t ('popular') },
        { id: 'newest', title: t ('newest') },
        { id: 'cheep', title: t ('cheep') },
        { id: 'expensive', title: t ('expensive') },
        { id: 'rating', title: t ('rating') },
        { id: 'discount', title: t ('discount') },  
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

