import { client } from "@/constant/mongo";

import { getVisitor } from "./get";

export const updateVisitor = async () => {
  try {
    await client.connect();

    const count = await getVisitor();

    await client
      .db("visitor")
      .collection("count")
      .updateOne({}, { $inc: { count: 1 } });

    return count + 1;
  } catch (e) {
    console.error(e);
  } finally {
    // client.close();
  }
};
