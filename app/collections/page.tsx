import { getAllCollections, getPostsByCollection } from "@/lib/posts";
import Link from "next/link";
import { format } from "date-fns";

export default function CollectionsPage() {
  const collections = getAllCollections();

  return (
    <div className="space-y-16 pb-20">
      <section className="space-y-6 pt-12">
        <h1 className="text-6xl sm:text-8xl font-black tracking-tighter leading-[0.9]">Series.</h1>
        <p className="font-serif text-xl sm:text-2xl leading-relaxed text-foreground opacity-90 border-l-4 border-foreground pl-6 italic max-w-2xl">
          Deep dives, tutorials, and guided series on building software.
        </p>
      </section>

      <div className="grid gap-12">
        {collections.map(collection => {
          const posts = getPostsByCollection(collection);
          
          return (
            <div key={collection} className="border border-border bg-card p-6 sm:p-10 relative group border-l-4 hover:border-l-primary transition-all">
               <h2 className="text-3xl font-black tracking-tighter mb-4">{collection}</h2>
               <p className="font-serif text-lg text-muted-foreground italic mb-8">{posts.length} {posts.length === 1 ? 'part' : 'parts'}</p>
               
               <div className="space-y-4">
                  {posts.map((post, i) => (
                    <div key={post.slug} className="flex flex-col sm:flex-row sm:items-center gap-4 group/item">
                       <div className="w-8 shrink-0 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                         {(i + 1).toString().padStart(2, '0')}
                       </div>
                       <Link href={`/posts/${post.slug}`} className="flex-1 font-serif text-xl font-bold leading-tight hover:text-primary transition-colors">
                          {post.meta.title}
                       </Link>
                       <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                          {format(new Date(post.meta.date), 'MM-dd-yyyy')}
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          );
        })}

        {collections.length === 0 && (
          <div className="text-center py-20 font-serif italic text-lg text-muted-foreground">
             No series published yet.
          </div>
        )}
      </div>
    </div>
  );
}
