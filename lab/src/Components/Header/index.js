import style from "./style.module.css";

export function Header() {
  return (
    <>
      <h1 className={style.exemplo1}>Say hello to ReactJS</h1>
      <h2 className={style.exemplo2}>
        You will learn how to use the most popular frontend library, and become
        a super ninja developer.
      </h2>
    </>
  );
}
