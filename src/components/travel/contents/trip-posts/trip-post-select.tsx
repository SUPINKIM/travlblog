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
      <SelectTrigger className="max-w-[200px] h-10 bg-surface-2 border-border text-foreground">
        <SelectValue placeholder="Select country..." />
      </SelectTrigger>
      <SelectContent className="bg-surface-2 border-border">
        {Object.values(Countries).map((country) => (
          <SelectItem
            className="h-9 text-foreground hover:bg-surface-3 focus:bg-surface-3"
            key={country}
            value={country}
          >
            {country}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default TripPostSelect;
