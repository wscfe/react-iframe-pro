import ReactDOM from "react-dom";
import React, { ReactNode, useRef, useState } from "react";

import { IframeContextProvider } from "./IframeContext";

/**
 * 1. 建议ReactIframe组件
 * 2. 支持自定义Head组件
 * 3. 支持自定义initialContent
 * 4. 支持自定义iframe内部内容的挂载节点
 * 5. 支持外部通过ref获取irame元素节点
 * 6. 支持通过contextProvider获取iframe内部的window和document对象
 *
 */

export interface IIframeProps {
  head?: ReactNode;
  srcDoc?: string;
  mountTarget?: string;
  children?: ReactNode;
}

export const Iframe: React.FC<IIframeProps> = (props) => {
  const {
    head,
    srcDoc = '<!DOCTYPE html><html><head></head><body><div id="frame-root"></div></body></html>',
    mountTarget = "#frame-root",
    children,
  } = props;

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const renderContent = () => {
    const iframeDocument = iframeRef.current?.contentDocument;
    if (!iframeDocument) return [];

    return [
      ReactDOM.createPortal(head, iframeDocument?.head),
      ReactDOM.createPortal(
        <IframeContextProvider
          value={{
            window: iframeDocument.defaultView as Window,
            document: iframeDocument,
          }}
        >
          {children}
        </IframeContextProvider>,
        iframeDocument.querySelector(mountTarget) as Element
      ),
    ];
  };

  const handleIframeLoad = () => {
    setIframeLoaded(true);
  };

  return (
    <iframe
      title="custome-iframe"
      srcDoc={srcDoc}
      ref={iframeRef}
      onLoad={handleIframeLoad}
    >
      {iframeLoaded && renderContent()}
    </iframe>
  );
};
