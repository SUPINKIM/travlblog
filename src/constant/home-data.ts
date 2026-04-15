export const SKILLS = [
  "TypeScript",
  "React.js",
  "Vue.js",
  "Node.js",
] as const;

export const PROJECTS = [
  {
    name: "올팜",
    desc: "온라인으로 작물을 키워 실제로 받는 앱테크 서비스",
    year: "2025",
    link: "#",
    tags: ["React", "TypeScript"],
  },
  {
    name: "Alwayz",
    desc: "소셜 커머스 앱. React Native 기반 하이브리드 앱 내 웹뷰 서비스 개발",
    year: "2025",
    link: "#",
    tags: ["React Native", "WebView"],
  },
  {
    name: "신상마켓",
    desc: "B2B 동대문 도소매 패션 커머스. 장바구니, 주문/결제 시스템 등 핵심 커머스 기능 개발",
    year: "2023",
    link: "#",
    tags: ["React", "Next.js"],
  },
  {
    name: "오늘의 운세",
    desc: "카드 뽑기 운세 게임 사이드 프로젝트",
    year: "2025",
    link: "https://supinkim.github.io/today-fortune/",
    tags: ["React", "Canvas"],
  },
] as const;

export const FAVORITES = [
  { icon: "plane", label: "여행", desc: "새로운 곳을 탐험하는 것" },
  { icon: "climbing", label: "클라이밍", desc: "한 발씩, 끝까지 오르기" },
  { icon: "pencil", label: "글쓰기", desc: "생각을 글로 남기는 것" },
  { icon: "book-heart-solid", label: "책", desc: "틈틈이, 자주, 많이 읽기" },
] as const;

export const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/SUPINKIM",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/supinkim",
  },
  {
    label: "Resume",
    href: "https://my.surfit.io/w/1555709893",
  },
] as const;

export const TRAVEL_DESTINATIONS = [
  { country: "Australia", emoji: "🇦🇺", image: "/australia/opera_house.png" },
  { country: "Japan", emoji: "🇯🇵", image: "/japan/japan1.png" },
  { country: "England", emoji: "🇬🇧", image: "/london/london1.png" },
  { country: "France", emoji: "🇫🇷", image: "/paris/paris1.png" },
  { country: "Hong Kong", emoji: "🇭🇰", image: "/hongkong/hongkong1.png" },
  {
    country: "Kota Kinabalu",
    emoji: "🇲🇾",
    image: "/kota-kinabalu/kota1.png",
  },
] as const;
