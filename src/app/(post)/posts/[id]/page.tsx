/**
 * TODO 메타 데이터 동적으로 생성하기
 * @link [https://nextjs.org/docs/app/building-your-application/optimizing/metadata]
 */

import { getPost } from "@/apis/posts/get";
import Empty from "@/components/common/empty";
import PostTitle from "@/components/posts/post-title";

const PostDetailPage = async ({ params }: { params: { id: string } }) => {
  const data = await getPost(params.id);

  if (!data) {
    return (
      <Empty className="text-[16px] mt-[64px] font-semibold text-center" />
    );
  }

  return (
    <div className="w-full h-full flex justify-center p-[24px] gap-[8px] flex-col items-center">
      <PostTitle title={data.title} thumbnail={data.thumbnail} />
      <div className="text-[15px] content max-w-[800px] mt-[16px] grid grid-cols-1 gap-[12px] justify-center p-[24px] bg-gray-50 rounded-[8px]">
        <div dangerouslySetInnerHTML={{ __html: data.contents }} />
      </div>
    </div>
  );
};

export default PostDetailPage;
