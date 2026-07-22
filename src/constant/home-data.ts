export const SKILLS = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Vue.js",
  "Node.js",
] as const;

export const CAREERS = [
  {
    company: "레브잇",
    role: "올팜 스쿼드 FE 개발자",
    period: "2025 ~ 2026",
  },
  {
    company: "딜리셔스",
    role: "웹개발팀 FE 개발자",
    period: "2021 ~ 2025",
  },
  {
    company: "카카오",
    role: "FE 플랫폼팀 인턴",
    period: "2021.06 ~ 2021.08",
  },
  {
    company: "파프리카스토리",
    role: "UX 에이전시",
    period: "2019 ~ 2020",
  },
] as const;

export const PROJECTS = [
  {
    name: "올팜",
    desc: "온라인으로 작물을 키워 실제로 받는 앱테크 서비스",
    year: "2025",
    type: "work",
    link: "#",
    tags: ["React", "TypeScript"],
  },
  {
    name: "Alwayz",
    desc: "소셜 커머스 앱. React Native 기반 하이브리드 앱 내 웹뷰 서비스 개발",
    year: "2025",
    type: "work",
    link: "#",
    tags: ["React Native", "WebView"],
  },
  {
    name: "신상마켓",
    desc: "B2B 동대문 도소매 패션 커머스. 장바구니, 주문/결제 시스템 등 핵심 커머스 기능 개발",
    year: "2023",
    type: "work",
    link: "#",
    tags: ["React", "Next.js"],
  },
  {
    name: "콩콩팥팥",
    desc: "콩을 모아 정원을 가꾸고 토스포인트도 받을 수 있는 앱인토스 힐링 게임",
    year: "2026",
    type: "side",
    link: "https://kongkongpatpat.vercel.app/",
    tags: ["React", "TypeScript", "앱인토스"],
  },
  {
    name: "우리동네 위스키바",
    desc: "지역별 위스키 바·하이볼 바·보틀바를 지도에서 찾고, 직접 다녀온 추천 바도 확인할 수 있는 큐레이션 서비스",
    year: "2026",
    type: "side",
    link: "https://local-election-guide.vercel.app/",
    tags: ["Next.js", "TypeScript", "카카오 로컬 API"],
  },
  {
    name: "오늘의 운세",
    desc: "카드 뽑기 운세 게임 사이드 프로젝트",
    year: "2025",
    type: "side",
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
