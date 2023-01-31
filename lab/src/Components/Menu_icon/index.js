import menuIcon from "../../Images/menu-top-xs.png";
import style from "./style.module.css";

export function Menu () {
    const altText = "menu icon"
    return < img src={menuIcon} alt={altText} className={style.exemplo} />
}