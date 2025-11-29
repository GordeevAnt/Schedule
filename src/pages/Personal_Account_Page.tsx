import Page_Title from "../shared/Page_Title";
import "./Personal_Account_Page.css"

//
// Страница личного кабинета
//

const _LOGIN_ = "abcdefu"
const _PASSWORD_ = "123321"

export default function Personal_Account_Page() {
    return (
        <div className="page_wrapper">
            <Page_Title title="Личный кабинет"/>

            <div className="pa_page_container">
                            
                <div className="photo_field">
                    <img src="../../img/schedule-remove.svg"></img>
                </div>

                <div className="pa_info_container">
                    
                    <h1 className="pa_h1">Альтман Евгений Анатольевич</h1> {/* Должно парситься с БД */}

                    <div className="info_field">
                    
                        <div className="login_field">
                            <p className="info_text">Логин: {_LOGIN_}</p> {/* Должно парситься с БД */}
                            <button className="nav_button">Сменить</button>
                        </div>
                    
                        <div className="password_field">
                            <p className="info_text">Пароль: {_PASSWORD_}</p> {/* Должно парситься с БД */}
                            <button className="nav_button">Сменить</button>
                        </div>
                    
                    </div>
                </div>
            
            </div>
        </div>
    )
}