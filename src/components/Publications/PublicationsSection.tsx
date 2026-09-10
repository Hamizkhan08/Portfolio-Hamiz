import FadeIn from "../ui/FadeIn";
import { FaAward, FaBook, FaCertificate, FaMedal } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const patentInfo = {
    title: "A System and a Method for Handheld, Adaptive and Confidence-Governed Skin Disorder Analysis",
    journal: "The Patent Office Journal (India)",
    issue: "Issue 11/2026, Page 29952",
    publisher: "The Patent Office, Government of India",
    patentNo: "Patent Application No. 202621003570 A",
    publishDate: "Published: 13 March 2026",
    authors: "Hamiz Afzal Khan, Noman Bhimani, Chetana Ravindra Khairnar, Shaikh Aman Enamul Haque, Sandeep G. Shukla, Akshay R. Jain",
    abstract: "A system and method for handheld skin disorder analysis facilitating dependable, offline, and point-of-care dermatological diagnosis. Combines camera-based skin image acquisition with adaptive illumination control, dual-path CNN classification, and quality-gated decision making."
};

const certifications = [
    {
        title: "IBM Data Analyst Professional Certificate",
        issuer: "IBM (Coursera)",
        date: "17/10/2025",
        link: "https://www.coursera.org/account/accomplishments/specialization/E9I8U6PK3AMO"
    },
    {
        title: "SQL Advanced Certificate",
        issuer: "HackerRank",
        date: "20/10/2025"
    },
    {
        title: "Deloitte Australia - Data Analytics Job Simulation",
        issuer: "Forage",
        date: "02/06/2025",
        link: "https://drive.google.com/file/d/1m73vGze_zevytU2t4vr9RCRK623sP_Hd/view?usp=drive_link"
    },
    {
        title: "British Airways - Data Science Job Simulation",
        issuer: "Forage",
        date: "26/06/2025",
        link: "https://drive.google.com/file/d/11BDNy065mtq7E5YeuW0hS4rb-i1gUrcS/view?usp=drive_link"
    },
    {
        title: "Accenture Nordics - Software Engineering",
        issuer: "Forage / Accenture",
        date: "19/06/2025",
        link: "https://drive.google.com/file/d/1zFxA6AIoPtIEA23I-wdg9vP2pI7Z-J_c/view?usp=drive_link"
    },
    {
        title: "JPMorgan Chase & Co. - Software Engineering",
        issuer: "Forage / JPMorgan Chase",
        date: "19/06/2025",
        link: "https://drive.google.com/file/d/13D4r2yeRaXqCVl-3kqVOWJETX_-IKN4T/view?usp=drive_link"
    },
    {
        title: "Programming in C, C++, Python, Core Java",
        issuer: "I-Tech System",
        date: "01/05/2025",
        link: "https://drive.google.com/file/d/1pCpSaGIfY1B9WEBL2HUiC7FvTJXOj_-G/view?usp=drive_link"
    },
    {
        title: "Data Science with Python",
        issuer: "Infosys Springboard",
        date: "10/09/2024",
        link: "https://drive.google.com/file/d/1_6TWxzfXEqVRWpIzx7CmX_Jkb3xeVQv8/view?usp=drive_link"
    }
];

