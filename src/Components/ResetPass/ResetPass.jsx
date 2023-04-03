import React from "react";
import { Form } from "../Form/Form";
import '../Login/Login.css'
import { useForm } from "react-hook-form";
import { EMAIL_REGEXP, PASS_REGEXP, VALIDATE_CONFIG } from "../Constants/Constants";



export function ResetPass () {
 
    const { register, handleSubmit, formState: {errors} } = useForm({mode: "onBlur"});

    const emailRegister = register('email', {
        required: {
          value: true,
          message:
           VALIDATE_CONFIG.requiredMessage,
        },
        pattern: {
          value: EMAIL_REGEXP,
          message: VALIDATE_CONFIG.email,
        },
      });

      const sendData = (data) => {
        console.log({ data });
      };


    return (
         <>
         <Form handleFormSubmit={handleSubmit(sendData)} title='Восстановление пароля'>
        <div className="wrap__modal"> 
            <div className="modal__restore-text _modal__margin-bottom ">Для получения временного пароля необходимо ввести email, указанный при регистрации.</div>           
            <input className="modal__email"
                 {...emailRegister}
                 type="email"
                 name="email"
                 placeholder="Email" 
            />
            {errors.email && (
            <p className='form__necessarily'>{errors?.email?.message}</p>
          )}
            <p className="modal__restore _modal__text-left _modal__margin-top">
                <span className="modal__restore-text ">Срок действия временного пароля 24 ч.</span>
            </p>
            <button type="submit" className="modal__password form__btn" >Отправить</button>  
        </div>
         </Form>
         </>
    )   
};