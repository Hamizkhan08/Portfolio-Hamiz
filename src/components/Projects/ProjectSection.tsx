import ProjectCard from "./ProjectCard";
import FadeIn from "../ui/FadeIn";
import { FaGithub } from "react-icons/fa";

const projects = [
    {
        title: "EpiScan: AI Skin Disorder Analysis",
        description: "DINOv2-based dermatological classifier (92% accuracy on 8K images) deployed on Raspberry Pi 4B with ONNX, automated LED image capture, PDF diagnostic reports, and dermatologist feedback loop.",
        technologies: ["Python", "DINOv2", "ONNX", "Raspberry Pi", "PyTorch", "OpenCV"],
        liveLink: "https://drive.google.com/drive/folders/1iGwBmGJDv11H8V_K80aTyTTTOwyrCoG1?usp=sharing",
        image: "/images/projects/episcan.jpg"
    },
    {
        title: "Grievance Resolver: AI Complaint System",
        description: "Automated citizen grievance resolution platform with automated complaint classification, sentiment analysis, voice chatbot, React 18 interface, Supabase database, and real-time analytics.",
        technologies: ["React 18", "Python", "Supabase", "AI Workflow", "Tailwind CSS"],
        liveLink: "https://grievanceresolver.vercel.app",
        image: "/images/projects/grievance_resolver.png"
    },
    {
        title: "Blinkit Sales & Operations Dashboard",
        description: "Interactive Power BI dashboard analyzing $1.20M in sales and 8,523 transactions. Engineered 8+ DAX KPIs to track sales performance, outlet tier profitability, and consumer preferences.",
        technologies: ["Power BI", "DAX", "Excel", "Data Analytics", "Data Visualization"],
        image: "/images/projects/blinkit_dashboard.png"
    },
    {
        title: "Customer Segmentation & Marketing Analysis",
        description: "RFM feature engineering and K-Means clustering on 10,000+ retail records (82% accuracy) with real-time Power BI dashboards for targeted marketing insights.",
        technologies: ["Python", "Scikit-Learn", "K-Means", "RFM Analysis", "Power BI", "Pandas"],
        image: "/images/projects/customer_segmentation.png"
    },
    {
        title: "Nutrifusion: Fitness & Nutrition Recommendation System",
        description: "AI-driven personalized health management system calculating daily caloric requirements, macro breakdowns, and generating customized weekly workout and meal plans.",
        technologies: ["Python", "Machine Learning", "Streamlit", "Pandas", "Scikit-Learn"],
        githubLink: "https://github.com/Hamizkhan08/Nutrifusion-Personalized-Fitness-and-Nutrition-Recommendation-System",
        image: "/images/projects/nutrifusion.png"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="md:py-24 py-12 w-full border-b-4 border-foreground">
             <div className="max-w-6xl mx-auto px-6 sm:px-10">
                <FadeIn>
                    <div className="text-center mb-20">
                        <span className="font-mono inline-block px-3 py-1.5 text-xs font-black tracking-wider uppercase bg-foreground text-background border-2 border-foreground mb-4 select-none">
                            My Portfolio
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground select-none uppercase font-mono mb-4">Featured Projects</h2>
                        <div className="w-24 h-1.5 bg-foreground mx-auto mb-4" />
                        <p className="text-md sm:text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
                            Featured data analytics, machine learning, and multi-agent AI systems.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    {projects.map((project, index) => (
                        <FadeIn key={index} delay={index * 0.15}>
                            <ProjectCard 
                                {...project}
                            />
                        </FadeIn>
                    ))}
                </div>

                {/* Explore All Projects Button */}
                <FadeIn delay={0.6}>
                    <div className="flex justify-center mt-16">
                        <a
                            href="https://github.com/Hamizkhan08"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer border-3 border-foreground bg-card text-foreground font-mono text-sm sm:text-base font-bold uppercase tracking-wider px-8 py-3.5 rounded-none shadow-[4px_4px_0px_var(--foreground)] hover:bg-foreground hover:text-background hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_var(--foreground)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all text-center flex items-center justify-center gap-3 select-none"
                        >
                            <FaGithub className="size-5 shrink-0" />
                            Explore All Projects on GitHub &gt;
                        </a>
                    </div>
                </FadeIn>

            </div>
        </section>
    );
}
