import style from "./ButtonContainer.module.css";

const buttons = [
  "c",
  "1",
  "2",
  "+",
  "3",
  "4",
  "-",
  "5",
  "6",
  "*",
  "7",
  "8",
  "/",
  "=",
  "9",
  "0",
  ".",
];

const ButtonContainer = ({ handelOnclick }) => {
  return (
    <div className={style.buttonContainer}>
      {buttons.map((button) => {
        return (
          <button
            key={button}
            className={style.button}
            onClick={() => handelOnclick(button)}
          >
            {button}
          </button>
        );
      })}
    </div>
  );
};
export default ButtonContainer;
