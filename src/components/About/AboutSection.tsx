import EducationCard from "../About/EducationCard";
import FadeIn from "../ui/FadeIn";

const educationJourney = [
    {
        year: "2026 — 2028",
        title: "Master's in Data Analytics",
        institution: {
            name: "Berlin School of Business and Innovation",
            link: "https://www.berlinsbi.com/",
            tooltipDescription: "Berlin School of Business and Innovation (BSBI), Berlin, Germany. Specialized in Data Analytics, Business Intelligence, and AI Solutions."
        },
        degree: "M.Sc. Data Analytics",
        description: "Specializing in Advanced Data Analytics, Predictive Modeling, Business Intelligence, Big Data Architectures, and Machine Learning."
    },
    {
        year: "2022 — 2026",
        title: "Bachelor's in Computer Engineering",
        institution: {
            name: "Savitribai Phule Pune University",
            link: "https://www.unipune.ac.in/",
            tooltipDescription: "A premier university in Maharashtra, India, known for academic excellence in Computer Engineering and Technology."
        },
        degree: "B.E. Computer Engineering (CGPA: 9.29 / 10)",
        achievements: {
            honors: [
                {
                    name: "Best Outgoing Student 2026",
                    years: "2026",
                    tooltipDescription: "Awarded for outstanding academic excellence, technical innovations, leadership, and extracurricular contributions."
                },
                {
                    name: "Final Year Project Award",
                    years: "2026",
                    tooltipDescription: "1st Place at Sandip Foundation, 2nd Place at MET Institute & R.H. Sapat College, 3rd Place at GCOERC for AI Skin Disorder Analysis Project."
                }
            ]
        },
        description: "Specialized in Data Analytics, Database Management Systems (DBMS), Machine Learning, Cloud Computing, and Software Engineering."
    }
];

const quickStats = [
    { value: "9.29", label: "CGPA Grade", accent: "text-foreground" },
    { value: "6+", label: "Project Competition Winner", accent: "text-foreground" },
    { value: "1", label: "Patent Published", accent: "text-foreground" },
    { value: "1.6+", label: "Years Experience", accent: "text-foreground" },
];

export default function About() {
  return (
    <section id="about" className="md:py-24 py-12 w-full border-b-4 border-foreground">
      {/* About Me Section */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground select-none uppercase font-mono">
              About Me
            </h2>
            <div className="w-16 h-2 bg-foreground mx-auto mt-3" />
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <FadeIn direction="right" delay={0.2}>
            <div className="flex flex-col gap-6 text-left text-foreground bg-card border-4 border-foreground p-6 sm:p-10 shadow-[8px_8px_0px_0px_var(--foreground)]">
              <p className="text-lg leading-relaxed font-medium">
                Data Analyst specializing in <span className="underline underline-offset-4 decoration-2 decoration-foreground font-bold">Python, SQL, Power BI, and Machine Learning</span>. I transform complex datasets into actionable business insights and intelligent data products.
              </p>
              <p className="text-lg leading-relaxed font-medium">
                With experience in CRM pipeline tracking (HubSpot & Salesforce), automated data workflows, predictive modeling, and patent-published AI systems — I strive to solve real-world problems through data-driven decisions.
              </p>

              {/* Quick Stats - Neubrutalist boxes */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-4 pt-6 border-t-4 border-foreground">
                {quickStats.map((stat, i) => (
                  <div key={i} className="text-center bg-background border-2 border-foreground p-2.5 shadow-[3px_3px_0px_0px_var(--foreground)]">
                    <div className={`text-xl sm:text-2xl font-black ${stat.accent}`}>
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-xs font-mono font-black uppercase tracking-tight text-muted-foreground mt-1 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="left" delay={0.4}>
            <div className="flex justify-center">
              {/* Picture Frame Wrapper */}
              <div className="relative w-80 h-96 bg-card border-4 border-foreground shadow-[10px_10px_0px_0px_var(--foreground)] p-3 select-none">
                <div className="w-full h-full border-2 border-foreground overflow-hidden">
                  <img 
                    src="/images/profile/profile.jpg" 
                    alt="Hamiz Khan Profile" 
                    onError={(e) => { e.currentTarget.src = "/profile.jpeg"; }}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Education Journey Section */}
      <div className="max-w-4xl mx-auto mt-28 px-6 sm:px-10">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="font-mono inline-block px-3 py-1.5 text-xs font-black tracking-wider uppercase bg-foreground text-background border-2 border-foreground mb-4 select-none">
              Academic Background
            </span>
            <h2 className="text-4xl font-black text-foreground mb-4 uppercase">Education & Growth</h2>
            <div className="w-24 h-1.5 bg-foreground mx-auto mb-4" />
            <p className="text-muted-foreground text-md sm:text-lg max-w-2xl mx-auto font-medium">
              Academic foundation in Computer Engineering, Data Science, and Machine Learning.
            </p>
          </div>
        </FadeIn>
        
        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-1 bg-foreground" />
          
          <div className="space-y-10 md:space-y-14">
            {educationJourney.map((edu, index) => (
              <FadeIn 
                key={index} 
                delay={index * 0.2}
                direction="right"
              >
                <div className="relative flex items-start">
                  {/* Robust Black Circle Marker */}
                  <div className="absolute left-4 sm:left-6 w-6 h-6 rounded-full bg-background border-4 border-foreground transform -translate-x-1/2 mt-8 z-10 shadow-[2px_2px_0px_var(--foreground)]" />
                  
                  <div className="w-full ml-10 sm:ml-14">
                    <EducationCard {...edu} />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
