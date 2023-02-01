import DeclarativeIcon from "../../Images/icon1.png";
import style from "./style.module.css";

export function Card_1 () {
    const altText = "declarative image"

    return (
    <>    
    < img src={DeclarativeIcon} alt={altText} className={style.exemplo1} />
    <h3 className={style.exemplo2}>Declarative</h3>
    <h4 className={style.exemplo3}>React makes it painless to create interactive UIs.</h4>
    </>
    );
}