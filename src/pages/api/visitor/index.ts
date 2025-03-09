import { NextApiRequest, NextApiResponse } from "next";

import { updateVisitor } from "@/apis/visitor/post";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ message: string; value?: number }>
) {
  const result = await updateVisitor();

  if (result) {
    res.status(200).json({ message: "success", value: result });
    return;
  }
  res.status(500).json({ message: "fail" });
}
