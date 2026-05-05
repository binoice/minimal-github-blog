import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | DevCanvas',
  description: 'About the author and CV',
};

export default function AboutPage() {
  return (
    <div className="space-y-20 pb-20">
      {/* Header section */}
      <section className="space-y-6 pt-12">
        <h1 className="text-6xl sm:text-8xl font-black tracking-tighter leading-[0.9]">Author.</h1>
        <p className="font-serif text-xl sm:text-2xl leading-relaxed text-foreground opacity-90 border-l-4 border-foreground pl-6 italic max-w-2xl">
          Software engineer, designer, and writer. Building minimal systems for maximum impact.
        </p>
      </section>

      {/* CV Section */}
      <div className="space-y-16">
        
        {/* Experience Section */}
        <section>
          <h2 className="text-3xl font-black tracking-tighter mb-8 uppercase border-b-2 border-primary pb-4">Experience</h2>
          <div className="space-y-12">
            <div className="grid md:grid-cols-[1fr_3fr] gap-4 md:gap-8 hover:opacity-80 transition-opacity">
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground pt-1">
                2021 — Present
              </div>
              <div>
                <h3 className="text-2xl font-black tracking-tighter mb-2">Senior Product Engineer</h3>
                <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Tech Corp • Remote</div>
                <p className="font-serif text-lg leading-relaxed opacity-90">
                  Leading the architecture and development of core product features. Directed the migration from legacy systems to a modern Next.js and Tailwind stack, resulting in a 40% improvement in load times and significantly better developer experience.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-[1fr_3fr] gap-4 md:gap-8 hover:opacity-80 transition-opacity">
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground pt-1">
                2018 — 2021
              </div>
              <div>
                <h3 className="text-2xl font-black tracking-tighter mb-2">Frontend Developer</h3>
                <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Creative Agency • New York</div>
                <p className="font-serif text-lg leading-relaxed opacity-90">
                  Built highly interactive, award-winning marketing sites and web applications. Collaborated closely with the design team to ensure pixel-perfect implementation and fluid animations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-3xl font-black tracking-tighter mb-8 uppercase border-b-2 border-primary pb-4">Capabilities</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Engineering</h3>
              <ul className="space-y-2 font-serif text-lg opacity-90 font-medium">
                <li>TypeScript / JavaScript</li>
                <li>React / Next.js</li>
                <li>Node.js / Express</li>
                <li>PostgreSQL / Prisma</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Design</h3>
              <ul className="space-y-2 font-serif text-lg opacity-90 font-medium">
                <li>UI / UX Design</li>
                <li>Design Systems</li>
                <li>Figma</li>
                <li>Typography</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Tools</h3>
              <ul className="space-y-2 font-serif text-lg opacity-90 font-medium">
                <li>Git / GitHub Actions</li>
                <li>Vercel / Cloud Run</li>
                <li>Tailwind CSS</li>
                <li>shadcn/ui</li>
              </ul>
            </div>
          </div>
        </section>

         {/* Education Section */}
         <section>
          <h2 className="text-3xl font-black tracking-tighter mb-8 uppercase border-b-2 border-primary pb-4">Education</h2>
          <div className="grid md:grid-cols-[1fr_3fr] gap-4 md:gap-8">
            <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground pt-1">
              2014 — 2018
            </div>
            <div>
              <h3 className="text-2xl font-black tracking-tighter mb-2">B.S. Computer Science</h3>
              <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">University of Technology</div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
