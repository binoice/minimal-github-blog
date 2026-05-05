---
title: "Next.js Series - Part 2: Server Components"
date: "2024-06-02"
excerpt: "Understanding React Server Components in Next.js."
author: "DevCanvas"
tags: ["Next.js", "React"]
categories: ["Tutorial"]
collection: "Learn Next.js"
collectionOrder: 2
---

# Part 2: Server Components

Server components are the default in the Next.js App Router. This means that by default, your components are rendered on the server, and no JavaScript is sent to the client for them.

## Why Server Components?

- **Zero Bundle Size:** They don't add to the client-side JavaScript bundle.
- **Direct Backend Access:** Safely access databases or internal services directly.
- **Automatic Code Splitting:** Client components are automatically code-split.

Next, in Part 3, we will look into data fetching.
