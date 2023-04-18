import React from "react";
import { Form } from "../Form/Form";
import '../Login/Login.css'
import { useForm } from "react-hook-form";
import { EMAIL_REGEXP, PASS_REGEXP, VALIDATE_CONFIG } from "../Constants/Constants";
import { useNavigate } from 'react-router-dom';




export function Register () {
 
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

      const passwordRegister = register('password', {
        required: {
          value: true,
          message: VALIDATE_CONFIG.requiredMessage,
        },
        pattern: {
          value: PASS_REGEXP,
          message: VALIDATE_CONFIG.password,
        },
      });

      const sendData = (data) => {
        console.log({ data });
      };

      const navigate = useNavigate();
      
    return (
         <>
         <Form handleFormSubmit={handleSubmit(sendData)} title='Регистрация'>
        <div className="wrap__modal">            
            <input className="modal__email"
                 {...emailRegister}
                 type="email"
                 name="email"
                 placeholder="Email" 
            />
            {errors.email && (
            <p className='form__necessarily'>{errors?.email?.message}</p>
          )}
            <input className="modal__password"
                 {...passwordRegister}
                 type="password"
                 name="password"
                 placeholder="Пароль" 
            />
            {errors.password && (
            <p className='form__necessarily'>{errors?.password?.message}</p>
          )}
            <p className="modal__restore _modal__text-left" onClick={() =>('#')} >
                <span className="modal__restore-text ">Регистрируясь на сайте, вы соглашаетесь с нашими Правилами и Политикой конфиденциальности и соглашаетесь на информационную рассылку.</span>
            </p>
            <button type="submit" className="modal__password form__btn" >Зарегистрироваться</button>
            <button type="button" onClick={() => navigate('/login')} className="modal__password  form__btn-white" >Войти</button>
        </div>
         </Form>
         </>
    )   
};