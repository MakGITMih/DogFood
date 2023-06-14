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

    const { currentUser,setCurrentUser } = useContext(UserContext);

    const sendData = async ({ about, name }) => {
        try {
          const body = { about, name };
          const newUser = await api.setUserInfo(body);
          setCurrentUser({ ...newUser });
          openNotification("success", "Success", "Данные успешно изменены");
        } catch (error) {
          openNotification("error", "Error", "Что-то пошло не так");
        }
      };

    const required = {
        required: {
          value: true,
          message: VALIDATE_CONFIG.requiredMessage,
        },
      };

      const changeAvatar = async (src) => {
        try {
          const newUser = 
          await api.editUserAvatar({ avatar: src.avatar });
          setCurrentUser({ ...newUser });
        } catch (error) {
          openNotification("error", "Error", "Не удалось изменить аватар");
        }
      };

      const handleLogout = () => {
        // localStorage.removeItem("token");
        navigate("/login");
      };

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
                                        className="profile__name-input"
                                        {...register("name", required)}
                                        type="text"
                                        name="name"
                                        placeholder="Имя"
                                        defaultValue={currentUser?.name}
                                    />
                                    {errors.name && (
                                        <p className="profile__name-error">{errors?.name?.message}</p>
                                    )}
                                </div>
                                <div className="profile__info-about">
                                    <input
                                        className="profile__about-input"
                                        {...register("about", required)}
                                        type="text"
                                        name="about"
                                        placeholder="Обо мне"
                                        defaultValue={currentUser?.about}
                                    />
                                    {errors.about && (
                                        <p className="profile__about-error">{errors?.about?.message}</p>
                                    )}
                                </div>
                        <div className="profile__info-email">
                            <input
                                className="profile__email-input"
                                type="email"
                                name="email"
                                placeholder="Email"
                                defaultValue={currentUser?.email}
                            />
                        </div>
                        <button className='reviews__btn'>Сохранить</button>
                        </Form>
                            <Form className=""handleFormSubmit={handleSubmit(changeAvatar)}>
                                <div className="profile__avatar">
                                    <div className="reviews__wrap-avatar">
                                        <img className="reviews__avatar" src={currentUser?.avatar} alt="avatar" />
                                    </div>
                                    <input
                                        {...register("avatar", required)}
                                        className="profile__avatar-input"
                                        type="text"
                                        name="avatar"
                                        placeholder="Avatar"
                                        defaultValue={currentUser?.avatar}
                                    />
                                    {errors.name && (
                                        <p className="auth__error">{errors?.name?.message}</p>
                                    )}
                                </div>
                                <button className='reviews__btn'>Изменить аватар</button>
                            </Form>
                        </div>
                    </div>
                ) : (
                    <>Loading</>
                )}
                <div className="profile__logout-wrap">
                    <div className="profile__logout">
                        <button className='reviews__btn' onClick={handleLogout}>
                            Выйти
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
};
