export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  githubUrl: string;
  liveUrl?: string;
  stars: number;
  forks: number;
  language: string;
  tags: string[];
  featured: boolean;
  category: 'web' | 'fullstack' | 'ai' | 'tool';
}

export const personalData = {
  name: "Vittorio Gallicchio",
  username: "Vittorio92",
  title: "Software Engineer & Cybersecurity Specialist",
  subtitle: "Laureato in Ingegneria Informatica (UNICAL) • Studente Magistrale in Cybersecurity",
  bio: "Ingegnere Informatico triennale laureato presso l'Università della Calabria (UNICAL), attualmente iscritto alla Laurea Magistrale con curriculum in Cybersecurity. Appassionato di sviluppo software e sicurezza dei sistemi.",
  location: "Italia",
  email: "gallicchiovittorio01@gmail.com",
  github: "https://github.com/Vittorio92",
  linkedin: "https://it.linkedin.com/in/vittorio-gallicchio-b613731b9",
  avatarUrl: "/profile.jpg",
  cvUrl: "/cv.pdf"
};

export const projectsData: Project[] = [
  {
    id: "portfolio-nextjs",
    title: "Vittorio92.github.io",
    description: "Sito portfolio personale sviluppato con Next.js 15, React, TypeScript ed esportazione statica per GitHub Pages.",
    longDescription: "Sito portfolio ad impatto visivo con tema dark elegante, schede interattive per repository GitHub, contatti ed automazione di deployment su GitHub Actions.",
    githubUrl: "https://github.com/Vittorio92/Vittorio92.github.io",
    liveUrl: "https://vittorio92.github.io",
    stars: 1,
    forks: 0,
    language: "TypeScript",
    tags: ["Next.js", "React", "TypeScript", "GitHub Pages"],
    featured: true,
    category: "web"
  }
];


