import React, { useState } from "react";
import '../Form/Form.css'





export function Form (props) {

    // const [contactInfo, setContactInfo] = useState({
    //     name: '',
    //     lastName: '',
    //     phoneNumber: '',
    //   });

      // const handleChange = (e) => {
      //   setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
      // };

      // const handleSubmit = (e) => {
      //   e.preventDefault();
      //   console.log(contactInfo);
      //   props.addContact (contactInfo)
      // };

    

    return (
        <>
        {/* <div className="form _container" onSubmit={handleSubmit}>
             <form className="form__form" action="#">
                 <h1 className="form__title">Регистрация</h1>
                 <div>
                 <label className=""> Введите имя:<br />
                     <input type="text" name="name" placeholder="Имя" value={contactInfo.name} onChange={handleChange} />                    
                 </label>
                 </div>
                 <div className="">
                 <label className=""> Введите имя:<br />
                     <input type="text" name="lastName" placeholder="Имя" value={contactInfo.lastName} onChange={handleChange} />                
                 </label>
                 </div>
                 <label className=""> Введите номер телефона:<br />
                     <input className="form__input-phone" type="number" name="phoneNumber" placeholder="Номер телефона" value={contactInfo.phoneNumber} onChange={handleChange}/>                  
                 </label>
                 <button className="form__btn">Отправить</button>
             </form>
        </div>        */}
         </>
    )
    
}