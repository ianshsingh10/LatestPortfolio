"use client";
import { ProjectCard } from "@/components/ui/ProjectPages";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function ProjectDemo({ cards }: { cards: any[] }) {
  return (
    <div className="flex flex-wrap gap-3 justify-center mx-auto my-10 max-w-7xl p-2">
      {cards.map((card, idx) => (
        <CardContainer className="inter-var" key={idx}>
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
              {card.title}
            </CardItem>
            <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
              {card.description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src={card.image}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as="a"
                href={card.tryLink}
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                {card.tryLabel}
              </CardItem>
              <CardItem
                translateZ={20}
                as="a"
                href={card.sourceCodeLink}
                target="_blank"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                GitHub Repo
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}

export const backendCards = [
  {
    title: "Authentication Service",
    description: "Handles user authentication, registration, and secure login.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2560&auto=format&fit=crop",
    tryLink: "https://example.com/auth",
    tryLabel: "Try Auth",
    sourceCodeLink: "https://github.com/example/auth-service",
  },
  {
    title: "API Gateway",
    description: "Central entry point for all backend APIs, with rate limiting.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2560&auto=format&fit=crop",
    tryLink: "https://example.com/api",
    tryLabel: "Try API",
    sourceCodeLink: "https://github.com/example/api-gateway",
  },
  {
    title: "Database Service",
    description: "Manages data storage, retrieval, and backup for applications.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2560&auto=format&fit=crop",
    tryLink: "https://example.com/db",
    tryLabel: "Try DB",
    ink: "https://github.com/example/database-service",
  },
];

export const frontendCards = [
  {
    title: "Landing Page",
    description: "Beautiful, responsive landing page built with React and Tailwind CSS.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop",
    tryLink: "https://example.com/landing",
    tryLabel: "Try Landing",
    sourceCodeLink: "https://github.com/example/landing-page",
  },
  {
    title: "Dashboard UI",
    description: "Interactive dashboard with charts and widgets for analytics.",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=2560&auto=format&fit=crop",
    tryLink: "https://example.com/dashboard",
    tryLabel: "Try Dashboard",
    sourceCodeLink: "https://github.com/example/dashboard-ui",
  },
  {
    title: "PortfsourceCodeLolio Site",
    description: "Personal portfolio website to showcase your work and skills.",
    image:
      "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?q=80&w=2560&auto=format&fit=crop",
    tryLink: "https://example.com/portfolio",
    tryLabel: "Try Portfolio",
    sourceCodeLink: "https://github.com/example/portfolio-site",
  },
];

export const uiuxCards = [
  {
    title: "Mobile App Design",
    description: "Modern mobile app UI/UX design for seamless user experience.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2560&auto=format&fit=crop",
    tryLink: "https://example.com/mobile-design",
    tryLabel: "Try Design",
    sourceCodeLink: "https://github.com/example/mobile-app-design",
  },
  {
    title: "Web App Wireframe",
    description: "Wireframe for a web application, focusing on usability and flow.",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=2560&auto=format&fit=crop",
    tryLink: "https://example.com/wireframe",
    tryLabel: "Try Wireframe",
    sourceCodeLink: "https://github.com/example/web-app-wireframe",
  },
  {
    title: "Design System",
    description: "Comprehensive design system for consistent UI across products.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2560&auto=format&fit=crop",
    tryLink: "https://example.com/design-system",
    tryLabel: "Try System",
    sourceCodeLink: "https://github.com/example/design-system",
  },
];

export const fullstackCards = [
  {
    title: "E-commerce Platform",
    description: "Full-featured e-commerce platform with frontend and backend integration.",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=2560&auto=format&fit=crop",
    tryLink: "https://example.com/ecommerce",
    tryLabel: "Try E-commerce",
    sourceCodeLink: "https://github.com/example/ecommerce-platform",
  },
  {
    title: "Social Media App",
    description: "A scalable social media application with real-time features.",
    image:
      "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?q=80&w=2560&auto=format&fit=crop",
    tryLink: "https://example.com/social",
    tryLabel: "Try Social",
    sourceCodeLink: "https://github.com/example/social-media-app",
  },
  {
    title: "Project Management Tool",
    description: "Collaborative tool for managing projects, tasks, and teams.",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=2560&auto=format&fit=crop",
    tryLink: "https://example.com/pm-tool",
    tryLabel: "Try Tool",
    sourceCodeLink: "https://github.com/example/project-management-tool",
  },
];
