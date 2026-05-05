import { getAllPosts } from "@/lib/posts";
import { SearchablePostList } from "@/components/searchable-post-list";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="space-y-16">
      <section className="space-y-6 pt-12">
        <h1 className="text-6xl sm:text-8xl font-black tracking-tighter leading-[0.9]">Insights.</h1>
        <p className="font-serif text-xl sm:text-2xl leading-relaxed text-foreground opacity-90 border-l-4 border-foreground pl-6 italic max-w-2xl">
          Thoughts, tutorials, and insights on software engineering, design, and building products.
        </p>
      </section>
      
      <SearchablePostList initialPosts={posts} />
    </div>
  );
}
