import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Merina Joy',
  subtitle: "I'm a Front end Web developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "I'm a frontend web developer with experience in building projects using HTML, CSS, JavaScript and React among other skills. I have a passion for learning and taking up new challenges. I have explored other fields like Architecture and design but found that my interest lies in web development. I'm currently looking to join a company where i can actively contribute to its growth and also upgrade my skills.",
  paragraphTwo: "I'm currently freelancing and I'm open to collaborations on interesting projects.",
  paragraphThree: 'I have shared my resume here.',
  resume: 'https://docs.google.com/document/d/17lD__xGvJzPWxsSL1fj9M_XSm4UUWWOBXzhYiS_7Hzg/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.PNG',
    title: 'Doggy Day Care',
    info: "This is a single page web application, designed for offering premium grooming services to pets, specifically dogs. It's built using HTML, CSS and Bootstrap. It's hosted using Github and Netlify." ,
    info2: '',
    url: 'https://doggy-day-care.netlify.app',
    repo: 'https://github.com/Merinajoy/Doggy-Day-Care', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.PNG',
    title: 'QTrip',
    info: "This is website for making hotel reservations and booking tickets for sight-seeing adventures around the world. It's built using HTML, CSS, Bootstrap and JavaScript. It's hosted using Heroku and Netlify." ,
    info2: '',
    url: 'https://mj-qtrip.netlify.app',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.PNG',
    title: 'QKart',
    info: "This is an online shopping website where you can browse various products, add them to cart and eventually place orders for them. It's built using HTML, CSS, JavaScript, JQuery and React. It's hosted using Heroku and Netlify.",
    info2: '',
    url: 'https://qkart-shopping-app.netlify.app',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project4.PNG',
    title: 'Keeper',
    info: "This is a website for creating notes and to-do lists. And also for writing down ideas. It's built using HTML, CSS, JavaScript, JQuery, React and Material UI. It's hosted using Netlify.",
    info2: '',
    url: 'https://keeper-take-notes.netlify.app',
    repo: 'https://github.com/Merinajoy/Keeper', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "Would you like to work with me? Here's my email id.",
  btn: 'merina.jy@gmail.com',
  email: 'merina.jy@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/merina.jy/?hl=en',
    },
    
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'http://www.linkedin.com/in/merina-joy',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Merinajoy',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
