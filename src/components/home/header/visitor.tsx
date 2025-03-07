import { updateVisitor } from "@/apis/visitor/post";

const Visitor = async () => {
  const visitor = await updateVisitor();

  return (
    <div className="pr-[8px]">
      <p>🫰 누적 방문자 수 : {visitor}</p>
    </div>
  );
};

export default Visitor;
