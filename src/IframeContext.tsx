import { createContext, useContext } from "react";

export interface IIframeContext {
  document?: Document;
  window?: Window;
}

const IframeContext = createContext<IIframeContext>({});

export const IframeContextProvider = IframeContext.Provider;

export const useIframeContext = () => {
  return useContext(IframeContext);
};
