import { client } from "@/constant/mongo";

import { Contents } from "./types";

export const getPost = async (id: string): Promise<Contents | null> => {
  try {
    await client.connect();

    const res = await client
      .db("travel")
      .collection("posts")
      .findOne<Contents>({ id: parseInt(id) });

    await client.close();

    return res;
  } catch (error) {
    return null;
  }
};
