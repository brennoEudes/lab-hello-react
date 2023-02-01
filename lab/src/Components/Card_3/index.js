import SingleWayIcon from "../../Images/icon3.png";
import style from "./style.module.css";

export function Card_3() {
  const altText = "Single Way Image";
  return (
    <>
      <img src={SingleWayIcon} alt={altText} className={style.exemplo} />
      <h3>Single-Way</h3>
      <h4>A set of immutable values are passed to the component's.</h4>
    </>
  );
}
