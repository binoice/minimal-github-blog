import { getAllPosts } from "@/lib/posts";
import { NextResponse } from "next/server";

export async function GET() {
  const posts = getAllPosts();
  let siteUrl = process.env.APP_URL || "https://example.com";
  
  if (siteUrl.endsWith('/')) {
    siteUrl = siteUrl.slice(0, -1);
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>DevCanvas</title>
    <link>${siteUrl}</link>
    <description>A clean, markdown-based blogging platform.</description>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
    ${posts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.meta.title}]]></title>
      <link>${siteUrl}/posts/${post.slug}</link>
      <guid>${siteUrl}/posts/${post.slug}</guid>
      <pubDate>${new Date(post.meta.date).toUTCString()}</pubDate>
      <description><![CDATA[${post.meta.excerpt}]]></description>
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
