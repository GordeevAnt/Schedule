import { Link } from "react-router-dom";

//
// Кнопка для перехода в личный кабинет
//

export default function Personal_Account_Button() {
    return (
        <Link className="person_acc_btn" to={'/personal_account'}>
            {/* <Person_Acc_Icon /> */}
            <p className="person_acc_btn_txt">Личный кабинет</p>
        </Link>
    )
}