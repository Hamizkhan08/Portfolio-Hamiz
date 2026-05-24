import { Link } from "react-scroll";
import { IoDocumentTextOutline } from "react-icons/io5";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4 md:px-8">
          <div className="max-w-4xl w-full mx-auto">
            <div className="w-full bg-card border-4 border-foreground shadow-[8px_8px_0px_0px_var(--foreground)] text-foreground overflow-hidden rounded-none transition-all duration-300">
              
              {/* Retro Window Header */}
              <div className="flex items-center justify-between bg-foreground text-background px-4 py-3 border-b-4 border-foreground select-none font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full border-2 border-background bg-background" />
                  <span className="w-3 h-3 rounded-full border-2 border-background bg-background/50" />
                  <span className="w-3 h-3 rounded-full border-2 border-background bg-transparent" />
                </div>
                <span className="text-xs font-bold tracking-widest uppercase opacity-90">
                  ZAYAR_SHEIN.EXE
                </span>
                <div className="text-[10px] sm:text-xs font-bold border-2 border-background bg-background text-foreground px-2 py-0.5 select-none hidden sm:block">
                  SYS_INIT
                </div>
              </div>

              {/* Main Content */}
              <div className="p-6 sm:p-10 md:p-12 flex flex-col gap-6 md:gap-8 text-left">
                
                {/* Greeting Badge */}
                <div className="self-start inline-flex items-center gap-2 px-3 py-1.5 border-3 border-foreground bg-foreground/5 text-foreground font-mono text-xs sm:text-sm font-bold tracking-wider uppercase shadow-[3px_3px_0px_0px_var(--foreground)]">
                  Hi, my name is
                </div>

                {/* Name */}
                <div className="space-y-2">
                  <h1 className="text-foreground text-5xl sm:text-6xl md:text-8xl font-black tracking-tight select-none leading-none">
                    Zayar Shein<span className="text-foreground/30">.</span>
                  </h1>
                  <div className="w-30 sm:w-28 h-3.5 bg-foreground mt-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.15)]" />
                </div>

                {/* Terminal Typing Prompt */}
                <div className="border-3 border-foreground bg-background p-4 shadow-[4px_4px_0px_0px_var(--foreground)] text-foreground font-mono">
                  <div className="flex items-center gap-2 text-foreground/40 text-xs mb-2 select-none">
                    <span className="w-2.5 h-2.5 rounded-full bg-foreground/60 animate-pulse" />
                    <span>terminal_status: active</span>
                  </div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold flex items-center min-h-12 leading-relaxed">
                    <span className="text-foreground mr-2.5 select-none">&gt;</span>
                    <TypeAnimation
                      sequence={[
                        'am a Full-Stack Developer.', 2000,
                        'love building web applications.', 2000,
                        'enjoy learning new technologies.', 2000
                      ]}
                      speed={50}
                      style={{ display: 'inline' }}
                      repeat={Infinity}
                    />
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-md sm:text-lg md:text-xl leading-relaxed max-w-3xl">
                  Innovative Full-Stack Developer passionate about writing clean, maintainable code and leveraging modern technologies to streamline the transition from idea to production.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-5 pt-2 w-full font-mono">
                  <Link
                    to="projects"
                    smooth={true}
                    duration={600}
                    offset={-64}
                    className="w-full sm:w-auto cursor-pointer border-3 border-foreground bg-card text-foreground text-sm sm:text-base font-bold uppercase tracking-wider px-8 py-4 rounded-none shadow-[4px_4px_0px_0px_var(--foreground)] hover:bg-foreground hover:text-background hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_var(--foreground)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all text-center flex items-center justify-center"
                  >
                    View My Projects
                  </Link>

                  <a
                    href="/ZayarShein_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto cursor-pointer border-3 border-dashed border-foreground bg-card text-foreground text-sm sm:text-base font-bold uppercase tracking-wider px-8 py-4 rounded-none shadow-[4px_4px_0px_0px_var(--foreground)] hover:bg-foreground hover:text-background hover:border-solid hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_var(--foreground)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all text-center flex items-center justify-center gap-2"
                  >
                    <IoDocumentTextOutline className="size-5 shrink-0" />
                    View Resume
                  </a>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4 sm:space-x-5 pt-4">
                  <a
                    href="https://github.com/Sxein"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="p-3 border-3 border-foreground bg-card text-foreground rounded-none shadow-[4px_4px_0px_0px_var(--foreground)] hover:bg-foreground hover:text-background hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_var(--foreground)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all"
                  >
                    <AiFillGithub className="size-7" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/zayar-shein-980bb6286/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="p-3 border-3 border-foreground bg-card text-foreground rounded-none shadow-[4px_4px_0px_0px_var(--foreground)] hover:bg-foreground hover:text-background hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_var(--foreground)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all"
                  >
                    <FaLinkedin className="size-7" />
                  </a>
                  <a
                    href="mailto:zayarshein.mmdev@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Email Address"
                    className="p-3 border-3 border-foreground bg-card text-foreground rounded-none shadow-[4px_4px_0px_0px_var(--foreground)] hover:bg-foreground hover:text-background hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_var(--foreground)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all"
                  >
                    <MdEmail className="size-7" />
                  </a>
                </div>

              </div>
            </div>
          </div>
        </section>
    );
}
