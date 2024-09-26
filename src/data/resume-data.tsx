import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, FacebookIcon } from "@/components/icons";
import { link } from "fs";

export const RESUME_DATA = {
  name: "Kodo Yousif",
  initials: "KY",
  location: "Iraq, Erbil, Koysinjaq",
  locationLink:
    "https://www.google.com/maps/place/Koysinjaq,+Erbil+Governorate/data=!4m2!3m1!1s0x400125e668227775:0x5378a129db31a55?sa=X&ved=1t:242&ictx=111",
  about:
    "Full Stack & Machine learning Engineer dedicated to provide high-quality products/services.",
  summary:
    "I am a full stack developer with a strong background in building high-quality websites and systems. I graduated at the top of my class in software engineering and am currently pursuing a master's degree in machine learning. I specialize in developing services that leverage AI models, combining technical expertise with cutting-edge AI innovations.",
  avatarUrl:
    "https://1drv.ms/i/c/25c035a0251f4387/IQQyG8hmeCuJSKyrw5JbZrv6AZsXh_hmBApKsTcwztxo088?width=1024",
  personalWebsiteUrl: "https://kodo-yousif.vercel.app/",
  contact: {
    email: "kodo.yousif@gmail.com",
    tel: "+9647507556391",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/kodo-yousif",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kodo-yousif/",
        icon: LinkedInIcon,
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/koko.like99/",
        icon: FacebookIcon,
      },
    ],
  },
  education: [
    {
      school: "Masters Degree",
      degree:
        "Studying software engineering master degree at Koya University and focusing on machine learning and specially deep learning.",
      start: "2023",
      end: "Present",
    },
    {
      school: "Recoded Bootcamp",
      degree:
        "Recoded developing bootcamp about front end developing using React JS.",
      start: "2020",
      end: "2021",
    },
    {
      school: "Software Engineering",
      degree: "Bachelor's Degree in Software engineering at Koya University",
      start: "2019",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Gateway",
      link: "https://www.the-gw.com/",
      badges: ["Remote"],
      title: "Front end Developer",
      start: "2022",
      end: null,
      description:
        "Front end developer, creating high functional tools and components and ensuring their flexibility.",
    },
    {
      company: "Koya University",
      link: "https://koyauniversity.org/",
      badges: [],
      title: "Assistant Lecturer",
      start: "2023",
      end: null,
      description:
        "Assistant lecturer for 4th stage students at Machine learning subject.",
    },
    {
      company: "Aso Soft",
      link: "https://asosoft.com/en/",
      badges: ["Remote"],
      title: "Full stack Engineer & Researcher",
      start: "2022",
      end: null,
      description:
        "Building AI Solutions upon ASR models and helping in ASR researches non-profitably.",
    },
    {
      company: "Shift Software",
      link: "https://shift.software/",
      badges: ["Remote"],
      title: "Full Stack Engineer",
      start: "2021",
      end: "2022",
      description:
        "Full stack Engineer, ensuring high quality products and flexible design solutions.",
    },
    {
      company: "Techeye",
      link: "http://techeye.org/",
      badges: [],
      title: "Internship",
      start: "2021",
      end: "2021",
      description: "Full stack Internship to implement websites and systems.",
    },
  ],
  skills: [
    "Machine learning algorithms",
    "Pytorch",
    "Tensorflow",
    "JavaScript",
    "TypeScript",
    "React/Next.js/Remix",
    "Node js",
    "Adonis js",
    "Tailwind",
    "Antd",
    "MUI",
  ],
  projects: [
    {
      title: "Hair transplant prediction",
      techStack: ["Python", "Machine Learning", "Fastapi"],
      description:
        "Private page for Arina center to do predictions using Deep learning model.",
      logo: BimLogo,
      link: { href: "https://www.youtube.com/embed/FRUXVF24C9c" },
    },
    {
      title: "ISIC",
      techStack: ["React js", "Tailwind"],
      description: "FIB website for ordering ISIC cards",
      logo: MobileVikingsLogo,
      link: {
        label: "",
        href: "https://isic.fib.iq/",
      },
    },
    {
      title: "A star Simulation",
      techStack: ["React JS", "Antd", "AI"],
      description: "Visualizing and setting A start machine learning algorithm",
      link: {
        label: "",
        href: "https://a-star-iota.vercel.app/",
      },
    },
    {
      title: "Hot Deals",
      techStack: ["Typescript", "Remix"],
      description:
        "Finding Establishment's that give you cashback by paying with FIB.",
      logo: AmbitLogo,
      link: { href: "https://deals.fib.iq/" },
    },
    {
      title: "ASR Labelling",
      techStack: ["React js", "MUI", "Node.js"],
      description: "Audio labeling platform for Aso soft ASR models.",
      logo: EvercastLogo,
      link: {
        label: "",
        href: "https://asr-labelling.vercel.app/login",
      },
    },
    {
      title: "Techeye Portfolio",
      techStack: ["React Js", "Fire Base"],
      description: "Business portfolio for Techeye company.",
      logo: ConsultlyLogo,
      link: {
        label: "",
        href: "https://new-techeye.vercel.app/",
      },
    },
    {
      title: "Quicks Menu",
      techStack: ["Next.JS", "Fire base", "Antd"],
      description:
        "Menu for Quicks restaurant with dashboard for easier management",
      logo: MonitoLogo,
      link: {
        label: "",
        href: "https://quicks-menu.vercel.app/?language=english",
      },
    },
    {
      title: "K Template",
      techStack: ["React", "Antd"],
      description:
        "Ready to use template for dashboards providing RTL, dark mode, Internationalization and tailwind integrated with Antd.",
      logo: JarockiMeLogo,
      link: {
        label: "",
        href: "https://k-template.vercel.app/",
      },
    },
    {
      title: "3D hair transplant",
      techStack: ["React js", "React Three Fiber", "On-going"],
      description:
        "A private Platform to implant hairs and draw lines on 3D head view.",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: null,
      },
    },
    {
      title: "Barber Ai",
      techStack: [
        "Docker",
        "Machine learning",
        "Fastapi",
        "Next js",
        "Adonis js",
        "Firebase",
        "On-going",
      ],
      description:
        "Online service for barbers to replace customer hair using deep leaning model.",
      logo: BarepapersLogo,
      link: {
        label: "",
        href: "https://barber.babylon-services.net/en",
      },
    },
    {
      title: "Bold Market",
      techStack: ["React js", "MUI template", "On-going"],
      description: "Bold brand online market place.",
      logo: YearProgressLogo,
      link: {
        label: "",
        href: "https://www.boldofficial.com.tr/",
      },
    },

    {
      title: "Network Performance (NP)",
      techStack: ["React", "Tailwind"],
      description:
        "Large private system to monitor the fastlink and newroz telecom sites.",
      logo: Howdy,
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "FMS",
      techStack: ["Typescript", "Tailwind"],
      description:
        "Private platform to manage and automate FIB Bank operations.",
      logo: TastyCloudLogo,
      link: {
        label: "",
        href: "",
      },
    },
  ],
} as const;
