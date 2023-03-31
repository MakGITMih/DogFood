import React from "react";
import '../Form/Form.css'
import { useForm } from "react-hook-form";


export function RegistrationForm () {

     const { register, handleSubmit, formState: {errors} } = useForm({mode: "onChange"});
     const onSubmit = (data) => {console.log(data);};

    return (       
        <>
        <div className="form _container" onSubmit={handleSubmit(onSubmit)}>
             <form className="form__form" action="#">
                 <h1 className="form__title">Регистрация</h1>
                 <div className="form__wrap-name">
                    <label className="form__label-name"> Введите имя:<br />
                         <input type="text"
                         name="name"
                         placeholder="Имя" 
                        {...register('name', {
                        required: "Обязательное поле",
                        maxLength: {
                        value: 10,
                        message: 'слишком длинное имя'
                        },
                      })}
                     /> 
                         <div className="form__necessarily-name">
                             {errors?.name && <p className="form__necessarily">{errors?.name?.message}</p>}
                         </div>                   
                     </label>
                 </div>
                 <div className="form__wrap-password">
                     <label className="form__label-password"> Введите пароль:<br />
                         <input type="password" name="password" placeholder="Пароль" 
                        {...register('password', {
                        required: "Обязательное поле",                     
                        pattern: {
                             value:  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                             message: `Пароль должен содержать минимум 11 символов, одну букву латинского алфавита и одну цифру`
                          }                   
                      })} />  
                         <div className="form__necessarily-password">
                             {errors?.password && <p className="form__necessarily">{errors?.password?.message}</p>}
                         </div>                             
                     </label>
                 </div>
                 <div className="form__wrap-phone">
                    <label className="form__label-phone"> Введите номер телефона:<br />
                         <input className="form__input-phone" type="number" name="phoneNumber"     placeholder="Номер телефона" 
                         {...register('phoneNumber')}  />                  
                     </label>
                 </div>
                 <button className="form__btn">Зарегестрироваться</button>
             </form>
        </div>       
         </>
    )   
};