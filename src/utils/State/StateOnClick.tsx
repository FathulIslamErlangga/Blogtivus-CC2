import { useState } from "react";

export const StateOnClick = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const onClick = () => setIsOpen((prev) => !prev);
  const onClickModal = () => setIsOpenModal((prev) => !prev);

  // console.log(onClick);
  console.log("toggle" + isOpen);
  return {
    isOpen,
    isOpenModal,
    onClick,
    onClickModal,
  };
};
