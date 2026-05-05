import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "Posts");

export type PostMeta = {
  title: string;
  date: string;
  excerpt: string;
  author?: string;
  tags?: string[];
  categories?: string[];
  collection?: string;
  collectionOrder?: number;
};

export type Post = {
  meta: PostMeta;
  slug: string;
  content: string;
};

// Ensure directory exists
if (!fs.existsSync(postsDirectory)) {
  fs.mkdirSync(postsDirectory, { recursive: true });
}

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory).filter(file => file.endsWith('.md'));
}

export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    meta: {
      title: data.title ?? "Untitled",
      date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
      excerpt: data.excerpt ?? "",
      author: data.author ?? "Unknown",
      tags: data.tags ?? [],
      categories: data.categories ?? [],
      collection: data.collection,
      collectionOrder: data.collectionOrder,
    },
    content,
  };
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.meta.date > post2.meta.date ? -1 : 1));
  return posts;
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = new Set<string>();
  posts.forEach(post => {
    post.meta.tags?.forEach(tag => tags.add(tag));
  });
  return Array.from(tags);
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = new Set<string>();
  posts.forEach(post => {
    post.meta.categories?.forEach(cat => categories.add(cat));
  });
  return Array.from(categories);
}

export function getPostsByCollection(collection: string): Post[] {
  const posts = getAllPosts();
  return posts
    .filter((post) => post.meta.collection === collection)
    .sort((a, b) => {
      const orderA = a.meta.collectionOrder ?? 999;
      const orderB = b.meta.collectionOrder ?? 999;
      return orderA - orderB;
    });
}

export function getAllCollections(): string[] {
  const posts = getAllPosts();
  const collections = new Set<string>();
  posts.forEach(post => {
    if (post.meta.collection) {
      collections.add(post.meta.collection);
    }
  });
  return Array.from(collections);
}
