import {
  Code2,
  Server,
  Wrench,
  Database,
  Globe,
  FileJson,
  Palette,
  GitBranch,
  Terminal
} from 'lucide-react'

export type Skill = {
  name: string
  icon: React.ComponentType<{ className?: string }>
}

export type SkillCategory = {
  title: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: Code2 },
      { name: 'TypeScript', icon: FileJson },
      { name: 'JavaScript', icon: Globe },
      { name: 'HTML & CSS', icon: Palette },
      { name: 'Tailwind CSS', icon: Palette },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: Server },
      { name: 'Express', icon: Server },
      { name: 'MongoDB', icon: Database },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: GitBranch },
      { name: 'VS Code', icon: Terminal },
      { name: 'npm', icon: Wrench },
    ],
  },
]

export type Project = {
  title: string
  description: string
  longDescription?: string
  image?: string
  technologies: {
    category: string
    items: string[]
  }[]
  links: {
    github?: string
    live?: string
  }
  featured?: boolean
  inProgress?: boolean
}

export const projects: Project[] = [
  {
    title: 'Projecty',
    description: 'A developer-focused social platform for builders',
    longDescription: 'Projecty is a developer-focused social platform where builders can publish projects, discover what others are creating, post short-form technical threads, join coding challenges, and grow through community engagement.',
    featured: true,
    inProgress: true,
    technologies: [
      {
        category: 'Frontend',
        items: ['React 19', 'TypeScript', 'Vite 7', 'Tailwind CSS 4', 'React Router DOM 7', 'Lucide React'],
      },
      {
        category: 'Backend',
        items: ['Node.js (ESM)', 'Express 4', 'MongoDB', 'Mongoose', 'JWT Auth', 'bcrypt', 'multer', 'CORS'],
      },
      {
        category: 'Tooling',
        items: ['ESLint', 'Concurrently', 'dotenv'],
      },
    ],
    links: {},
  },
]

export const socialLinks = {
  github: 'https://github.com/DevTamem',
  linkedin: 'https://www.linkedin.com/in/tamem-al-tamsha-b33897385/',
  email: 'altamshatamem@gmail.com',
}

export const personalInfo = {
  name: 'Tamem Al Tamsha',
  title: 'Software Engineering Student',
  university: 'Ostim Technical University',
  location: 'Turkey',
  bio: `I'm a Software Engineering student passionate about building real-world applications
        and continuously improving my development skills. I love turning ideas into code and
        creating things that make a difference.`,
  aboutMe: `As a curious developer, I spend my time exploring new technologies and building
            projects that challenge me to grow. I believe in learning by doing, and every
            project is an opportunity to discover something new. When I'm not coding, I'm
            probably thinking about my next project or exploring the latest in web development.`,
}
