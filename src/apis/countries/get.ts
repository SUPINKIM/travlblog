import { client } from "@/constant/mongo";

interface RequestParams {
  country: string;
}

export const getListByCountry = async ({ country }: RequestParams) => {
  try {
    await client.connect();

    const res = await client
      .db("countries")
      .collection(country)
      .find()
      .toArray();

    return res;
  } catch (error) {
    return [];
  }
};
