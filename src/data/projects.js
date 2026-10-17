const projects = [
  {
    title: "Dental Clinic Website",

    featured: true,

    status: "In Progress",

    description:
      "A full-stack dental clinic management and appointment booking website built with Django and React. The system allows patients to explore services, view dentists, check available time slots, and book appointments.",

    technologies: [
      "Django",
      "Django REST Framework",
      "React",
      "MySQL",
      "Axios",
      "Tailwind CSS",
    ],

    features: [
      "Appointment booking",
      "Dentist availability",
      "Dynamic time slots",
      "Booking validation",
      "Double-booking prevention",
      "Services and dentist sections",
      "Testimonials and gallery",
      "REST API integration",
    ],

    stackSummary: {
      frontend: "React, Axios, Tailwind CSS",
      backend: "Django, Django REST Framework",
      database: "MySQL",
    },

    image: "/images/projects/dental-clinic.png",

    github: "https://github.com/tonyphilip009/dental_clinic",

    live: "",
  },

  {
    title: "Developer Portfolio",

    status: "Completed",

    description:
      "A modern personal portfolio website built to showcase my technical skills, projects, development experience, and continuous learning journey.",

    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "JavaScript",
      "Three.js",
      "React Three Fiber",
    ],

    features: [
      "3D interactive hero section",
      "Responsive design",
      "Skills showcase",
      "Dynamic project filtering",
      "Reusable React components",
      "Project status tracking",
      "Interactive project cards",
      "GitHub project integration",
    ],

    stackSummary: {
      frontend: "React, Tailwind CSS, JavaScript",
      threeD: "Three.js, React Three Fiber",
      buildTool: "Vite",
    },

    highlights: [
      "Component-based React architecture",
      "Responsive layouts for different screen sizes",
      "Interactive 3D hero experience",
      "Reusable project and skills sections",
      "Dynamic project filtering",
      "Git and GitHub based development workflow",
      "Production builds using Vite",
    ],

    image: "/images/projects/portfolio.png",

    github: "https://github.com/tonyphilip009/my_portfolio",

    live: "",
  },

  {
    title: "SOC Home Lab for Threat Detection and Incident Response",

    status: "Completed",

    featured: true,

    description:
      "A fully functional Security Operations Center home lab built to simulate, detect, and investigate real-world cyberattacks using Microsoft Sentinel and modern SIEM technologies.",

    technologies: [
      "Microsoft Sentinel",
      "Azure",
      "Windows 10",
      "Kali Linux",
      "VirtualBox",
      "Sysmon",
      "PowerShell",
      "Azure Monitor Agent",
    ],

    features: [
      "Multi-VM SOC architecture",
      "Windows event log monitoring",
      "Sysmon and PowerShell logging",
      "SMB brute-force attack simulation",
      "PowerShell attack simulation",
      "Microsoft Sentinel Analytics Rules",
      "RDP brute-force detection",
      "Suspicious PowerShell detection",
      "Failed login detection",
      "Incident investigation",
    ],

    stackSummary: {
      platform: "Microsoft Sentinel",
      environment: "Windows 10, Kali Linux, VirtualBox",
      monitoring: "Azure Monitor Agent, Sysmon",
    },

    image: "/images/projects/soc-home-lab.png",

    github:
      "https://github.com/tonyphilip009/soc-lab-microsoft-sentinel-project",

    live: "",
  },
];

export default projects;