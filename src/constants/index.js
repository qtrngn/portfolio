import {
    contact,
    css,
    git,
    github,
    html,
    javascript,
    linkedin,
    nodejs,
    react,
    tailwindcss,
    vc,
    muji,
    saigon,
    netflix,
    picasso,
    restaurant,
    petsmart,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
   
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
   
   
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
   
];

export const experiences = [
    
    {
        title: "Associate Marketing Collaborator Internship",
        company_name: "SaiGon New Port Corporation",
        icon: saigon,
        iconBg: "#FAF9F6",
        date: "Jan 2016 - Jan 2017",
        points: [
            "Supporting administrative tasks.",
        ],
    },

    {
        title: "Banquet Server",
        company_name: "Vancouver Club",
        icon: vc,
        iconBg: "#000000",
        date: "July 2021 - Dec 2021",
        points: [
            "Assisting with event preparation, set up and closing",
        ],
    },

    {
        title: "Seasonal Sale Associate",
        company_name: "Muji",
        icon: muji,
        iconBg: "#7f0019",
        date: "Sep 2023 - Dec 2023",
        points: [
            "Understanding customer's need and providing recommendations",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/qtrngn',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/truc-quynh-nguyen-642a2633a/',
    }
];

export const projects = [
    {
        iconUrl: netflix,
        theme: 'btn-back-black',
        name: 'Netflix Clone',
        description: 'This project aims to build a Netflix clone landing page using React JS, focusing exclusively on the front-end design without backend integration.',
        link: 'https://netflixclone-landingpage.trucquynhng.com/',
    },
    {
        iconUrl: picasso,
        theme: 'btn-back-pink',
        name: 'Portfolio website',
        description: 'This project aimed to understand the fundamental principles of HTML and CSS by building a three-pages portfolio website showcasing the work of artist Pablo Picasso.',
        link: 'http://finalproject.quynhtrucng.com/',
    },
    {
        iconUrl: restaurant,
        theme: 'btn-back-yellow',
        name: 'Restaurant Website',
        description: 'The primary objective was to develop a responsive website that functions seamlessly across all devices using HTML, CSS, and Javascript.',
        link: 'https://termproject-webscripting1.trucquynhng.com/',
    },
    {
        iconUrl: petsmart,
        theme: 'btn-back-green',
        name: 'PetSmart’s Application Redesign',
        description: 'The project focused on enhancing the app’s user experience by simplifying navigation, improving search functionality, and redesigning the service booking features and overall visual layout.',
        link: 'https://www.figma.com/design/IEsuAO205NYueqXIWnDvTr/UI-UX?node-id=167-12680&t=RyY0SxnSg31rKG3s-1',
    },
    
];