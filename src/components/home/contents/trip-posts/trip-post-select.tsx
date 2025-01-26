"use client";
import { Dispatch, FC, SetStateAction } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Countries } from "@/types";

interface TripPostSelectProps {
  setCountry: Dispatch<SetStateAction<Countries>>;
}

const TripPostSelect: FC<TripPostSelectProps> = ({ setCountry }) => {
  return (
    <Select onValueChange={(value) => setCountry(value as Countries)}>
      <SelectTrigger className="max-w-[200px] h-[42px]">
        <SelectValue placeholder={Countries.KOTA_KINABALU} />
      </SelectTrigger>
      <SelectContent>
        {Object.values(Countries).map((country) => (
          <SelectItem className="h-[36px]" key={country} value={country}>
            {country}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default TripPostSelect;
