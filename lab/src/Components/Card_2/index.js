import ComponentsIcon from "../../Images/icon2.png";
import style from "./style.module.css";

export function Card_2() {
  const altText = "Component image";
  return (
    <>
      <img src={ComponentsIcon} alt={altText} className={style.exemplo} />
      <h3>Components</h3>
      <h4>Build encapsulated components that manage their state.</h4>
    </>
  );
}
