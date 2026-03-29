"use client";

import { FC } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Countries } from "@/types";

interface FlagButtonProps {
  selectedCountry?: Countries;
  onClick: (country: Countries) => void;
}

const flags: Record<Countries, { id: Countries; value: string }> = {
  [Countries.AUSTRALIA]: {
    id: Countries.AUSTRALIA,
    value: "🇦🇺",
  },
  [Countries.JAPAN]: {
    id: Countries.JAPAN,
    value: "🇯🇵",
  },
  [Countries.ENGLAND]: {
    id: Countries.ENGLAND,
    value: "🇬🇧",
  },
  [Countries.FRANCE]: {
    id: Countries.FRANCE,
    value: "🇫🇷",
  },
  [Countries.HONG_KONG]: {
    id: Countries.HONG_KONG,
    value: "🇭🇰",
  },
  [Countries.SINGAPORE]: {
    id: Countries.SINGAPORE,
    value: "🇸🇬",
  },
  [Countries.VIETNAM]: {
    id: Countries.VIETNAM,
    value: "🇻🇳",
  },
  [Countries.KOTA_KINABALU]: {
    id: Countries.KOTA_KINABALU,
    value: "🇲🇾",
  },
};

const FlagButton: FC<FlagButtonProps> = ({ selectedCountry, onClick }) => {
  return (
    <>
      {Object.values(flags).map(({ id, value }) => (
        <Button
          variant="ghost"
          key={id}
          className={cn("text-[24px]", selectedCountry === id && "bg-gray-100")}
          onClick={() => onClick(id)}
        >
          {value}
        </Button>
      ))}
    </>
  );
};

export default FlagButton;
