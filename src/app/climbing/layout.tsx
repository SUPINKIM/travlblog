import { FC, PropsWithChildren } from "react";

import Navigator from "@/components/common/navigator";

const ClimbingLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full min-h-screen">
      <Navigator />
      <div className="max-w-5xl mx-auto p-6">{children}</div>
    </div>
  );
};

export default ClimbingLayout;
