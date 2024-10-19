import Image from "next/image";

export default function Custom404() {
  return (
    <div className="w-full h-screen flex items-center flex-col flex-wrap justify-center">
      <Image
        src={"/not-found.webp"}
        priority
        height={300}
        width={320}
        sizes="auto"
        alt="not-found"
      />

      <h1 className="font-semibold mt-[24px] text-[16px]">
        요청하신 페이지를 찾을 수 없습니다.
      </h1>
      <h2>주소가 맞는지 다시 한 번 확인 부탁드려요!</h2>
    </div>
  );
}
