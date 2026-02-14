/**
 * TODO 메타 데이터 동적으로 생성하기
 * @link [https://nextjs.org/docs/app/building-your-application/optimizing/metadata]
 */

import { getPost } from "@/apis/posts/get";
import Empty from "@/components/common/empty";
import PostTitle from "@/components/posts/post-title";

const PostDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const data = await getPost(id);

  if (!data) {
    return (
      <Empty className="text-base mt-16 font-semibold text-center" />
    );
  }

  return (
    <div className="w-full flex justify-center p-6 gap-2 flex-col items-center">
      <PostTitle title={data.title} thumbnail={data.thumbnail} />
      <div className="text-sm content max-w-[800px] mt-4 grid grid-cols-1 gap-3 justify-center p-6 bg-surface-2 rounded-xl border border-border text-foreground">
        <div dangerouslySetInnerHTML={{ __html: data.contents }} />
      </div>
    </div>
  );
};

export default PostDetailPage;
