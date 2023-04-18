
import '../Form/Form.css'






export function Form ({title, handleFormSubmit,children}) {

    return (
     <>
       <form className="form-modal" onSubmit={handleFormSubmit}>
             <h1 className="title-modal">{title}</h1>
             {children}
        </form>         
     </>
    )
    
}