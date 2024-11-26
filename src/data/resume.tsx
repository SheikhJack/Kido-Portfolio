import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Kealeboga Mosate",
  initials: "KM",
  url: "https://github.com/SheikhJack?tab=repositories",
  location: "Botswana, Gaborone",
  locationLink: "H5Q2+PCG Kgafela Primary School, Mochudi",
  description:
    "A FullStack developer. I love building things and helping people.",
  summary:
  "My journey into web development began in 2019 when I started building web apps with Shopify. Since then, I've expanded my skill set and transitioned to React.js in 2020. Eager to enhance my capabilities, I pursued a full-stack web development course at the University of Helsinki in 2022. This comprehensive program covered both frontend and backend development using React.js, Node.js, and python(flask).",
  avatarUrl: "/my.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "flask",
    "React-Native",
    "Mysql",
    "Postgres",
    "Firebase",
    "MongoDb",
    "Supabase",
    "aws",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "kealebogakido@gmail.com",
    tel: "+26774524437",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/SheikhJack",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kealeboga-mosate-019524a5/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "",
        icon: Icons.x,

        navbar: true,
      },
      Facebook: {
        name: "Facebook",
        url: "https://web.facebook.com/kealeboga.mosate/",
        icon: Icons.facebook,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Moscorp Media Inc",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "FullStack developer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "--",
      description:
        "Building user interfaces with HTML, CSS, JavaScript, and frameworks like React&React Native. Developing server-side logic using Node.js,Designing, querying, and managing databases (SQL/NoSQL) for data storage and retrieval.Using Git for tracking code changes and collaborating with other developers.Managing deployment pipelines and cloud environments (AWS, Docker)Implementing authentication, data protection, and security best practices.Creating and consuming APIs for communication between front-end and back-end systems ",
    },
  ],
  education: [
    {
      school: "Alison",
      href: "https://buildspace.so",
      degree: "Information Technology Diploma",
      logoUrl: "/Alison.svg",
      start: "On-going",
    },
    {
      school: "University Of Helsinki",
      href: "https://fullstackopen.com",
      degree: "FullStack Open Certification",
      logoUrl: "/download(1).webp",
      start: "2022",
      end: "2022",
    },
    {
      school: "Udemy",
      href: "https://udemy.com",
      degree: "React Native Course",
      logoUrl: "/download(2).webp",
      start: "2024",
      end: "2028",
    },
  
  ],
  projects: [
    {
      title: "Tax Prep App",
      href: "https://tax-prepare-app.vercel.app/",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Leaveraging the power of Nextjs 14, Tax-prep-app allows users/customers to engage by posting inside the app when they fell like they need clarity. commenting is also enabled giving the app the power certisfy users without needing facebook or any other social media platform",
      technologies: [
        "Next.js",
        "Javascript",
        "Mongodb",
        "cloudinary",
      ],
      links: [
        {
          type: "Website",
          href: "https://tax-prepare-app.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SheikhJack/tax-prep-app-2",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/tax-prep.png",
      video:
        "",
    },
    {
      title: "Tuition App",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed with purely reactjs with a plan to make the website dynamic when the client is ready .",
      technologies: [
        "React.js",
        "Javascript",
        "Google Maps",
      ],
      links: [
        {
          type: "Website",
          href: "https://symphonious-malasada-04da2f.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SheikhJack/luapituition",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Lewapi.png",
      video: "",
    },
    {
      title: "Moscorp Media Website",
      href: "moscorp-media-inc.vercel.app",
      dates: "April 2021 - -",
      active: true,
      description:
        "Developed to give Moscorp Media clients a rich option to technologies and user experience to assure them of the quality they can get from the firm .",
      technologies: [
        "React.Js",
        "Javascript",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "moscorp-media-inc.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/moscorp.png",
      video: "",
    },
    {
      title: "Ecommerce Store",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Nextjs 14 is connected to the dashboard, it has collections and products displayed for customers..",
      technologies: [
        "Next.js",
        "Typescript",
        "MongoDB",
        "Clerk",
        "TailwindCSS",
        "Shadcn UI",
        "Stripe",
        "Cloudinary",
      ],
      links: [
        {
          type: "Website",
          href: "https://onewayclothing.store",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/stores.png",
      video:
        "",
    },
    {
      title: "Botswana Housing Corporation",
      href: "",
      dates: "June 2024 - July 2024",
      active: true,
      description:
        "BHC embacked on giving developes a chance to develop a mobile app that will simplify management.",
      technologies: [
        "React Native",
        "Javascript",
        "MongoDb",
        "aws Amplify",
        "CSS",
        "Sanity",
        "Stripe",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "bhc.mp4",
    },
    {
      title: "Ecommerce Admin Dash",
      href: "https://automatic.chat",
      dates: "Aug 2024 - Oct 2024",
      active: true,
      description:
        "designed to manage and monitor data or operations within a business or system.It leverages Next.js 14’s new features, such as Server Actions for efficient data fetching and server-side rendering for improved performance. The dashboard typically includes sections like user management, analytics, and settings,with components like a sidebar and header for easy navigation. It integrates secure authentication, often using Clerk, styled with Tailwind CSS for responsive design.",
      technologies: [
        "Next.js",
        "Typescript",
        "Prisma",
        "TailwindCSS",
        "Shadcn",
        "MongoBD",
        "Clerk",
        "Cloudinary",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/SheikhJack/e-commerce-store",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/admin-dash.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "BHC Mobile App",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
  ],
} as const;
