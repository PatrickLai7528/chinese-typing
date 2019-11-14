import React from "react";
import "./App.css";
import TypingArea from "../TypingArea";
import { paragraph } from "./paragraph";

const App: React.FC = () => {
  return (
    <div className="App">
      <TypingArea paragraph={paragraph} />
    </div>
  );
};

export default App;
