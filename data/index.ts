export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Experiences", link: "#experiences" },
    { name: "Contact", link: "#contact" },
  ];

export const gridItems = [
    {
      id: 1,
      title: "I prioritize user-centric coding, ensuring each feature directly meets user needs and enhances their experience.",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[30vh] lg:max-h-[60vh] md:min-h-[40vh] md:max-h-[40vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a finance management dashboard",
      description: "SpendSmart",
      className: "relative md:col-span-3 md:row-span-2",
      imgClassName: "absolute bottom-0 right-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1 md:max-h-[20vh]",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];

export const projects = [
    {
        id: 1,
        title: "Pictogram",
        des: "an Instagram clone built with React, TailwindCSS, and Appwrite",
        img: "/pictogram.svg",
        iconLists: ["/tail.svg", "/re.svg", "/ts.svg", "/appwrite.svg"],
        link: "https://pictogram-lqc.vercel.app/",
      },
      {
        id: 2,
        title: "Record",
        des: "A simple Kanban board including live chat built with Angular 17, TailwindCSS, Java Spring Boot",
        img: "/Record.svg",
        iconLists: ["/angular.svg", "/tail.svg", "/springboot.svg", "/ts.svg"],
        link: "https://github.com/PhilippeLqc/RecordFrontend",
      },
]

export const testimonials = [
    {
        quote: "Philippe excelled in operational tasks, demonstrated exceptional client communication, remained unflappable under pressure, and swiftly understood complex concepts. His proactive approach made him an invaluable asset.",
        name: "Fabien M",
        title: "Software Application Engineer",
        image: "/fabien.jpeg",
    },
    {
        quote: "Philippe's positive mindset, ability to balance autonomy and collaboration, and his strong grasp of JavaScript, ReactJS, and NodeJS made him a standout candidate. His proactive approach and excellent problem-solving skills promise great potential in any development team.",
        name: "Joé M",
        title: "Former teacher & Fullstack developper",
        image: "/joe.jpeg",
    },
    {
        quote: "Always available and ready to help, Philippe is attentive and considerate. He has excellent interpersonal skills, demonstrating patience and active listening to meet client expectations. He integrates seamlessly into teams, making it a pleasure to work alongside him.",
        name: "Emma L",
        title: "Bank Advisor",
        image: "/emma.jpeg",
    },
]

export const companies = [
    {
        id: 1,
        name: "Deolan",
        img: "/deolan.svg",
        nameImg: "deolan",
    },
    {
        id: 2,
        name: "Au Max Pour Moi",
        img: "/aumax.svg",
        nameImg: "aumaxpourmoi",
    },
    {
        id: 3,
        name: "Crédit mutuel Arkea",
        img: "/arkea.svg",
        nameImg: "arkea",
    },
    {
        id: 4,
        name: "La Capsule",
        img: "/la_capsule.svg",
        nameImg: "lacapsule",
    },
    {
        id: 5,
        name: "Ib Cegos",
        img: "/ibcegos.svg",
        nameImg: "ibcegos",
    },
]

export const workExperience = [
    {
        id: 1,
        company: "Ib Cegos",
        title: "Student",
        date: "Feb 2024 - Apr 2024",
        place: "Bordeaux, FR",
        desc: ["Studying web development as frontend & backend", "Java Spring & Spring Boot as framework", "Angular 13 & 17 as frontend", "TailwindCSS & Bootstrap", "Agile Scrum methodology"],
        imglogo: "/ibcegoslogo.svg",
        className: "md:col-span-2",
    },
    {
        id: 2,
        company: "La Capsule",
        title: "Student",
        date: "Feb 2023 - Jun 2023",
        place: "Bordeaux, FR",
        desc: ["Studying web development as frontend & backend", "NodeJS as backend", "React & React Native as frontend framework", "NextJS & ExpressJS", "Agile Scrum methodology"],
        imglogo: "/lacapsulelogo.svg",
        className: "md:col-span-2",
    },
    {
        id: 3,
        company: "Au Max Pour Moi",
        title: "IT support & bank advisor",
        date: "2022 - 2023",
        place: "Bordeaux, FR",
        desc: ["Analyse and resolve technical issues", "Provide technical & IT support","write technical documentation", "Provide financial advice"],
        imglogo: "/aumaxlogo.svg",
        className: "md:col-span-2",
    },
    {
        id: 4,
        company: "Crédit Mutuel Arkea",
        title: "Bank & Insurance Advisor",
        date: "2019 - 2022",
        place: "Bordeaux, FR",
        desc: ["Provide financial advice B2C & B2B", "Provide IT support", "Digital specialist"],
        imglogo: "/arkealogo.svg",
        className: "md:col-span-2",
    },
    {
        id: 5,
        company: "Deolan",
        title: "IT support & Assistant Manager",
        date: "2016 - 2019",
        place: "Mérignac, FR",
        desc: ["Developed and tested LogBook app features", "Provided UI/UX feedback and created user stories", "Managed and validated client data on Deolan's platform", "Documented new features and usage instructions"],
        imglogo: "/deolanlogo.svg",
        className: "md:col-span-2",
    },

]

export const socialMedia = [
    {
      link: "https://github.com/PhilippeLqc",
      id: 'github',
      img: "/git.svg",
    },
    {
      link: "https://www.linkedin.com/in/philippe-lqc/",
      id: 'linkedin',
      img: "/link.svg",
    },
    {
      link: "https://twitter.com/pilipou",
      id: 'twitter',
      img: "/twit.svg",
    },
    {
      link: "https://www.instagram.com/pilipou/",
      id: 'instagram',
      img: "/insta.svg",
    },
  ];
