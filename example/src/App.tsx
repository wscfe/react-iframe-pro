import React, { useEffect } from "react";
// @ts-ignore
import { Iframe, useIframeContext } from "react-window-open";

function App() {
  return (
    <div style={{ marginTop: "50px" }}>
      <Iframe>
        <div>iframe内部的元素</div>
        <Home />
      </Iframe>
    </div>
  );
}

const Home = () => {
  const { window: iframeWindow, document: iframeDocument } = useIframeContext();
  useEffect(() => {
    console.log("wino", iframeWindow, iframeDocument);
  }, [iframeWindow, iframeDocument]);

  return <div>Home</div>;
};

export default App;
