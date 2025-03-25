import { Mentor } from "@/types";

export const mentorsData: Mentor[] = [
    {
        id: "1",
        name: "Jenny Rose",
        position: "Sr. Software Engineering",
        company: "Google",
        skills: [
            "iOS Development",
            "Cloud",
            "Python",
            "Full-stack",
            "Frontend",
            "Career",
            "Job Search",
            "Team Development",
            "Tech Development",
            "Product Management",
        ],
        image: "/images/jenny-rose.jpg",
        rating: 5,
        experience: [
            "iOS Development",
            "Cloud",
            "Python",
            "Full-stack",
            "Frontend Development",
            "Team Development",
            "Tech Lead",
            "Project Management",
            "Senior Developer",
        ],
        reviews: [
            {
                id: "1",
                rating: 5,
                comment:
                    "He is very friendly and makes you comfortable first, then he gives the exact feedback of your technical knowledge which helps to acknowledge your current position. I found his tips very helpful and positive.",
                author: "Gaurav Singh",
                authorAvatar: "/images/gaurav.jpg",
            },
            {
                id: "2",
                rating: 4.5,
                comment:
                    "His ability to create a relaxed atmosphere and provide insightful feedback made the hour-long session highly productive.",
                author: "Anonymous",
            },
            {
                id: "3",
                rating: 5,
                comment:
                    "He is very friendly and makes you comfortable first, then he gives the exact feedback of your technical knowledge which helps to acknowledge your current position that I found very helpful and positive. He focused and valuable insights on my professional case.",
                author: "Gaurav Singh",
                authorAvatar: "/images/gaurav.jpg",
            },
        ],
        services: [
            {
                id: "1",
                title: "Career Guidance",
                description:
                    "I'll give you advice to help with your career decisions.I'll give you advice to help with your career decisions.",
                duration: "30 min",
                price: 300,
            },
            {
                id: "2",
                title: "Mock Interview",
                description:
                    "Practice your interview skills with feedback from an experienced interviewer",
                duration: "45 min",
                price: 500,
            },
        ],
    },
    {
        id: "2",
        name: "Dev Jain",
        position: "Sr. Software Engineering",
        company: "Microsoft",
        skills: ["iOS Development", "Cloud", "Python", "Full-stack", "Frontend"],
        image: "/images/dev-jain.jpg",
        rating: 4.5,
        experience: [
            "iOS Development",
            "Cloud",
            "Python",
            "Full-stack",
            "Frontend Development",
        ],
        reviews: [
            {
                id: "1",
                rating: 4.5,
                comment:
                    "Very insightful session. Helped me understand my career path better.",
                author: "Priya Sharma",
            },
        ],
        services: [
            {
                id: "1",
                title: "Resume Review",
                description: "I'll review your resume and provide actionable feedback",
                duration: "20 min",
                price: 250,
            },
        ],
    },
    {
        id: "3",
        name: "Rishi Mehta",
        position: "Sr. Software Engineering",
        company: "JP Morgan",
        skills: ["Backend", "Java", "System Design"],
        image: "/images/rishi-mehta.jpg",
        rating: 4.8,
        experience: ["Java Application Developer", "Database"],
        reviews: [
            {
                id: "1",
                rating: 5,
                comment: "Exceptional guidance on system design concepts",
                author: "Raj Kumar",
            },
        ],
        services: [
            {
                id: "1",
                title: "System Design Consultation",
                description: "Get help with system design problems and architecture",
                duration: "45 min",
                price: 600,
            },
        ],
    },
    {
        id: "4",
        name: "Meet Mistry",
        position: "Sr. Software Engineering",
        company: "Zomato",
        skills: [
            "iOS Development",
            "Cloud",
            "Python",
            "Full-stack",
            "Team Development",
        ],
        image: "/images/meet-mistry.jpg",
        rating: 4.2,
        experience: [
            "iOS Development",
            "Cloud",
            "Python",
            "Full-stack",
            "Team Development",
        ],
        reviews: [
            {
                id: "1",
                rating: 4,
                comment: "Good insights on team management and technical growth",
                author: "Neha Patel",
            },
        ],
        services: [
            {
                id: "1",
                title: "Team Leadership Coaching",
                description: "Learn how to lead technical teams effectively",
                duration: "60 min",
                price: 800,
            },
        ],
    },
];
