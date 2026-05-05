import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Metadata } from "next";
import { Separator } from "@/components/ui/separator";

type Props = {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return {
      title: `${post.meta.title} | DevCanvas`,
      description: post.meta.excerpt,
      keywords: post.meta.tags,
    };
  } catch (error) {
    return {
      title: "Post Not Found",
    };
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  let post;
  
  try {
    post = getPostBySlug(slug);
  } catch (error) {
    notFound();
  }

  return (
    <article className="prose dark:prose-invert prose-slate max-w-2xl mx-auto hover:prose-a:text-primary pb-20 prose-headings:font-black prose-headings:tracking-tighter prose-h1:text-4xl prose-h2:text-3xl prose-p:font-serif prose-p:text-xl prose-p:leading-relaxed prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:font-serif prose-blockquote:text-xl">
      <div className="mb-16 text-center space-y-6 not-prose">
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9]">{post.meta.title}</h1>
        
        <div className="flex items-center justify-center space-x-4 text-xs font-bold uppercase tracking-widest text-muted-foreground mt-8">
          <span>{format(new Date(post.meta.date), 'MMMM dd, yyyy')}</span>
          <span>•</span>
          <span>{post.meta.author}</span>
        </div>
        
        <div className="flex gap-2 justify-center flex-wrap pt-4">
          {post.meta.categories?.map((category) => (
            <span key={category} className="text-[10px] px-2 py-1 bg-primary text-primary-foreground rounded uppercase font-bold tracking-[0.1em]">{category}</span>
          ))}
          {post.meta.tags?.map((tag) => (
             <span key={tag} className="text-[10px] px-2 py-1 bg-accent text-accent-foreground rounded uppercase font-bold tracking-[0.1em]">{tag}</span>
          ))}
        </div>
      </div>

      <ReactMarkdown 
        remarkPlugins={[remarkGfm]} 
        rehypePlugins={[rehypeRaw]}
        components={{
          img: ({node, ...props}) => (
             // eslint-disable-next-line @next/next/no-img-element
            <img {...props} className="rounded-none border border-border shadow-sm mx-auto max-w-full h-auto mt-12 mb-12" alt={props.alt || "Article image"} />
          )
        }}
      >
        {post.content}
      </ReactMarkdown>
    </article>
  );
}
