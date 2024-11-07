import { FC } from "react";

import { cn } from "@/lib/utils";

interface EmptyProps {
  message?: string;
  className?: string;
}

const Empty: FC<EmptyProps> = ({
  message = `🙇‍♀️ 포스트를 준비중입니다... \n조금만 기다려주세요.!`,
  className = "",
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center p-[16px] whitespace-pre",
        className
      )}
    >
      {message}
    </div>
  );
};

export default Empty;
