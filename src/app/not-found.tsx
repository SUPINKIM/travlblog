import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="w-full min-h-screen flex items-center flex-col justify-center gap-6 px-6">
      <Image
        src={"/not-found.webp"}
        priority
        height={200}
        width={220}
        sizes="auto"
        alt="not-found"
        className="opacity-80"
      />

      <div className="text-center">
        <h1 className="font-bold text-xl mb-2 text-foreground">
          페이지를 찾을 수 없습니다
        </h1>
        <p className="text-sm text-muted-foreground">
          요청하신 주소가 맞는지 다시 한 번 확인해주세요.
        </p>
      </div>

      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-brand-cyan hover:text-brand-cyan/80 transition-colors"
      >
        <ArrowLeft size={14} />
        홈으로 돌아가기
      </Link>
    </div>
  );
}
