import DeclarativeIcon from "../../Images/icon1.png";
import style from "./style.module.css";

export function Card_1 () {
    const altText = "declarative image"

    return (
    <>    
    < img src={DeclarativeIcon} alt={altText} className={style.exemplo} />
    <h3>Declarative</h3>
    <h4>React makes it painless to create interactive UIs.</h4>
    </>
    );
}