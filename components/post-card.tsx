import Link from "next/link";
import { format } from "date-fns";
import { Post } from "@/lib/posts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function PostCard({ post }: { post: Post }) {
  return (
    <Card className="flex flex-col overflow-hidden border border-border bg-card p-4 sm:p-8 hover:shadow-lg transition-all relative rounded-none border-l-4 hover:border-l-primary group">
      <Link href={`/posts/${post.slug}`} className="absolute inset-0 z-10">
        <span className="sr-only">View post</span>
      </Link>
      <div className="space-y-6">
        <div>
          <h3 className="text-3xl sm:text-4xl font-black tracking-tighter leading-[1.1] mb-4 group-hover:opacity-80 transition-opacity">{post.meta.title}</h3>
          <p className="font-serif text-lg sm:text-xl leading-relaxed text-foreground opacity-90 line-clamp-3 border-l-2 border-primary/20 pl-4 italic">
            {post.meta.excerpt}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-muted">
          <div className="flex gap-2 flex-wrap relative z-20">
            {post.meta.categories?.map((category) => (
              <span key={category} className="text-[10px] px-2 py-1 bg-primary text-primary-foreground rounded uppercase font-bold tracking-[0.1em]">{category}</span>
            ))}
            {post.meta.tags?.map((tag) => (
              <span key={tag} className="text-[10px] px-2 py-1 bg-accent text-accent-foreground rounded uppercase font-bold tracking-[0.1em]">{tag}</span>
            ))}
          </div>
          <div className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground flex items-center space-x-4">
            <span>{format(new Date(post.meta.date), 'MMMM dd, yyyy')}</span>
            <span>{post.meta.author}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
