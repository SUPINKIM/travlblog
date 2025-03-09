"use client";

import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface Visitor {
  count: number;
}

interface VisitorDispatch {
  setCount: Dispatch<SetStateAction<number>>;
}

const VisitorContext = createContext<(Visitor & VisitorDispatch) | undefined>(
  undefined
);

export const useVisitorContext = () => {
  const context = useContext(VisitorContext);

  if (!context) {
    throw new Error("useVisitorContext must be used within a VisitorProvider");
  }

  return context;
};

export const VisitorProvider: FC<PropsWithChildren> = ({ children }) => {
  const [visitor, setVisitor] = useState(0);

  return (
    <VisitorContext.Provider value={{ count: visitor, setCount: setVisitor }}>
      {children}
    </VisitorContext.Provider>
  );
};
