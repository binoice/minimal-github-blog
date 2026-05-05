---
title: "Next.js Series - Part 3: Data Fetching"
date: "2024-06-03"
excerpt: "How to fetch data securely and efficiently in Next.js 15."
author: "DevCanvas"
tags: ["Next.js", "Data"]
categories: ["Tutorial"]
collection: "Learn Next.js"
collectionOrder: 3
---

# Part 3: Data Fetching

Next.js provides a simplified model for data fetching using native `fetch` API.

```javascript
export default async function Page() {
  const data = await fetch('https://api.example.com/data').then(res => res.json());
  return <main>{data.title}</main>
}
```

This concludes our mini-series! Check back later for more advanced topics.
