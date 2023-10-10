import React from "react";
import Button from "./Button/Button";
import "./App.css";
import { ButtonClass } from "./Button/ButtonСlass";
import AppH1 from "././Props/AppH1";
import AppH1Class from "././Props/AppH1Class";
import AppH1Component from "././Props/AppH1Сomponent";

function App() {
  return (
    <div className="App">
      <Button />
      <ButtonClass />
      <AppH1 userName="world" />
      <AppH1Class text="Life is Beautiful" />
      <AppH1Component>
        <AppH1Class text="Peace to the world" />
      </AppH1Component>
    </div>
  );
}

export default App;
