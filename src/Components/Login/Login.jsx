import React, { useContext } from "react";
import { Form } from "../Form/Form";
import '../Login/Login.css'
import { useForm } from "react-hook-form";

import { useLocation, useNavigate } from 'react-router-dom';

import { login } from "../../Utils/AuthApi";
import { UserContext } from "../../Context/UserContext";
import { emailRegister, passwordRegister } from "../../Utils/Utils";



export function Login () {
 
    const { register, handleSubmit, formState: {errors} } = useForm({mode: "onBlur"});

    const {setAuthentificated} = useContext (UserContext)

    const navigate = useNavigate();
    // const location = useLocation(); 
    // const initialPath = location.state?.initialPath;

    // const emailRegister = register('email', {
    //     required: {
    //       value: true,
    //       message:
    //        VALIDATE_CONFIG.requiredMessage,
    //     },
    //     pattern: {
    //       value: EMAIL_REGEXP,
    //       message: VALIDATE_CONFIG.email,
    //     },
    //   });

    //   const passwordRegister = register('password', {
    //     required: {
    //       value: true,
    //       message: VALIDATE_CONFIG.requiredMessage,
    //     },
    //     pattern: {
    //       value: PASS_REGEXP,
    //       message: VALIDATE_CONFIG.password,
    //     },
    //   });

      const sendData = async (data) => {
        try {
        const result = await login(data);
        localStorage.setItem(`token`, result.token);
        setAuthentificated(true)
        navigate('/')
      } catch (error) {
        console.log(error);
      }
    };


    return (
         <>
         <Form handleFormSubmit={handleSubmit(sendData)} title='Вход'>
        <div className="wrap__modal">            
            <input className="modal__email"
                 {...emailRegister(register)}
                 type="email"
                 name="email"
                 placeholder="Email" 
            />
            {errors.email && (
            <p className='form__necessarily'>{errors?.email?.message}</p>
          )}
            <input className="modal__password"
                 {...passwordRegister(register)}
                 type="password"
                 name="password"
                 placeholder="Пароль" 
            />
            {errors.password && (
            <p className='form__necessarily'>{errors?.password?.message}</p>
          )}
            <p className="modal__restore" onClick={() =>('#')} >
                <span className="modal__restore-text _pointer" onClick={() => navigate('/resetpass')}>Восстановить пароль</span>
            </p>
            <button type="submit" className="modal__password form__btn" >Войти</button>
            <button type="button" className="modal__password  form__btn-white" onClick={() => navigate('/register')} >Регистрация</button>
        </div>
         </Form>
         </>
    )   
};