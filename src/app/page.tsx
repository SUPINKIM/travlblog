import HomePage from "@/components/home/main";
import { getAllPosts, getPostActivityMap } from "@/lib/mdx";

export default async function Home() {
  const recentPosts = getAllPosts().slice(0, 5);
  const activityMap = getPostActivityMap();

  return <HomePage recentPosts={recentPosts} activityMap={activityMap} />;
}
