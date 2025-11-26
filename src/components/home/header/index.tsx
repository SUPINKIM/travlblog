import { Link1Icon, Link2Icon, PlusIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

import LinkButton from "@/components/common/link-button";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

import { Nav } from "./constants";

const Header = () => {
  return (
    <div className="flex w-full items-center justify-between flex-wrap gap-[8px]">
      <div className="flex items-center gap-x-[8px]">
        <Image src="/profile.png" alt="thumbnail" width={100} height={100} />
        <div className="flex flex-col gap-y-[6px]">
          <h1 className="font-semibold text-[22px]">{"Supin's blog"}</h1>
          <h6 className="text-gray-800 text-[14px]">수킴의 일기장 📒</h6>
        </div>
      </div>

      <div className="flex items-center gap-x-[8px]">
        {/* <Visitor /> */}
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger className="flex gpa-x-[4px] cursor-pointer">
              <PlusIcon width={18} height={18} />
              <span>More</span>
              <MenubarContent>
                {Nav.map(({ label, href, icon }) => (
                  <MenubarItem key={label} className="cursor-pointer">
                    <Link href={href} className="flex gap-x-[6px] w-full">
                      {icon}
                      <span>{label}</span>
                    </Link>
                  </MenubarItem>
                ))}
              </MenubarContent>
            </MenubarTrigger>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger className="flex gap-x-[4px] cursor-pointer">
              <Link1Icon width={18} />
              <span>OutLink</span>
            </MenubarTrigger>
            <MenubarContent align="end">
              <MenubarItem className="cursor-pointer">
                <LinkButton
                  className="w-full"
                  link="https://my.surfit.io/w/1555709893"
                  label={
                    <div className="flex gap-x-[6px] w-full">
                      <Link2Icon height={18} width={18} />
                      <span>이력서</span>
                    </div>
                  }
                />
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </div>
  );
};

export default Header;
