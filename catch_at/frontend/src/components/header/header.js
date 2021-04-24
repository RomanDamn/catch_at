import {Link} from "react-router-dom";
import s from "./header.module.css"

const Header = (props) => {
    let notauth = false;
    if(window.location.href.includes("notauth")){ 
        notauth = true;
    }

    return (
        <header className={s.header}>
            <button className={s.button}>about app</button>
            <Link to={props.link}>
            {!notauth && <button className={s.button}>{props.buttonTwoName}</button>}
            </Link>     
        </header>
    )
}

export default Header;