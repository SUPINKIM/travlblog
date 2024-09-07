"use client";
import { Dispatch, FC, SetStateAction } from "react";
import {
  Select,
  SelectTrigger,
  SelectItem,
  SelectValue,
  SelectContent,
} from "@/components/ui/select";
import { Countries } from "../types";

interface TripPostSelectProps {
  setCountry: Dispatch<SetStateAction<string>>;
}

const TripPostSelect: FC<TripPostSelectProps> = ({ setCountry }) => {
  return (
    <Select onValueChange={setCountry}>
      <SelectTrigger className="max-w-[200px]">
        <SelectValue placeholder="country" />
      </SelectTrigger>
      <SelectContent>
        {Object.values(Countries).map((country) => (
          <SelectItem key={country} value={country}>
            {country}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default TripPostSelect;
