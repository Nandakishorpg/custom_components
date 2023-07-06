import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CloseBtnComp from "./components/CloseBtnComp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CloseBtnComp />
    </div>
  );
}

export default App;
