import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Param's Blog",
  DESCRIPTION: "Welcome to My Blog, a portfolio and blog for myself.",
  AUTHOR: "Param Makwana",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate or curious about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "contact@kratospidey.com",
    HREF: "mailto:contact@kratospidey.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "kratospidey",
    HREF: "https://github.com/Kratospidey/krat-blog"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "kratospidey",
    HREF: "https://www.linkedin.com/in/kratospidey/",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "kratospidey",
    HREF: "https://twitter.com/kratospidey",
  },
]

