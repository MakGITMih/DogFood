
import { useEffect } from 'react'
import '../Modal/Modal.css'





export function Modal ({ children,activeModal, setActiveModal }) {

     useEffect (()=>{
         document.addEventListener('keydown', onModalKeyDown)
         return ()=> document.removeEventListener('keydown', onModalKeyDown)
     },[]);

     const onModalKeyDown = ((e)=>{ 
          console.log({e});
          if (e.key === 'Escape'){
               setActiveModal(false) 
          }
     })

     return (
          <>
               <div className={`modal ${activeModal ? 'active' : ''}`} onClick={() => setActiveModal(false)}>
                    <div className={`modal_content ${activeModal ? 'active' : ''}`} onClick={e => e.stopPropagation()} > {children} </div>
               </div>
          </>
     )
};