const achievements = [
    {
        title: "Best Outgoing Student of the Year (2026)",
        detail: "Awarded for outstanding academic, technical, leadership, and extracurricular contributions.",
        link: "https://www.linkedin.com/posts/hamiz-khan-2b5866215_honored-to-receive-the-best-outgoing-student-activity-7433080974587908096-CgRT?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADZpACkBDjRL627FNq0PyO48e36tuOJHiEQ"
    },
    {
        title: "Award-Winning Final Year Project",
        detail: "AI Skin Disorder Analysis project recognized at premier engineering competitions:",
        subLinks: [
            { name: "1st Place - Sandip Foundation", url: "https://www.linkedin.com/posts/hamiz-khan-2b5866215_techfight-sandipfoundation-episcan-activity-7445815973384798208-YtlF?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADZpACkBDjRL627FNq0PyO48e36tuOJHiEQ" },
            { name: "2nd Place - MET Institute", url: "https://www.linkedin.com/posts/hamiz-khan-2b5866215_teamwork-innovation-engineering-activity-7453492346098171904-uHNw?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADZpACkBDjRL627FNq0PyO48e36tuOJHiEQ" },
            { name: "2nd Place - R. H. Sapat College", url: "https://www.linkedin.com/posts/hamiz-khan-2b5866215_technova-innovation-studentachievement-activity-7449043678402367488-eI0Y?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADZpACkBDjRL627FNq0PyO48e36tuOJHiEQ" },
            { name: "3rd Place - GCOERC", url: "https://www.linkedin.com/posts/hamiz-khan-2b5866215_techguru-projectcompetition-innovation-activity-7444751878996967424-W2vC?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADZpACkBDjRL627FNq0PyO48e36tuOJHiEQ" }
        ]
    },
    {
        title: "Top 10% Finisher - MumbaiHacks 2025 & HackWithMumbai 2025",
        detail: "Ranked in the Top 10% of competing teams at both MumbaiHacks 2025 and HackWithMumbai 2025 national hackathons.",
        subLinks: [
            { name: "MumbaiHacks 2025", url: "https://www.linkedin.com/posts/hamiz-khan-2b5866215_mumbaihacks2025-hackathon-misinformation-activity-7404613745672396800-K0El?utm_source=share&utm_medium=member_desktop&rcm=ACoAADZpACkBDjRL627FNq0PyO48e36tuOJHiEQ" },
            { name: "HackWithMumbai 2025", url: "https://www.linkedin.com/posts/hamiz-khan-2b5866215_hackwithmumbai-hackathon-innovation-activity-7377690526059216896-bMz2?utm_source=share&utm_medium=member_desktop&rcm=ACoAADZpACkBDjRL627FNq0PyO48e36tuOJHiEQ" }
        ]
    },
    {
        title: "OpenAI × NxtWave Buildathon Participant",
        detail: "Selected participant in the Maharashtra Regional Round of the OpenAI × NxtWave AI Buildathon.",
        link: "https://www.linkedin.com/posts/hamiz-khan-2b5866215_openalacademy-nxtwave-buildathon-activity-7420501891387842570-gWQP?utm_source=share&utm_medium=member_desktop&rcm=ACoAADZpACkBDjRL627FNq0PyO48e36tuOJHiEQ"
    },
    {
        title: "Vice President - Event Organizing Committee",
        detail: "Led technical events & workshops for Kaushalya 2024 & Tech Guru 2025 with over 3,000 student participants."
    },
    {
        title: "Technical Head - Coding Club",
        detail: "Organized hackathons, coding competitions, and technical workshops (03/2023 – 09/2025)."
    },
    {
        title: "House Cup Champion 3x (2024, 2025, 2026)",
        detail: "1st Place in Basketball (2024, 2025), 1st Place in Volleyball (2025), and 1st Place in Shot Put (2026). Selected for the Nashik Zonal Basketball Team (2025)."
    }
];

