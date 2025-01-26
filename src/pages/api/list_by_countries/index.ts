import { NextApiRequest, NextApiResponse } from "next";

import { getListByCountry } from "@/apis/countries/get";

import { ResponseData } from "../types";
import { ListByCountries } from "./types";

const GET = (country: string) => getListByCountry({ country });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData<Array<ListByCountries>>>
) {
  const country =
    typeof req.query.country === "object"
      ? req.query.country[0]
      : req.query.country || "";

  const result = (await GET(country)) as unknown as Array<ListByCountries>;

  if (result) {
    res.status(200).json({ message: "success", content: result });
    return;
  }
  res.status(500).json({ message: "fail" });
}
