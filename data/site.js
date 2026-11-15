// ✏️ EDIT THIS FILE: it is the only place you need to change content.
export const site = {
  name: "Ibrahim",
  title: "Software engineering student",
  tagline: "Full-stack apps today, machine learning next.",
  location: "Your city, State",
  email: "you@example.com",
  github: "https://github.com/your-username",
  linkedin: "https://www.linkedin.com/in/your-username",
  resume: "/resume.pdf", // drop your PDF into /public as resume.pdf
  about: [
    "I'm a Computer Science student at Susquehanna University with a Finance minor, graduating in May 2028.",
    "I've worked as a research assistant intern building full-stack tools, and in IT support at my university. I'm now looking at fintech engineering roles in payments, banking, and wealth tech.",
    "Longer term, I want to become a machine learning engineer.",
  ],
};

export const skills = [
  { group: "Frontend", items: ["React", "Next.js", "JavaScript", "CSS"] },
  { group: "Backend", items: ["Flask", "Python", "PostgreSQL", "REST APIs"] },
  { group: "Tools", items: ["Git", "GitHub", "Linux", "Vercel"] },
];

// ✏️ Add a new project by copying one block below and pasting it after the last one.
// Colors rotate through: "#ffe500" (yellow), "#00e5a8" (mint), "#ff4fa3" (pink).
export const projects = [
  {
    title: "Avian Species Directory & River Monitoring",
    blurb:
      "A Next.js platform that combines a searchable bird species directory with ecological monitoring of the Susquehanna River.",
    stack: ["Next.js", "React", "Tailwind CSS"],
    live: "", // paste your deployed link here, or leave empty
    code: "https://github.com/your-username/your-repo",
    color: "#ffe500",
  },
];

// Shows a dashed "next project" card after your projects. Set to false once you add the second one.
export const showComingSoon = true;
