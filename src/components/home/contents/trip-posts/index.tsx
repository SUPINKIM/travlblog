"use client";

import { useEffect, useState } from "react";

import { ListByCountries } from "@/pages/api/list_by_countries/types";
import { ResponseData } from "@/pages/api/types";
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
    <div className="border-t border-gray-200 py-[8px]">
      <div className="py-[12px]">
        <div className="flex gap-[8px] justify-between flex-wrap">
          <TripPostSelect setCountry={setCountry} />
        </div>
      </div>
      <div className="flex pb-[8px] items-center min-[746px]:justify-start justify-center gap-x-[18px] w-full flex-wrap gap-y-[24px]">
        {isLoading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="h-[270px] bg-gray-100 rounded-[24px] animate-pulse w-[340px]"
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
