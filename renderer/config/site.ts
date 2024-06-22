export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "Next.js + NextUI",
    description:
        "Make beautiful websites regardless of your design experience.",
    navItems: [
        {
            label: "Home",
            href: "/home"
        },
        {
            label: "About",
            href: "/about"
        }
    ],
    navMenuItems: [
        {
            label: "Profile",
            href: "/profile"
        },
        {
            label: "Dashboard",
            href: "/dashboard"
        },
        {
            label: "Projects",
            href: "/projects"
        },
        {
            label: "Team",
            href: "/team"
        },
        {
            label: "Calendar",
            href: "/calendar"
        },
        {
            label: "Settings",
            href: "/settings"
        },
        {
            label: "Help & Feedback",
            href: "/help-feedback"
        },
        {
            label: "Logout",
            href: "/logout"
        }
    ],
    links: {
        github: "https://github.com/jekigates",
        electron: "https://www.electronjs.org/",
        nextjs: "https://nextjs.org/",
        tailwindcss: "https://tailwindcss.com/",
        nextui: "https://nextui.org/",
        typescript: "https://www.typescriptlang.org/",
        githubrepository: "https://github.com/jekigates/nextron-with-next-ui"
    }
};
