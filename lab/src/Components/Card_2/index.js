import ComponentsIcon from "../../Images/icon2.png";
import style from "./style.module.css";

export function Card_2() {
  const altText = "Component image";
  return (
    <>
      <img src={ComponentsIcon} alt={altText} className={style.exemplo} />
      <br></br>
      <h3 className={style.exemplo2}>Components</h3>
      <h4 className={style.exemplo3}>Build encapsulated components that manage their state.</h4>
    </>
  );
}
