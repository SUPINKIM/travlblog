import HomePage from "@/components/home/main";
import { getAllPosts, getPostActivityMap } from "@/lib/mdx";

export default async function Home() {
  const recentPosts = getAllPosts().slice(0, 5);
  const activityMap = getPostActivityMap();
  const currentYear = Number(
    new Intl.DateTimeFormat("en", {
      year: "numeric",
      timeZone: "Asia/Seoul",
    }).format(new Date())
  );

  return (
    <HomePage
      recentPosts={recentPosts}
      activityMap={activityMap}
      currentYear={currentYear}
    />
  );
}
