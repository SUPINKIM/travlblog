import { client } from "@/constant/mongo";

export const getVisitor = async () => {
  try {
    await client.connect();

    const res = await client.db("visitor").collection("count").findOne();

    if (!res) {
      await client.db("visitor").collection("count").insertOne({ count: 0 });
    }

    return res?.count || 0;
  } catch (e) {
    console.error(e);
  } finally {
    //client.close();
  }
};
