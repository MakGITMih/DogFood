
import '../Modal/Modal.css'





export function Modal ({ children,activeModal, setActiveModal }) {

    return (  
         <>
    <div className={`modal ${activeModal ? 'active' : ''}`} onClick={()=>setActiveModal(false)}>
         <div className={`modal_content ${activeModal ? 'active' : ''}`} onClick={e=> e.   stopPropagation()} > {children}</div>
    </div>        
         </>   
    )    
};
