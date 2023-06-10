import React from "react";
import "./Button.css";

export interface TestButtonProps {
  label: string;
}

const TestButton = (props: TestButtonProps) => {
  return <button>{props.label}</button>;
};

export default TestButton;