export default function Publications() {
    return (
        <section id="publications" className="md:py-24 py-12 w-full border-b-4 border-foreground">
            <div className="max-w-6xl mx-auto px-6 sm:px-10">
                
                {/* Patent / Publications Section Header */}
                <FadeIn>
                    <div className="text-center mb-16">
                        <span className="font-mono inline-block px-3 py-1.5 text-xs font-black tracking-wider uppercase bg-foreground text-background border-2 border-foreground mb-4 select-none">
                            Research & Recognition
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground select-none uppercase font-mono mb-4">
                            Publications & Achievements
                        </h2>
                        <div className="w-24 h-1.5 bg-foreground mx-auto mb-4" />
                        <p className="text-md sm:text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
                            Patents, certifications, professional achievements, and leadership.
                        </p>
                    </div>
                </FadeIn>

                {/* Patent Feature Box */}
                <FadeIn delay={0.1}>
                    <div className="bg-card text-foreground border-4 border-foreground p-6 sm:p-8 shadow-[8px_8px_0px_0px_var(--foreground)] mb-16">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-foreground text-background p-2.5 border-2 border-foreground font-mono">
                                <FaBook size={20} />
                            </div>
                            <div>
                                <span className="font-mono text-xs font-black uppercase tracking-wider bg-foreground/10 px-2 py-0.5 border border-foreground">
                                    Published Patent • {patentInfo.publishDate}
                                </span>
                                <h3 className="text-xl sm:text-2xl font-black mt-1">
                                    {patentInfo.title}
                                </h3>
                            </div>
                        </div>

                        <p className="text-sm sm:text-base font-medium text-foreground/80 leading-relaxed mb-4">
                            {patentInfo.abstract}
                        </p>

                        <div className="bg-background border-2 border-foreground p-4 font-mono text-xs space-y-1 text-foreground/90">
                            <div><strong className="text-foreground">Patent No:</strong> {patentInfo.patentNo}</div>
                            <div><strong className="text-foreground">Journal:</strong> {patentInfo.journal} ({patentInfo.issue})</div>
                            <div><strong className="text-foreground">Publisher:</strong> {patentInfo.publisher}</div>
                            <div><strong className="text-foreground">Authors:</strong> {patentInfo.authors}</div>
                        </div>
                    </div>
                </FadeIn>

                {/* Grid layout for Certifications & Honours */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    
                    {/* Certifications Card */}
                    <FadeIn delay={0.2} direction="right">
                        <div className="bg-card border-4 border-foreground p-6 sm:p-8 shadow-[6px_6px_0px_0px_var(--foreground)] h-full">
                            <div className="flex items-center gap-3 mb-6 border-b-3 border-foreground pb-4">
                                <FaCertificate size={22} className="text-foreground" />
                                <h3 className="text-2xl font-black uppercase font-mono">Certifications</h3>
                            </div>
                            <div className="space-y-4">
                                {certifications.map((cert, index) => (
                                    <div key={index} className="bg-background border-2 border-foreground p-3.5 shadow-[3px_3px_0px_0px_var(--foreground)] flex flex-col gap-1">
                                        <div className="flex justify-between items-start">
                                            <h4 className="font-black text-sm text-foreground flex items-center gap-1.5">
                                                <MdVerified className="text-foreground shrink-0" />
                                                {cert.title}
                                            </h4>
                                            <span className="font-mono text-[10px] font-bold uppercase bg-foreground/10 px-1.5 py-0.5 border border-foreground shrink-0">
                                                {cert.date}
                                            </span>
                                        </div>
                                        <span className="text-xs font-mono font-bold text-muted-foreground">{cert.issuer}</span>
                                        {cert.link && (
                                            <a 
                                                href={cert.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-[11px] font-mono font-black text-foreground underline hover:bg-foreground hover:text-background self-start px-1 mt-1 transition-all"
                                            >
                                                Verify Certificate &gt;
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>

                    {/* Achievements & Honours Card */}
                    <FadeIn delay={0.3} direction="left">
                        <div className="bg-card border-4 border-foreground p-6 sm:p-8 shadow-[6px_6px_0px_0px_var(--foreground)] h-full">
                            <div className="flex items-center gap-3 mb-6 border-b-3 border-foreground pb-4">
                                <FaAward size={22} className="text-foreground" />
                                <h3 className="text-2xl font-black uppercase font-mono">Honours & Leadership</h3>
                            </div>
                            <div className="space-y-4">
                                {achievements.map((item, index) => (
                                    <div key={index} className="bg-background border-2 border-foreground p-3.5 shadow-[3px_3px_0px_0px_var(--foreground)]">
                                        <h4 className="font-black text-sm text-foreground flex items-center gap-1.5 mb-1">
                                            <FaMedal className="text-foreground shrink-0 size-3.5" />
                                            {item.link ? (
                                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-2 hover:bg-foreground hover:text-background transition-all">
                                                    {item.title}
                                                </a>
                                            ) : (
                                                item.title
                                            )}
                                        </h4>
                                        <p className="text-xs font-medium text-muted-foreground leading-relaxed">
                                            {item.detail}
                                        </p>
                                        {item.link && (
                                            <a 
                                                href={item.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-[11px] font-mono font-black text-foreground underline hover:bg-foreground hover:text-background inline-block px-1 mt-1.5 transition-all"
                                            >
                                                View Announcement Post &gt;
                                            </a>
                                        )}
                                        {item.subLinks && (
                                            <div className="flex flex-wrap gap-1.5 mt-2.5 pt-2 border-t border-dashed border-foreground/20">
                                                {item.subLinks.map((sub, sIdx) => (
                                                    <a
                                                        key={sIdx}
                                                        href={sub.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="px-2 py-0.5 text-[10px] font-mono font-black bg-card text-foreground border border-foreground hover:bg-foreground hover:text-background shadow-[1.5px_1.5px_0px_0px_var(--foreground)] transition-all"
                                                    >
                                                        {sub.name} &gt;
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>

                </div>
            </div>
        </section>
    );
}
