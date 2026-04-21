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
  ];
  
  const blogPosts = [
    {
      id: 1,
      date: "Sep 2, 2025",
      title:
        "Learn LLM from Scratch",
      image: "/images/blog1.png",
      link: "https://github.com/Surajgupta001/LLM",
    },
    {
      id: 2,
      date: "Aug 28, 2025",
      title: "Learn Machine Learning from Scratch",
      image: "/images/blog2.png",
      link: "https://github.com/Surajgupta001/MACHINE-LEARNING",
    },
    {
      id: 3,
      date: "Aug 15, 2025",
      title: "Master RAG ( Retrieval Augmented Generation ) from Scratch",
      image: "/images/blog3.png",
      link: "https://github.com/Surajgupta001/RAG",
    },
  ];
  
  const techStack = [
    {
      category: "Frontend",
      items: ["React.js", "Next.js", "TypeScript"],
    },
    {
      category: "Mobile",
      items: ["React Native", "Expo"],
    },
    {
      category: "Styling",
      items: ["Tailwind CSS", "Sass", "CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "NestJS", "Hono"],
    },
    {
      category: "Database",
      items: ["MongoDB", "PostgreSQL"],
    },
    {
      category: "Dev Tools",
      items: ["Git", "GitHub", "Docker"],
    },
  ];
  
  const socials = [
    {
      id: 1,
      text: "Github",
      icon: "/icons/github.svg",
      bg: "#f4656b",
      link: "https://github.com/Surajgupta001",
    },
    {
      id: 4,
      text: "LinkedIn",
      icon: "/icons/linkedin.svg",
      bg: "#05b6f6",
      link: "https://www.linkedin.com/in/suraj-gupta-15634028a/",
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
      img: "/images/suraj-1.jpg",
    },
    {
      id: 2,
      img: "/images/suraj-3.jpg",
    },
    {
      id: 3,
      img: "/images/suraj-6.png",
    },
    {
      id: 4,
      img: "/images/suraj-2.jpg",
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
        name: "Multi-Vendor Ecommerce Application",
        icon: "/images/folder.png",
        kind: "folder",
        position: "top-10 left-5", // icon position inside Finder
        windowPosition: "top-[5vh] left-5", // optional: Finder window position
        children: [
          {
            id: 1,
            name: "Multi-Vendor Ecommerce Project.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-5 left-10",
            description: [
              '• Developed a scalable multi-vendor e-commerce platform supporting multiple sellers with role-based access (admin/vendor/user).',
              '• Built using Next.js for optimized frontend performance and server-side rendering.',
              '• Designed and implemented RESTful APIs for product, order, and user management.',
              '• Integrated AI-based features such as intelligent product recommendations and enhanced search using LLM-based query understanding.',
              '• Implemented secure authentication and efficient backend architecture for scalability.',
                'Tech: Next.js, MongoDB, Express.js, Node.js, LLM APIs'
            ],
          },
          {
            id: 2,
            name: "vendor.com",
            icon: "/images/safari.png",
            kind: "file",
            fileType: "url",
            href: "https://gocart-drab.vercel.app/",
            position: "top-10 right-20",
          },
          {
            id: 4,
            name: "vendor.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 right-80",
            imageUrl: "/images/project-1.png",
          },
        ],
      },
  
      // ▶ Project 2
      {
        id: 6,
        name: "AI Resume Builder",
        icon: "/images/folder.png",
        kind: "folder",
        position: "top-52 right-80",
        windowPosition: "top-[20vh] left-7",
        children: [
          {
            id: 1,
            name: "AI Resume Builder Project.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-5 right-10",
            description: [
              '• Built a dynamic resume builder with real-time preview and structured form-based input system.',
              '• Developed responsive UI using React.js and Tailwind CSS for better user experience.',
              '• Integrated AI-powered resume suggestions, including content enhancement and keyword optimization using LLMs.',
              '• Implemented reusable components and optimized rendering performance.',
              '• Enabled export-ready formatting for generating professional PDF resumes.',
                'Tech: React.js, Tailwind CSS, Node.js, LLM APIs'
            ],
          },
          {
            id: 2,
            name: "ai-resume-Builder.com",
            icon: "/images/safari.png",
            kind: "file",
            fileType: "url",
            href: "https://mern-stack-project-1-sxrm.onrender.com",
            position: "top-20 left-20",
          },
          {
            id: 4,
            name: "ai-resume-Builder.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 left-80",
            imageUrl: "/images/project-2.png",
          },
        ],
      },
  
      // ▶ Project 3
      {
        id: 7,
        name: "Social Media App",
        icon: "/images/folder.png",
        kind: "folder",
        position: "top-10 left-80",
        windowPosition: "top-[33vh] left-7",
        children: [
          {
            id: 1,
            name: "Social Media App Project.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-5 left-10",
            description: [
              "Our Social Media App is a platform for connecting with friends, sharing updates, and discovering new content.",
              "With a focus on user experience, the app offers seamless navigation, real-time updates, and a variety of engaging features.",
              "Built with React Native, the app provides a consistent experience across both iOS and Android devices.",
            ],
          },
          {
            id: 2,
            name: "social-media-app.com",
            icon: "/images/safari.png",
            kind: "file",
            fileType: "url",
            href: "https://pingup-ten-sable.vercel.app/",
            position: "top-10 right-20",
          },
          {
            id: 4,
            name: "social-media-app.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 right-80",
            imageUrl: "/images/project-3.png",
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
        imageUrl: "/images/suraj-1.jpg",
      },
      {
        id: 2,
        name: "casual-me.png",
        icon: "/images/image.png",
        kind: "file",
        fileType: "img",
        position: "top-28 right-72",
        imageUrl: "/images/suraj-2.jpg",
      },
      {
        id: 3,
        name: "conference-me.png",
        icon: "/images/image.png",
        kind: "file",
        fileType: "img",
        position: "top-52 left-80",
        imageUrl: "/images/suraj-3.jpg",
      },
      {
        id: 4,
        name: "about-me.txt",
        icon: "/images/txt.png",
        kind: "file",
        fileType: "txt",
        position: "top-60 left-5",
        subtitle: "Meet the Developer Behind the Code",
        image: "/images/suraj-1.jpg",
        description: [
          "Hey! I’m Suraj 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
          "I specialize in JavaScript, React, and Next.js—and I love making things feel smooth, fast, and just a little bit delightful.",
          "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
          "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping overpriced coffee, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
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
        imageUrl: "/images/trash-1.png",
      },
      {
        id: 2,
        name: "trash2.png",
        icon: "/images/image.png",
        kind: "file",
        fileType: "img",
        position: "top-40 left-80",
        imageUrl: "/images/trash-2.png",
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