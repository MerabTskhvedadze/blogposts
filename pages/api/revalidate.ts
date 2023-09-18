// https://<your-site.com>/api/revalidate?secret=<token>

// http://localhost:3000/api/revalidate?path=/&secret=31c6135820f413f81145553fcc092364

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
    return res.status(401).json({ message: "invalid token" });
  }

  const path = req.query.path as string;

  await res.revalidate(path);

  return res.json({ revalidate: true });
}
