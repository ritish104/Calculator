import { useState } from "react";
import style from "./App.module.css";
import ButtonContainer from "./component/ButtonContainer";
import Display from "./component/Display";
function App() {
  const [calValue, setCalValue] = useState("");

  const handelOnclick = (buttonText) => {
    if (buttonText === "c") {
      setCalValue("");
    } else if (buttonText === "=") {
      let result = eval(calValue);
      setCalValue(result);
    } else {
      let displayValue = calValue + buttonText;
      setCalValue(displayValue);
    }
  };

  return (
    <div className={style.container}>
      <Display displayValue={calValue} />

      <ButtonContainer handelOnclick={handelOnclick} />
    </div>
  );
}
export default App;
