import { Link } from "react-router-dom";
import "./Button.css"

//
// Кнопка для перехода в личный кабинет
//

export default function Personal_Account_Button() {
    return (
        // <Link className="person_acc_btn" to={'/personal_account'}>
        //     {/* <Person_Acc_Icon /> */}
        //     <p className="person_acc_btn_txt">Личный кабинет</p>
        // </Link>

        <Link className="btn btn--md" to={'/personal_account'}>
            <p className="person_acc_btn_txt">Личный кабинет</p>
        </Link>
    )
}