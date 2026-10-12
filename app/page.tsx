import React from 'react';
import { 
  GitBranch,
  Globe,
  Mail, 
  FileText, 
  ExternalLink, 
  Terminal, 
  Sparkles, 
  Cpu, 
  GraduationCap 
} from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: "AstroLife Engine",
      category: "AI / NASA Space Apps",
      description: "AI-powered knowledge engine processing space biology publications into an interactive query dashboard.",
      tech: ["Python", "PyTorch", "NLP", "Streamlit"],
      github: "https://astro-life-engine.vercel.app/",
      sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/151.gif" // Mew
    },
    {
      title: "Khela Ghor",
      category: "Full Stack Web",
      description: "Community game testing platform with developer build hosting, community forums, and global low-latency chat.",
      tech: ["Next.js", "React", "Prisma", "PostgreSQL"],
      github: "https://github.com/Pugpugi/khela-ghor",
      sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/94.gif" // Gengar
    },
    {
      title: "Haven Campus Utility",
      category: "Backend Engine",
      description: "FastAPI-powered campus space locator to optimize laboratory and classroom study spot allocations. (In Progress)",
      tech: ["FastAPI", "Python", "SQL"],
      github: "https://github.com/ZarinTasnimNadia/haven-data",
      sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/700.gif" // Sylveon
    },
    {
      title: "NeonNekko",
      category: "Mobile Application",
      description: "Aesthetic anime tracker mobile app with local state caching, watchlist logging, and release schedulers.",
      tech: ["Flutter", "Dart", "Android SDK"],
      github: "https://github.com/ZarinTasnimNadia/NeonNekko",
      sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/300.gif" // Skitty
    },
    {
      title: "MaoMao Farm Engine",
      category: "Computer Graphics",
      description: "2D interactive farming simulator written with low-level coordinate transformations and OpenGL rendering loops.",
      tech: ["Python", "OpenGL", "C"],
      github: "https://github.com/Al-Saihan/MaoMao-Farm-Game",
      sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/133.gif" // Eevee
    },
    {
      title: "Gotta Catch-em All",
      category: "Full Stack Platform",
      description: "Pokémon card trading database architecture supporting real-time inventory management and secure transactions.",
      tech: ["Flask", "MySQL", "Python"],
      github: "https://github.com/ZarinTasnimNadia/CSE370L-Project-Gotta-Catchem-All",
      sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif" // Pikachu
    }
  ];

  const skillGroups = [
    { title: "Languages", items: ["Python", "JavaScript", "TypeScript", "C", "Java", "Kotlin", "SQL"] },
    { title: "Frameworks & AI", items: ["FastAPI", "Next.js", "React", "PyTorch", "TensorFlow", "Prisma", "Flask"] },
    { title: "Mobile & Tools", items: ["Flutter", "Android SDK", "Git/GitHub", "PostgreSQL", "MySQL", "Linux"] }
  ];

  return (
    <div className="min-h-screen bg-[#0b0b0f] text-gray-200 relative selection:bg-pink-500 selection:text-white">
      {/* Background Ambient Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[450px] h-[450px] bg-pink-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-pink-900/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#0b0b0f]/80 border-b border-pink-900/30 px-6 py-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/151.gif" 
              alt="Mew Sprite" 
              className="w-7 h-7 image-rendering-pixelated"
            />
            <span className="pixel-font text-xs text-pink-400 tracking-wider">MAOLINOË.DEV</span>
          </div>
          <div className="flex items-center gap-4 text-sm font-medium">
            <a href="#projects" className="hover:text-pink-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-pink-400 transition-colors">Skills</a>
            <a 
              href="/cv.pdf" 
              target="_blank" 
              rel="noreferrer"
              className="pixel-box px-3 py-1.5 bg-pink-500 text-black font-semibold text-xs rounded-sm hover:bg-pink-400 transition-all flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" /> CV
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-16 pb-24 space-y-24">
        {/* HERO SECTION */}
        <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <div className="space-y-6 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-pink-500/10 border border-pink-500/30 rounded-full text-pink-400 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>Available for Fall Internships & Roles</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Hi, I&apos;m <span className="text-pink-400 underline decoration-pink-500/40 decoration-wavy">Zarin Tasnim</span>
            </h1>

            <p className="text-gray-400 text-base leading-relaxed">
              Undergraduate Computer Science student & peer mentor building modern full-stack web architectures, mobile apps, and machine learning models.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a 
                href="#projects"
                className="pixel-box px-5 py-2.5 bg-pink-500 text-black font-bold text-xs uppercase tracking-wider hover:bg-pink-400 transition-all"
              >
                Inspect Quests / Projects
              </a>
              <div className="flex items-center gap-3">
                <a 
                  href="https://github.com/ZarinTasnimNadia" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2.5 rounded-lg border border-pink-500/20 bg-pink-950/20 hover:border-pink-500/60 hover:text-pink-400 transition-all"
                >
                  <GitBranch className="w-4 h-4" />
                </a>
                <a 
                  href="https://linkedin.com/in/zarin-tasnim-20b8b9322/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2.5 rounded-lg border border-pink-500/20 bg-pink-950/20 hover:border-pink-500/60 hover:text-pink-400 transition-all"
                >
                  <Globe className="w-4 h-4" />
                </a>
                <a 
                  href="mailto:zarin_nadia@yahoo.com" 
                  className="p-2.5 rounded-lg border border-pink-500/20 bg-pink-950/20 hover:border-pink-500/60 hover:text-pink-400 transition-all"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Aesthetic Pixel Avatar Window */}
          <div className="relative">
            <div className="pixel-box p-6 bg-[#13121a] rounded-sm relative w-64 h-64 flex flex-col items-center justify-center text-center">
              <img 
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/700.gif" 
                alt="Sylveon" 
                className="w-24 h-24 mb-2 filter drop-shadow-[0_0_12px_rgba(244,114,182,0.6)]"
              />
              <span className="pixel-font text-[10px] text-pink-300">LEVEL 2027 DEVELOPER</span>
              <span className="text-xs text-gray-400 mt-1">BRAC University • CGPA 3.74</span>
            </div>
          </div>
        </section>

        {/* THESIS CALLOUT */}
        <section className="pixel-card p-6 rounded-lg border border-pink-500/30 bg-gradient-to-r from-pink-950/30 via-[#14121a] to-[#121118] flex flex-col sm:flex-row items-center gap-5 justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-pink-400 text-xs font-semibold uppercase tracking-wider">
              <Cpu className="w-4 h-4" /> Current Research / Thesis Focus
            </div>
            <h3 className="text-base font-semibold text-white">Natural Language Procesing (NLP) </h3>
            <p className="text-xs text-gray-400 max-w-xl">
              {/* Evaluating representation bias, prompt language divergence, and religious attributions across English, Bangla, Hindi, and Urdu language models. */}
            </p>
          </div>
          <span className="pixel-font text-[9px] px-3 py-1.5 bg-pink-500/20 text-pink-300 border border-pink-500/40 rounded whitespace-nowrap">
            IN PROGRESS
          </span>
        </section>

        {/* FEATURED PROJECTS */}
        <section id="projects" className="space-y-8">
          <div className="flex justify-between items-end">
            <div>
              <span className="pixel-font text-xs text-pink-400 tracking-wider">INVENTORY</span>
              <h2 className="text-2xl font-bold text-white mt-1">Featured Projects</h2>
            </div>
            <span className="text-xs text-gray-400 font-mono">6 deployed modules</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((proj, idx) => (
              <div key={idx} className="pixel-card p-5 rounded-lg flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <img 
                      src={proj.sprite} 
                      alt="Pokemon Sprite" 
                      className="w-10 h-10 filter drop-shadow-[0_0_8px_rgba(244,114,182,0.4)]"
                    />
                    <a 
                      href={proj.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-gray-400 hover:text-pink-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  
                  <span className="text-[11px] font-semibold text-pink-400 uppercase tracking-wide">
                    {proj.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-0.5 group-hover:text-pink-300 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-gray-800">
                  {proj.tech.map((t, i) => (
                    <span 
                      key={i} 
                      className="text-[10px] font-mono px-2 py-0.5 bg-pink-950/40 text-pink-300 border border-pink-500/20 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="space-y-8">
          <div>
            <span className="pixel-font text-xs text-pink-400 tracking-wider">STATS</span>
            <h2 className="text-2xl font-bold text-white mt-1">Technical Stack</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillGroups.map((group, idx) => (
              <div key={idx} className="pixel-card p-5 rounded-lg space-y-4">
                <div className="flex items-center gap-2 text-pink-400">
                  <Terminal className="w-4 h-4" />
                  <h3 className="text-sm font-semibold uppercase tracking-wider">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-mono px-2.5 py-1 bg-[#16151f] text-gray-300 border border-gray-800 rounded hover:border-pink-500/40 hover:text-pink-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* LEADERSHIP & HONORS */}
        <section className="pixel-card p-6 rounded-lg space-y-4">
          <div className="flex items-center gap-2 text-pink-400">
            <GraduationCap className="w-5 h-5" />
            <h2 className="text-base font-bold text-white uppercase tracking-wider">Academic Honors & Mentorship</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-gray-300">
            <div className="p-3 bg-[#13121b] border border-gray-800 rounded">
              <span className="font-semibold text-pink-300">Undergraduate Peer Mentor</span>
              <p className="text-gray-400 mt-1">Facilitating CS lab troubleshooting & algorithmic reasoning sessions for BRAC University students.</p>
            </div>
            <div className="p-3 bg-[#13121b] border border-gray-800 rounded">
              <span className="font-semibold text-pink-300">5× Dean’s List Awardee</span>
              <p className="text-gray-400 mt-1">Recognized across consecutive terms for sustaining academic excellence with a 3.74 CGPA.</p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-pink-900/30 py-8 text-center text-xs text-gray-500 font-mono space-y-2">
        <p>built different</p>
        <p className="text-pink-400/80">zarin_nadia@yahoo.com</p>
      </footer>
    </div>
  );
}