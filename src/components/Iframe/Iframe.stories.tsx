// @ts-nocheck
import React from "react";
// import { ComponentStory, ComponentMeta } from "@storybook/react";
import Iframe from "./Iframe";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Iframe",
  component: Iframe,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Iframe {...args} />;

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  children: "Hello world!",
};

// export const ClickMe = Template.bind({});
// ClickMe.args = {
//   label: "Click me!",
// };
