import { useState } from "react";
import Page_Title from "../shared/Page_Title";
import "./Personal_Account_Page.css"
import Change_Login_Password_Form from "../widgets/Change_Login_Password_Form";

interface FormData {
    currentLogin: string;
    newLogin: string;
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
}

//
// Страница личного кабинета
//

export default function Personal_Account_Page() {
    const [login, setLogin] = useState("abcdefu");
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [currentFieldType, setCurrentFieldType] = useState<'login' | 'password'>('login');

    const handleChangeLogin = () => {
        setCurrentFieldType('login');
        setIsFormOpen(true);
    };

    const handleChangePassword = () => {
        setCurrentFieldType('password');
        setIsFormOpen(true);
    };

    // Функция для обработки сохранения данных из формы
    const handleSaveData = (formData: FormData) => {
        if (currentFieldType === 'login') {
            // Обновляем логин
            setLogin(formData.newLogin);
        }
        // Для пароля ничего не делаем, так как он не отображается
        // В реальном приложении здесь был бы вызов API для смены пароля
    };

    return (
        <div className="page_wrapper">
            <Page_Title title="Личный кабинет"/>

            <div className="pa_page_container">
                            
                <div className="photo_field">
                    <img src="../../img/schedule-remove.svg" alt="Фото профиля"></img>
                </div>

                <div className="pa_info_container">
                    
                    <h1 className="pa_h1">Альтман Евгений Анатольевич</h1> {/* Должно парситься с БД */}

                    <div className="info_field">
                    
                        <div className="login_field">
                            <p className="info_text">Логин: {login}</p> {/* Теперь используем состояние */}
                            <button className="nav_button" onClick={handleChangeLogin}>Сменить</button>
                        </div>
                    
                        <div className="password_field">
                            <p className="info_text">Пароль: {"•".repeat(6)}</p> {/* Скрываем реальный пароль */}
                            <button className="nav_button" onClick={handleChangePassword}>Сменить</button>
                        </div>
                    
                    </div>
                </div>
            
            </div>

            <Change_Login_Password_Form
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                fieldType={currentFieldType}
                currentLogin={login}
                onSave={handleSaveData} // Добавляем callback для сохранения
            />
        </div>
    )
}