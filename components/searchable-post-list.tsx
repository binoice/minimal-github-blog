"use client";

import { useState } from "react";
import { Post } from "@/lib/posts";
import { PostCard } from "@/components/post-card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function SearchablePostList({ initialPosts }: { initialPosts: Post[] }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = initialPosts.filter((post) => {
    const query = searchQuery.toLowerCase();
    const searchContent = `
      ${post.meta.title} 
      ${post.meta.excerpt} 
      ${post.meta.tags?.join(" ")} 
      ${post.meta.categories?.join(" ")}
    `.toLowerCase();
    
    return searchContent.includes(query);
  });

  return (
    <div className="space-y-12">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          placeholder="Search articles by title, excerpt, or tags..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-12 h-14 bg-muted border-none rounded-full focus-visible:ring-2 focus-visible:ring-ring outline-none text-base font-medium shadow-sm transition-all"
        />
      </div>
      
      {filteredPosts.length > 0 ? (
        <div className="grid gap-8">
          {filteredPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 text-muted-foreground font-serif italic text-lg">
          <p>No posts found matching &quot;{searchQuery}&quot;</p>
        </div>
      )}
    </div>
  );
}
