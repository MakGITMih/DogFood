import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../Context/UserContext';
import { Form } from  '../Form/Form.jsx'
import api from '../../Utils/Request'
import { VALIDATE_CONFIG } from "../Constants/Constants";
import { openNotification } from "../Notification/Notification";
import '../Profile/Profile.css'



export function Profile() {

    let navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleClick = () => {
        navigate(-1);
    };

    const { currentUser } = useContext(UserContext);

    const sendData = () => (console.log())

    // const sendData = async (data) => {
    //     try {
    //       await api.setUserInfo(data);
    //       openNotification("success", "Success", "Данные успешно изменены");
    //     } catch (error) {
    //       openNotification("error", "Error", "Что-то пошло не так");
    //     }
    //   };

    const required = {
        required: {
          value: true,
          message: VALIDATE_CONFIG.requiredMessage,
        },
      };

    // console.log(currentUser);

    return (
        <>
            <div className="profile__wrap _container">
                <div className="profile__back-title-wrap">
                    <div className="profile__back-wrap">
                        <button onClick={handleClick} className="product__btn"> {'< Назад'} </button>
                    </div>
                    <div className="profile__title-wrap">
                        <h1 className="profile__title">Мои данные</h1>
                    </div>
                </div>
                {currentUser ? ( 
                <div className="profile__info-wrap">                  
                    <div className="profile-container">
                        <Form className="" handleFormSubmit={handleSubmit(sendData)}>
                        <div className="profile__info-name">
                            <input
                                className="auth__input"
                                {...register("name", required)}
                                type="text"
                                name="name"
                                placeholder="Имя"
                                defaultValue={currentUser?.name}
                            />
                        </div>
                        <div className="profile__info-surname">
                            <input
                                className="auth__input"
                                {...register("about", required)}                             
                                type="text"
                                name="about"
                                placeholder="Обо мне"
                                defaultValue={currentUser?.about}
                            />
                        </div>
                        <div className="profile__info-phone">
                            <input
                                className="auth__input"
                                type="email"
                                name="email"
                                placeholder="Email"
                                defaultValue={currentUser?.email}
                            />
                        </div>
                        <button className='reviews__btn'>Сохранить</button>
                        </Form>
                    </div>                   
                </div>
                ) : (
                    <>Loading</>
                     )}
                <div className="profile__logout-wrap">
                    <h2 className="profile__title">Изменить пароль</h2>
                </div>
            </div>
        </>
    )
};
