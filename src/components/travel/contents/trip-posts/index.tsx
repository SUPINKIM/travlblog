"use client";

import { Globe } from "lucide-react";
import { useEffect, useState } from "react";

import { ListByCountries } from "@/types/api/list_by_countries";
import { ResponseData } from "@/types";
import { Countries } from "@/types";

import TripPostCards from "./trip-post-cards";
import TripPostSelect from "./trip-post-select";

const TripPosts = () => {
  const [country, setCountry] = useState(Countries.KOTA_KINABALU);

  const [isLoading, setLoading] = useState(true);

  const [list, setList] = useState<Array<ListByCountries>>([]);

  useEffect(() => {
    const getList = async () => {
      try {
        setLoading(true);
        const res = (await (
          await fetch(`/api/list_by_countries?country=${country}`)
        ).json()) as unknown as ResponseData<Array<ListByCountries>>;

        if (res.content) {
          setList(res.content);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getList();
  }, [country]);

  return (
    <div className="py-4">
      <div className="flex items-center gap-2 mb-4">
        <Globe size={16} className="text-brand-amber" />
        <h2 className="text-lg font-semibold">Trip Posts</h2>
      </div>

      <div className="mb-6">
        <TripPostSelect setCountry={setCountry} />
      </div>

      <div className="flex pb-4 items-center min-[746px]:justify-start justify-center gap-x-4 w-full flex-wrap gap-y-4">
        {isLoading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="h-[270px] bg-surface-2 rounded-xl animate-pulse w-[340px]"
            />
          ))
        ) : (
          <TripPostCards list={list} />
        )}
      </div>
    </div>
  );
};

export default TripPosts;
