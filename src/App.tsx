import React from "react";
import Batton from "./Button/Button";
import "./App.css";
import { ButtonClass } from "./Button/ButtonСlass";
import AppH1 from "././Props/AppH1";
import AppH1Class from "././Props/AppH1Class";
import AppH1Component from "././Props/AppH1Сomponent";
import Btn from "./Props/СallbackProps";

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Batton onClick={() => setCount(count + 1)} text={count} />
      <ButtonClass />
      <AppH1 userName="world" />
      <AppH1Class text="Life is Beautiful" />
      <AppH1Component>
        <AppH1Class text="Peace to the world" />
      </AppH1Component>
      <Btn onClick={(v) => alert(v)} />
    </div>
  );
}

export default App;
