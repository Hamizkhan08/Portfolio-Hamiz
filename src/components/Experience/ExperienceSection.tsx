import ExperienceCard from "./ExperienceCard";
import FadeIn from "../ui/FadeIn";

const workExperiences = [
    {
        role: "Data Analyst",
        company: "Falcon Design Solutions (Texas, United States)",
        companyLink: "https://falcondspl.com/",
        duration: "08/2025 – Present",
        description: "Managed 120+ client records & sales pipelines in HubSpot CRM for steel detailing projects. Developed Excel trackers & Power BI dashboards monitoring deal stages and operational performance, reducing manual reporting time by 30%.",
        technologies: ["HubSpot CRM", "Power BI", "Excel & DAX", "Data Visualization", "Process Automation"],
    },
    {
        role: "Data Analyst",
        company: "JPW Engineering Services (Nashik, India)",
        companyLink: "https://www.linkedin.com/company/jpw-engineering-services-pvt-ltd",
        duration: "02/2025 – 07/2025",
        description: "Maintained and updated 80+ project & client records within Salesforce CRM. Structured datasets and generated weekly progress reports, coordinating with 4 internal teams and clients for smooth execution.",
        technologies: ["Salesforce CRM", "Data Structuring", "Excel Reports", "Project Tracking"],
    },
    {
        role: "AI Summer Intern",
        company: "Mirai School of Technology",
        duration: "07/2025 – 08/2025",
        description: "Built real-world AI applications using Machine Learning, Deep Learning, NLP, and Computer Vision. Contributed to LLM-powered assistants integrated into course modules, reducing teaching workload by 30%.",
        technologies: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "LLM Assistants"],
        certificateLink: "https://drive.google.com/file/d/1m6Zj_aQHloqz02Qep3IDjY4ya4IXDOUs/view?usp=drive_link"
    },
    {
        role: "Data Science Intern",
        company: "NetLeap IT Training and Solutions",
        duration: "12/2024 – 02/2025",
        description: "Developed a Personalized Fitness & Nutrition Recommendation System using Python, Flask, and Random Forest. Selected as one of NetLeap's best projects for the 2024-25 batch.",
        technologies: ["Python", "Flask", "Random Forest", "Scikit-Learn"],
        certificateLink: "https://drive.google.com/file/d/1H2hTYGMHQVwKD6Ic03oiJZKDc8a3iTZs/view?usp=drive_link"
    }
];

const virtualInternships = [
    {
        role: "Python Fullstack Developer Virtual Intern",
        company: "Virtual Internship",
        duration: "04/2026 – 06/2026",
        description: "Developed responsive full-stack web applications using Python, HTML, CSS, JavaScript, and SQL. Built RESTful APIs, implemented CRUD operations, and integrated databases following software engineering best practices.",
        technologies: ["Python", "SQL", "HTML/CSS", "JavaScript", "REST APIs"],
        certificateLink: "https://drive.google.com/file/d/1jGf13LmQ_FILnrRtkbAcAQLQjzaqPGj9/view?usp=drive_link"
    },
    {
        role: "Google AI-ML Virtual Intern",
        company: "Google AI-ML Program",
        duration: "01/2025 – 03/2025",
        description: "Completed an intensive 10-week virtual internship in artificial intelligence, focusing on data preprocessing, ML model training, evaluation, and deploying practical AI solutions.",
        technologies: ["Artificial Intelligence", "Machine Learning", "Data Preprocessing", "Model Building"],
        certificateLink: "https://drive.google.com/file/d/1QXe6FnCm9bE8VioU3S9T16jQh6a_D8Gk/view?usp=drive_link"
    }
];

export default function Experience() {
    return (
        <section id="experience" className="md:py-24 py-12 w-full border-b-4 border-foreground">
            <div className="max-w-4xl mx-auto px-6 sm:px-10">
                <FadeIn>
                    <div className="text-center mb-16">
                        <span className="font-mono inline-block px-3 py-1.5 text-xs font-black tracking-wider uppercase bg-foreground text-background border-2 border-foreground mb-4 select-none">
                            My Path
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground select-none uppercase font-mono">Experience & Internships</h2>
                        <div className="w-16 h-2 bg-foreground mx-auto mt-3 mb-4" />
                        <p className="text-md sm:text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
                            Professional industry experience and specialized virtual internships.
                        </p>
                    </div>
                </FadeIn>
                
                {/* Section 1: Work Experience */}
                <div className="mb-16">
                    <FadeIn>
                        <div className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-1.5 border-3 border-foreground shadow-[3px_3px_0px_var(--foreground)] font-mono text-sm font-black uppercase tracking-wider mb-8 select-none">
                            Work Experience
                        </div>
                    </FadeIn>
                    <div className="relative max-w-3xl mx-auto">
                        <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-1 bg-foreground" />
                        <div className="space-y-10">
                            {workExperiences.map((exp, index) => (
                                <FadeIn key={index} delay={index * 0.15}>
                                    <div className="relative flex items-start">
                                        <div className="absolute left-4 sm:left-6 w-6 h-6 rounded-full bg-background border-4 border-foreground transform -translate-x-1/2 top-8 z-10 shadow-[2px_2px_0px_var(--foreground)]" />
                                        <div className="w-full ml-10 sm:ml-14">
                                            <ExperienceCard {...exp} />
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Section 2: Virtual Internships */}
                <div>
                    <FadeIn>
                        <div className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-1.5 border-3 border-foreground shadow-[3px_3px_0px_var(--foreground)] font-mono text-sm font-black uppercase tracking-wider mb-8 select-none">
                            Virtual Internships
                        </div>
                    </FadeIn>
                    <div className="relative max-w-3xl mx-auto">
                        <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-1 bg-foreground" />
                        <div className="space-y-10">
                            {virtualInternships.map((exp, index) => (
                                <FadeIn key={index} delay={index * 0.15}>
                                    <div className="relative flex items-start">
                                        <div className="absolute left-4 sm:left-6 w-6 h-6 rounded-full bg-background border-4 border-foreground transform -translate-x-1/2 top-8 z-10 shadow-[2px_2px_0px_var(--foreground)]" />
                                        <div className="w-full ml-10 sm:ml-14">
                                            <ExperienceCard {...exp} />
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
