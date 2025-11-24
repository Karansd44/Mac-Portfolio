const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
  {
    id: "linkedin",
    name: "LinkedIn", // was "Trash"
    icon: "linkedin.png",
    canOpen: true,
  },
  {
    id: "github",
    name: "GitHub", // was "Trash"
    icon: "github2.png",
    canOpen: true,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "Bulding a Ultimate Project on MediMind ASK",
    image: "/images/blog1.png",
    link: "https://github.com/Karansd44/AI-Powered-Healthcare-Medicare-ASK-",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "The Ultimate Guide to Mastering coursera for Java  Data Structure",
    image: "/images/blog2.png",
    link: "https://www.coursera.org/learn/data-structures-optimizing-performance",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "The Ultimate Guide to Mastering GSAP Animations",
    image: "/images/blog3.png",
    link: "https://github.com/Karansd44/CockTail",
  },
];

const techStack = [
  {
    category: "Languages",
    items: ["Java", "Python", "C"],
  },
  {
    category: "Frontend",
    items: ["HTML", "CSS", "Tailwind CSS","Figma"],
  },
  {
    category: "Database",
    items: ["MySQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "VSCode","Vercel","AntiGravity"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/Karansd44",
  },
  {
    id: 2,
    text: "Platform",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://karan-sd.vercel.app/",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/DARKCLOWN441",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/karan-s-d-69577434a/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/karan.png",
  },
   {
    id: 3,
    img: "/images/karan-2.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "MedMind ASK",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[45vh] right-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "MediMindASK.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Developed a full-stack medical diagnostic app using React, Tailwind CSS, and Firebase with an AI tool that predicts diseases from user symptoms.",
            "Built dual interfaces with secure authentication for patients and doctors.",
            "Added a module for doctors to create and manage digital clinical notes.",
            "Integrated location-based APIs to suggest nearby hospitals and pharmacies based on the diagnosis.",
          ],
        },
        {
          id: 2,
          name: "MediMindASK.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://ai-powered-healthcare-medicare-ask.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "MediMindASK.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/work-8.png",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Cocktail Website",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 right-70",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Cocktail Website.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Built a premium cocktail bar website using React, Vite, Tailwind CSS v4, and GSAP, featuring immersive scroll-based animations and cinematic video reveals.",
            "Implemented advanced GSAP effects including ScrollTrigger, SplitText, parallax movements, pinned sections, and scroll-synced video playback.",
            "Designed fully responsive, high-performance UI/UX with smooth transitions, interactive menu sliders, and optimized video assets.",
            "Structured the project with modular React components and integrated modern tooling for fast development, clean architecture, and seamless animations.",
          ],
        },
        {
          id: 2,
          name: "Cocktail Website.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://cock-tail.vercel.app/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "Cocktail Website.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/work-9.png",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "E-Commerce Platform",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-70",
      windowPosition: "top-[70vh] left-7",
      children: [
        {
          id: 1,
          name: "E-Commerce Platform.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Developed a full-stack e-commerce platform with separate frontend, backend, and admin modules for smooth management and user experience.",
            "Implemented product listing, cart functionality, user authentication, and order handling using modern JavaScript.",
            "Designed responsive UI with clean layouts and efficient navigation for seamless shopping.",
            "It’s built with Reactjs, Express.js, so it works smoothly on both iOS and Android with a clean, modern design.",
          ],
        },
        {
          id: 2,
          name: "food-delivery-app.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Karansd44/Ecommerce-webiste",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "food-delivery-app.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/work-7.png",
        },
      ],
    },
     // ▶ Project 4
    {
      id: 8,
      name: "Uber Clone",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 right-3",
      windowPosition: "top-[45vh] left-96",
      children: [
        {
          id: 1,
          name: "Uber Clone.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Built a React Native ride-tracking app with Tailwind CSS, Google Maps, and Distance Matrix APIs.",
            "Created a Node.js + Express backend with MongoDB for authentication and ride management.",
            "Integrated Stripe for secure, cashless payments with 500+ successful test transactions.",
            "Delivered fast routing, real-time tracking, and a smooth end-to-end user experience.",
          ],
        },
        {
          id: 2,
          name: "Uber Clone.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Karansd44/Uber_Clone",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "uber-clone.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/work-2.png",
        },
      ],
    },
    // ▶ Project 5
    {
      id: 9,
      name: "Portfolio",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-40 left-3",
      windowPosition: "top-[5vh] left-96",
      children: [
        {
          id: 1,
          name: "Portfolio.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Built a responsive portfolio website using Next.js, React, and Tailwind CSS with clean UI and smooth user experience.",
            "Implemented a custom interactive AI chatbot to deliver real-time information about my skills, experience, and projects.",
            "Integrated dark/light mode, project showcases, and a contact form for seamless user interaction and navigation.",
            "Structured the codebase with reusable components and modern tooling for scalability and optimized performance."
          ],
        },
        {
          id: 2,
          name: "Portfolio.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://karan-sd.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "portfolio.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/work-6.png",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/karan.png",
    },
    {
      id: 2,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/karan-3.png",
    },
    {
      id: 3,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/karan.png",
      description: [
      "I’m Karan, a full-stack developer with experience building responsive and high-performance web applications using JavaScript, React, and Next.js.",
      "I focus on creating smooth user experiences, clean UI, and writing maintainable, scalable code.",
      "I enjoy solving real-world problems through technology and continuously learning modern tools and frameworks.",
      "Outside development, I love exploring new UI ideas, keeping up with emerging tech, and improving my skills with personal projects."
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/work-3.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/work-4.png",
    },
    {
      id: 3,
      name: "trash3.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-70 left-10",
      imageUrl: "/images/work-5.png",
    },
    {
      id: 4,
      name: "trash4.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-70 left-80",
      imageUrl: "/images/work-1.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };