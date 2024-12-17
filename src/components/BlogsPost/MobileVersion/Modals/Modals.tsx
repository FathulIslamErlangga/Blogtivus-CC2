"use client";
import Image from "next/image";
import Button from "@/components/elements/Button";
import Modal from "@/components/elements/Modal";
import { useGlobalStateContext } from "@/contexts/GlobalProviderContext";
import React, { useState } from "react";
import { debounce } from "lodash";
import { ICategory } from "@/utils/components/ApiTypes";

interface ModalsProps {
  category: ICategory[];
  onFilterCategories: (categoryId: number) => void;
  handleSearch: (query: string) => void;
}

const Modals = ({
  handleSearch,
  category,
  onFilterCategories,
}: ModalsProps) => {
  const [isValue, setValue] = useState("");
  const { onClickModal: onClickModal } = useGlobalStateContext();
  const { isOpenModal } = useGlobalStateContext();

  const handleSearching = debounce((value: string) => {
    console.log("Searching for:", value);
    handleSearch(value);
  }, 300);

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);
    handleSearching(value);
  };

  return (
    <>
      {isOpenModal && (
        <Modal className="card bg-primaryWhite w-[320px] p-5 absolute rounded-lg shadow-lg right-0 z-[999]">
          <div className="relative text-center  pb-5">
            <h1 className="text-primayDark text-lg font-semibold">Category</h1>
            <Button
              className="btn btn-sm btn-circle btn-ghost absolute -left-[20px]  -top-[20px]"
              onClickOpen={onClickModal}
            >
              ✕
            </Button>
          </div>
          <label className=" flex items-center relative">
            <input
              type="text"
              className="grow p-1 rounded-lg border-2 border-slate-500"
              placeholder="Search"
              autoFocus
              onChange={handleChanges}
              value={isValue}
            />
            <Image
              src="/images/search.png"
              alt=""
              width={25}
              height={25}
              className="opacity-70 absolute right-4"
            />
          </label>
          <div className="py-5 block">
            <ul className=" text-primaryDark text-semibold text-lg">
              {category.map((c) => (
                <li key={c.id} className="p-2">
                  <Button onClickOpen={() => onFilterCategories(c.id)}>
                    {c.name}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </Modal>
      )}
    </>
  );
};
export default Modals;
