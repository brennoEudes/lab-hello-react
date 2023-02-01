import JsxIcon from "../../Images/icon4.png";
import style from "./style.module.css";

export function Card_4() {
  const altText = "JSX image";
  return (
    <>
      <img src={JsxIcon} alt={altText} className={style.exemplo} />
      <h3>JSX</h3>
      <h4>Statically-typed, designed to run on moderns browsers.</h4>
    </>
  );
}
