

import { navDataTypes } from "@/shared/config/types";
import MenuItem from "./MenuItem";
import { menuData } from "@/shared/config/constants";

const MenuItems = () => {
  return (
    <ul className="bg-white flex  gap-10 space-x-4  border-[#DAD9D9]">
      {menuData.map((menuItem: navDataTypes, index: number) => (
        <MenuItem key={index} menuItem={menuItem} />
      ))}
    </ul>
  );
};

export default MenuItems;
