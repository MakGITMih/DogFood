import React from 'react';
import { useState } from 'react';
import '../Accordion/Accordion.css'


export function Accordion ({children,title}) {
    const [selected, setSelected] = useState(false);
    const toggleState = () => {
        setSelected(!selected);
      }
      
    return (
        <>       
        <div className={selected ? 'active' : ''} >
            <button className='faq__button' onClick={toggleState}><h3 className='faq__subtitle'>{title}</h3></button>
            <div className='faq__content'>
                <p className='faq__text'>{children}</p>
            </div>
        </div>        
         </>
    );
    
};