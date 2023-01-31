import IronLogo from "../../Images/ironhack-logo-xs.png";
import style from "./style.module.css";


export function Logo () {
    const altText = "IronHack Logo"
    return < img src={IronLogo} alt={altText} className={style.exemplo} />
}