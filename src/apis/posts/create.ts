import { API_ENDPOINTS } from "@/constant/api";
import { RequestData } from "@/pages/api/new_post/types";

export const createPost = async ({
  title,
  country,
  contents,
}: RequestData): Promise<{ message: "success" | "fail" }> =>
  (
    await fetch(API_ENDPOINTS.NEW_POST, {
      method: "POST",
      body: JSON.stringify({
        title,
        country,
        contents,
        //images: [],
      }),
    })
  ).json();
