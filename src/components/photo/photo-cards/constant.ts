export interface PhotoCard {
  src: string;
  size: string;
  title: string;
  date?: string;
  description: string;
}

export const videos: Array<PhotoCard> = [
  {
    src: "/australia/sydney.MOV",
    size: "460",
    title: "시드니에서 만난 오페라하우스 & 하버브릿지",
    description: "시드니에서 만난 오페라하우스 & 하버브릿지",
  },
  {
    src: "/australia/penguin.MOV",
    size: "260",
    title: "페더데일 동물원에서 만난 펭귄들",
    description: "페더데일 동물원에서 만난 펭귄들",
  },
  {
    src: "/australia/sydney2.MOV",
    size: "260",
    title: "보타닉가든 가다가 만난 아름다운 무지개 🌈",
    description: "보타닉가든 가다가 만난 아름다운 무지개 🌈",
  },
  {
    src: "/australia/slide.MOV",
    size: "195",
    title: "포트스테판 투어 가서 슬라이드 탔다!",
    description: "포트스테판 투어 가서 슬라이드 탔다~",
  },
];
