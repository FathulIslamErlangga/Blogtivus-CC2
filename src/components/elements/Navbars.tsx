"use client";
import { IElements } from "@/utils/components/elements";
// import { useGlobalStateContext } from "@/contexts/GlobalProviderContext";
const Navbars = ({ children, className }: IElements) => {
  // const { isOpen } = useGlobalStateContext();
  // console.log("nav Open" + isOpen);
  return <nav className={className}>{children}</nav>;
  // return <nav className={className}>{children}</nav>;
};
export default Navbars;
