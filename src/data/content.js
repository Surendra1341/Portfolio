import { Github, Linkedin, Code, Mail, Phone, MapPin } from 'lucide-react';

export const personalData = {
    name: "Surendra Singh Chouhan",
    role: "Java Backend Developer | Microservices | AI Systems",
    location: "Indore, Madhya Pradesh, India",
    phone: "+91-8824438195",
    email: "Surendrasingh231206@acropolis.in",
    links: [
        { label: "LinkedIn", url: "https://www.linkedin.com/in/surendra-singh-4480a3368", icon: Linkedin },
        { label: "GitHub", url: "https://github.com/Surendra1341", icon: Github },
        { label: "LeetCode", url: "https://leetcode.com/u/Surendra_Singh_Chouhan/", icon: Code },
        { label: "Gmail", url: "mailto:kr494167@gmail.com", icon: Mail },
    ],
    about: {
        summary: "Motivated Java Backend Developer with hands-on experience in Spring Boot, FastAPI, LangChain, and AI-driven systems. Strong foundation in Data Structures, Algorithms, and System Design, focused on building scalable, secure, and maintainable backend architectures.",
        interests: [
            "Distributed systems",
            "AI + backend integrations",
            "Clean, modular microservice design",
            "Developer-first infrastructure"
        ]
    },
    skills: {
        languages: ["Java", "Python", "C++", "SQL"],
        frameworks: ["Spring Boot", "Spring AI", "FastAPI", "LangChain", "Maven", "Git"],
        databases: ["MySQL", "PostgreSQL"],
        concepts: ["OOP", "RESTful APIs", "Microservices", "RAG", "System Design", "Auth (JWT, RBAC)"]
    },
    projects: [
        {
            title: "CDC Placement Portal",
            tech: ["Spring Boot", "JWT", "RBAC", "MFA", "Docker"],
            link: "https://cdc.acropolis.teamzemo.tech/",
            period: "2025 – Present",
            description: [
                "Digitized the entire college placement workflow with a secure backend system.",
                "Implemented JWT authentication, Role-Based Access Control, and MFA (TOTP).",
                "Built placement analytics, student filtering, and Excel exports using Apache POI.",
                "Improved performance using async processing, caching, schedulers, and Docker-based deployment."
            ]
        },
        {
            title: "Omninet Core (Team Zemo)",
            tech: ["Spring Boot", "Modular Runtime", "AI Voice Stack"],
            repo: "https://github.com/Team-Zemo/omninet-core",
            period: "Jun 2025 – Aug 2025",
            description: [
                "Designed speech-enabled backend architecture for real-time AI voice workflows.",
                "Built an adaptive modular runtime for AI pipelines and multi-agent systems.",
                "Developed a hierarchical NoteManager workflow engine for advanced task routing.",
                "Implemented AI chat engine with persistent contextual memory and multi-session support."
            ]
        },
        {
            title: "Aeigies Core",
            tech: ["Realtime Defense", "Pattern Rules", "Enforcement Layer"],
            repo: "https://github.com/Team-Zemo/aeigies-core",
            description: [
                "Built a high-speed prompt misuse detection engine.",
                "Implemented multilayer auditing and attack signature mapping.",
                "Designed real-time prompt pattern analysis.",
                "Created a dynamic policy enforcement engine with hardened rule responses."
            ]
        },
        {
            title: "Swayog",
            tech: ["FastAPI", "OpenCV", "Realtime Sockets"],
            repo: "https://github.com/Team-Zemo/Swayog",
            description: [
                "Developed an AI-driven posture analysis engine for real-time corrective feedback.",
                "Built a keypoint estimation pipeline optimized for stability and accuracy.",
                "Designed for fitness apps, physiotherapy, motion training, and interactive coaching systems."
            ]
        },
        {
            title: "FitVerse Microservice",
            tech: ["Spring Boot", "Microservices", "REST APIs"],
            repo: "https://github.com/Surendra1341/FitVerse-Microservice",
            period: "Aug 2025 – Oct 2025",
            description: [
                "Built a microservices-based backend for a fitness platform.",
                "Designed REST APIs for user management, workout planning, and activity tracking.",
                "Focused on scalability, clean architecture, and service isolation."
            ]
        }
    ],
    organization: {
        title: "Team Zemo",
        role: "Core Member | Backend & Security",
        description: "Building the future of AI infrastructure. We focus on real-time security engines, adaptive modular runtimes, and computer vision systems.",
        mission: "Lightning Fast. Built Different. Community First.",
        links: [
            { label: "Website", url: "https://teamzemo.tech/" },
            { label: "GitHub", url: "https://github.com/Team-Zemo" }
        ],
        stats: [
            { label: "Repositories", value: "13+" },
            { label: "Focus", value: "AI + Security" }
        ]
    }
};
