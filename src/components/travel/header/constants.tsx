import { Pencil1Icon, VideoIcon } from "@radix-ui/react-icons";
import { ReactNode } from "react";

export const Nav: Array<{ label: string; href: string; icon?: ReactNode }> = [
  {
    label: "새 글 작성하기",
    href: "/write",
    icon: <Pencil1Icon width={18} height={18} />,
  },
  {
    label: "시드니 영상",
    href: "/videos",
    icon: <VideoIcon width={18} height={18} />,
  },
  {
    label: "🧗‍♀️ 클라이밍 리스트",
    href: "/climbing",
  },
] as const;
