export const SKILLS = [
  { name: "React", value: 90, color: "bg-cyan-400", icon: "programming" },
  { name: "TypeScript", value: 85, color: "bg-blue-500", icon: "programming" },
  { name: "Tailwindcss", value: 80, color: "bg-white", icon: "code" },
] as const;

export const PROJECTS = [
  {
    icon: "seedlings-solid",
    name: "올팜",
    desc: "온라인으로 작물을 키워 실제로 받는 앱테크 서비스",
    year: "2025",
    link: "#",
  },
  {
    icon: "finance",
    name: "오늘의 운세",
    desc: "카드 뽑기 게임",
    year: "2025",
    link: "https://supinkim.github.io/today-fortune/",
  },
  {
    icon: "gaming",
    name: "Christmas Scene",
    desc: "Three.js 인터랙티브",
    year: "2025",
    link: "#",
  },
  {
    icon: "shopping-cart",
    name: "신상마켓",
    desc: "B2B 동대문 도소매 패션 커머스 웹 개발",
    year: "2023",
    link: "#",
  },
] as const;

export const FAVORITES = [
  { icon: "plane", label: "여행", desc: "새로운 곳을 탐험하는 것" },
  { icon: "gaming", label: "게임", desc: "픽셀 아트 & 인디 게임" },
  { icon: "code", label: "코딩", desc: "아이디어를 현실로" },
  { icon: "book-heart-solid", label: "책", desc: "틈틈이, 자주, 많이 읽기" },
] as const;

export const SOCIAL_LINKS = [
  { icon: "globe", label: "Blog", href: "/travel" },
  { icon: "github", label: "GitHub", href: "https://github.com/SUPINKIM" },
  {
    icon: "linkedin",
    label: "linkedin",
    href: "https://www.linkedin.com/in/supinkim",
  },
] as const;

export const AVATAR_PIXELS = [
  0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0,
  0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0,
] as const;

export const FLOATING_HERO_ICONS = [
  { icon: "star", position: { top: "5rem", left: "5rem" }, duration: 3 },
  {
    icon: "startups",
    position: { top: "10rem", right: "8rem" },
    duration: 2.5,
    direction: "down" as const,
  },
  { icon: "save", position: { bottom: "10rem", left: "8rem" }, duration: 2 },
  { icon: "heart", position: { top: "15rem", left: "20rem" }, duration: 2.8 },
  {
    icon: "comment-quote",
    position: { bottom: "15rem", right: "15rem" },
    duration: 3.2,
    direction: "down" as const,
  },
] as const;

export const BG_ICONS = [
  "plane",
  "globe-americas-solid",
  "globe",
  "retro-camera",
  "plane-solid",
  "location-pin-solid",
] as const;

// 섹션 타이틀 아이콘
export const SECTION_ICONS = {
  about: "user",
  projects: "gamepad",
  favorites: "heart",
  travel: "plane",
} as const;
