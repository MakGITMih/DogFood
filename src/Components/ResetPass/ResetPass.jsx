import React from "react";
import { Form } from "../Form/Form";
import '../Login/Login.css'
import { useForm } from "react-hook-form";
import { EMAIL_REGEXP, PASS_REGEXP, VALIDATE_CONFIG } from "../Constants/Constants";
import { authApi } from "../../Utils/AuthApi";
import { useState } from "react";
import { useContext } from "react";
import { parseJwt } from "../../Utils/ParseJWT";
import { register } from "../Register/Register";




export function ResetPass () {
 
    const { register, handleSubmit, formState: {errors} } = useForm({mode: "onBlur"});
    const [tokenResp, setTokenResp] = useState(null);
    // const { currentUser } = useContext(UserContext);
    // console.log(currentUser);

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

      const sendData = async (data) => {
        if (tokenResp) {
          const {_id} = parseJwt(data.token);
          await authApi.resetPassToken({ password: data.password }, _id, data.token);
        }
        else {
          await authApi.resetPass(data);
          setTokenResp(true);
        }
      };

      const passwordRegister = register('password', {
        required: {
          value: !!tokenResp,
          message: VALIDATE_CONFIG.requiredMessage,
        },
        pattern: {
          value: PASS_REGEXP,
          message: VALIDATE_CONFIG.password,
        },
      });
      const tokenRegister = register('token', {
        required: {
          value: !!tokenResp,
          message: VALIDATE_CONFIG.requiredMessage,
        },
      });


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
          <input className="modal__password"
                 {...passwordRegister}
                 type="password"
                 name="password"
                 placeholder="Пароль"
                //  disabled={!tokenResp} 
            />
            {errors.password && (
            <p className='form__necessarily'>{errors?.password?.message}</p>
          )}
          
          <input className='modal__token'
            {...tokenRegister} 
            type='text'
            name='token'
            placeholder='Token'
            // disabled={!tokenResp}
          />
            <p className="modal__restore _modal__text-left _modal__margin-top">
                <span className="modal__restore-text ">Срок действия временного пароля 24 ч.</span>
            </p>
            <button type="submit" className="modal__password form__btn" >Отправить</button>  
        </div>
         </Form>
         </>
    )   
};