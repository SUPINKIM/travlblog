"use client";

import { PropsWithChildren } from "react";

import ModalProvider from "@/context/modal";

const ImageCarouselProvider = ({ children }: PropsWithChildren) => {
  return <ModalProvider>{children}</ModalProvider>;
};

export default ImageCarouselProvider;
