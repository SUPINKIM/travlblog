import { client } from "@/constant/mongo";

export const createListByCountry = async (country: string) => {
  await client.connect();

  // await client.db("countries").collection(country).insertOne({
  //   id: 4,
  //   imageUrl: "",
  //   title: "호주에 가다2",
  //   subTitle: "시드니에서 볼 건 오페라하우스 & 하버브릿지가 전부...?",
  // });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");

  await client.close();
};
