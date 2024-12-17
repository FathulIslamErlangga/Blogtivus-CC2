import React from "react";
import Button from "./Button";
import { useGlobalStateContext } from "@/contexts/GlobalProviderContext";

const ToggleNav = () => {
  const { onClick: onClickNav } = useGlobalStateContext();
  const { isOpen } = useGlobalStateContext();
  return (
    <>
      <Button
        className="absolute  right-15 block lg:hidden"
        onClickOpen={onClickNav}
      >
        <span
          className={`w-[30px] h-[2.5px] bg-primaryDark block my-2 ${
            isOpen ? "origin-top-left rotate-45" : " "
          }`}
        ></span>
        <span
          className={`w-[30px] h-[2.5px] bg-primaryDark block my-2 ${
            isOpen ? "scale-0" : " "
          }
                `}
        ></span>
        <span
          className={`w-[30px] h-[2.5px] bg-primaryDark block my-2 ${
            isOpen ? "origin-bottom-left -rotate-45" : " "
          }`}
        ></span>
      </Button>
    </>
  );
};

export default ToggleNav;
