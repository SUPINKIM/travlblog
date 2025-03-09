import { FC, PropsWithChildren } from "react";

import Navigator from "@/components/common/navigator";

const ClimbingLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full h-full">
      <Navigator />
      <div className="p-[16px]">{children}</div>
    </div>
  );
};

export default ClimbingLayout;
