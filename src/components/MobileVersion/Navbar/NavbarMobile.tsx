"use client";
import { IElements } from "@/utils/components/elements";
// import { useGlobalStateContext } from "@/contexts/GlobalProviderContext";
const NavbarMobile = ({ children, className }: IElements) => {
  // const { isOpen } = useGlobalStateContext();
  // console.log("nav Open" + isOpen);
  return <div className={className}>{children}</div>;
  // return <nav className={className}>{children}</nav>;
};
export default NavbarMobile;
