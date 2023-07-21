

import { navDataTypes } from "@/shared/config/types";

import MobileMenuItem from "./MobileMenuItem";
import { menuData } from "@/shared/config/constants";

const MobileItems = () => {
  return (
    <>
      <div className="w-full text-center">
        <h2 className="lg:text-[32px] text-[17px] font-[600] text-[#3A3737]">
          All Kinds of Book in One Place
        </h2>
      </div>
      <ul className="bg-white flex gap-[20px]  border-[#DAD9D9] lg:flex-row flex-col">
        {menuData.map((menuItem: navDataTypes, index: number) => (
          <MobileMenuItem key={index} menuItem={menuItem} />
        ))}
      </ul>
    </>
  );
};

export default MobileItems;
