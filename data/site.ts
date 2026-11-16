
export interface Site {
  name: string;
  url: string;
  title: string;
  tagline: string;
  email: string;
  github: string;
  linkedin: string;
  resume: string;
  about: string[];
}

export interface SkillGroup {
  group: string;
  items: string[];
}

export interface Project {
  title: string;
  blurb: string;
  stack: string[];
  live?: string;
  code?: string;
  color: string;
}

export const site: Site = {
  name: "Ibrahim",
  url: "https://alqassass.me", 
  title: "Computer Science student",
  tagline: "Full-stack developer learning to build machine learning into real products.",
  email: "alkassasibrahem@gmail.com",
  github: "https://github.com/askahema2003",
  linkedin: "https://www.linkedin.com/in/ibrahim-alqassass/",
  resume: "/Ibrahim_Alqassass_Resume.pdf",
  about: [
    "I'm a Computer Science student at Susquehanna University, and I'm happiest when I'm building something that works from the database all the way to the screen. Right now that's a full-stack platform for a university research project, turning river and bird data into something people can actually explore.",
    "I also help teach Python to 20 students as a teaching assistant, which keeps me honest about whether my own code makes sense to someone else.",
    "I'm looking for a Summer 2027 software engineering internship where I can ship real features on a team and learn from people ahead of me. My Finance minor has me curious about fintech, and I'm learning machine learning on the side so I can build smarter products down the road.",
  ],
};

export const skills: SkillGroup[] = [
  { group: "Languages", items: ["Python", "JavaScript", "TypeScript", "SQL", "HTML/CSS"] },
  { group: "Frameworks", items: ["React", "Next.js", "Flask", "FastAPI", "Tailwind CSS"] },
  { group: "Data & Tools", items: ["PostgreSQL", "GraphQL", "REST APIs", "Git/GitHub"] },
];

// ✏️ Add a new project by copying one block below and pasting it after the last one.
// Colors rotate through: "#ffe500" (yellow), "#00e5a8" (mint), "#ff4fa3" (pink).
export const projects: Project[] = [
  {
    title: "BirdNet",
    blurb:
      "A Next.js platform that pairs a bird species directory with ecological monitoring of the Susquehanna River. A Python pipeline pulls BirdWeather data over GraphQL to power analytics filtered by date or season, species name, station location, and more. Security is built in: a role-based access gateway isolates dashboards for four user tiers, REST endpoints are guarded by custom authorization decorators, and credentials are stored hashed in PostgreSQL.",
    stack: ["Next.js", "Flask", "PostgreSQL", "Python", "GraphQL"],
    // live: "https://...",   // add your deployed link here
    // code: "https://github.com/askahema2003/<repo>",   // add your repo link here
    color: "#ffe500",
  },
];

// Shows a dashed "next project" card after your projects. Set to false once you add the second one.
export const showComingSoon = true;
