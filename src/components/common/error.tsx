"use client";

import { PropsWithChildren } from "react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";

import { Button } from "../ui/button";

const fallbackRender = ({ error, resetErrorBoundary }: FallbackProps) => {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <div
      role="alert"
      className="flex flex-col justify-center items-center text-center flex-wrap h-screen gap-[12px] w-full"
    >
      <p>Something went wrong:</p>
      <pre className="text-red-600 whitespace-pre-wrap">{error.message}</pre>
      <Button className="w-[80px]" onClick={resetErrorBoundary}>
        try again
      </Button>
    </div>
  );
};

const Error = ({ children }: PropsWithChildren) => {
  return (
    <ErrorBoundary fallbackRender={fallbackRender}>{children}</ErrorBoundary>
  );
};

export default Error;
