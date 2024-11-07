"use client";

import { ChevronRightIcon } from "@radix-ui/react-icons";
import { FC, ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LinkButtonProps {
  label: ReactNode;
  link: string;
  className?: string;
  isShowArrowButton?: boolean;
}

const LinkButton: FC<LinkButtonProps> = ({
  label,
  className,
  link,
  isShowArrowButton = false,
}) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <div className={cn("flex items-center", className)}>
      <div onClick={!isShowArrowButton ? handleClick : undefined}>{label}</div>
      {isShowArrowButton && (
        <div className="pr-[20px]">
          <Button onClick={handleClick} variant="outline" size="icon">
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default LinkButton;
