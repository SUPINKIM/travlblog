import { Link1Icon, Link2Icon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

import LinkButton from "@/components/common/link-button";

import { Nav } from "./constants";
import Visitor from "./visitor";

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
        <Visitor />
        <div className="flex items-center gap-x-[8px] flex-wrap justify-end">
          {Nav.map(({ label, href, icon }) => (
            <Link
              key={label}
              href={href}
              className="flex items-center gap-x-[6px] rounded-md border border-border px-3 py-2 text-sm hover:bg-muted"
            >
              {icon}
              <span>{label}</span>
            </Link>
          ))}
          <LinkButton
            className="rounded-md border border-border px-3 py-2"
            link="https://my.surfit.io/w/1555709893"
            label={
              <div className="flex items-center gap-x-[6px] w-full text-sm">
                <Link1Icon height={18} width={18} />
                <Link2Icon height={18} width={18} />
                <span>이력서</span>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
