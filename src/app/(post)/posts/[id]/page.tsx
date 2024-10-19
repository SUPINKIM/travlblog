/**
 * TODO 메타 데이터 동적으로 생성하기
 * @link [https://nextjs.org/docs/app/building-your-application/optimizing/metadata]
 */

import Empty from "@/components/common/empty";
import { Countries } from "@/components/home/contents/types";
import PostTitle from "@/components/posts/post-title";
import { client } from "@/contant/mongo";

interface Contents {
  title: string;
  id: number;
  contents: string;
  country: Countries;
}

const getData = async (id: string) => {
  try {
    await client.connect();

    const res = await client
      .db("travel")
      .collection("posts")
      .findOne<Contents>({ id: parseInt(id) });

    await client.close();

    return res;
  } catch (error) {
    return undefined;
  }
};

const PostDetailPage = async ({ params }: { params: { id: string } }) => {
  const data = await getData(params.id);

  if (!data) {
    return <Empty className="border-none text-[16px] font-semibold" />;
  }

  return (
    <div className="w-full h-full flex justify-center p-[24px] gap-[8px] flex-col items-center">
      <PostTitle title={data.title} />
      <div className="text-[14px] content max-w-[800px] mt-[32px] grid grid-cols-1 gap-[12px] justify-center p-[24px] bg-gray-50 rounded-[8px]">
        <div dangerouslySetInnerHTML={{ __html: data.contents }} />
      </div>
    </div>
  );
};

export default PostDetailPage;
