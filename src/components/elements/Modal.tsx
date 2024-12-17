"use client";

import { IElements } from "@/utils/components/elements";

const Modal = ({ children, className }: IElements) => {
  return <div className={className}>{children}</div>;
};
export default Modal;
