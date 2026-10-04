const projects = [
  {
    title: "Dental Clinic Website",

    featured: true,

    status: "Completed",

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

    status: "In Progress",

    description:
      "A modern personal portfolio website showcasing my skills, projects, experience, and development journey.",

    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "JavaScript",
      "Three.js",
    ],

    features: [
      "3D interactive hero section",
      "Responsive design",
      "Skills showcase",
      "Project showcase",
    ],

    image: "/images/projects/portfolio.png",

    github: "https://github.com/tonyphilip009/my_portfolio.git",

    live: "",
  },
];

export default projects;