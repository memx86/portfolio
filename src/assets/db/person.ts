import photo from "./photo";
import icecream from "./icecream";
import movies from "./movies";
import contacts from "./contacts";
import contactsBackend from "./contactsBackend";

const person = {
  name: "Yevhen",
  lastname: "Malyshko",
  phone: "+38-066-323-87-79",
  email: "memx86@gmail.com",
  location: "Zaporizhzhia, Ukraine",
  summary:
    "I love to code, find elegant solutions to complex problems, interact with new tools and to learn new skills and technologies. To challenge myself. To find different ways to make something work and to do it best way. To take ideas in my head and make them come to life.",
  links: [
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/yevhen-malyshko-490a49226/",
    },
    {
      title: "GitHub",
      url: "https://github.com/memx86",
    },
  ],
  photo,
  skills: [
    "JavaScript",
    "ES6+",
    "Typescript",
    "React.js",
    "Redux.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose ODM",
    "HTML5",
    "CSS3",
    "SASS",
    "Git",
    "Visual Studio Code",
  ],
  projects: [
    {
      title: "Icecream",
      url: "https://github.com/memx86/team-project-html-css",
      tech: ["HTML5", "CSS3"],
      image: icecream,
    },
    {
      title: "Filmoteka",
      url: "https://github.com/memx86/team-project-js-tmdb",
      tech: ["JavaScript"],
      image: movies,
    },
    {
      title: "Contacts Front-End",
      url: "https://github.com/memx86/goit-react-hw-08-phonebook",
      tech: ["React.js"],
      image: contacts,
    },
    {
      title: "Contacts Back-End",
      url: "https://github.com/memx86/nodejs-homework-template/tree/hw06-email",
      tech: ["Node.js "],
      image: contactsBackend,
    },
  ],
  languages: [
    { language: "Ukrainian", proficiency: "native" },
    { language: "Russian", proficiency: "native" },
    { language: "English", proficiency: "advanced" },
  ],
  education: {
    country: "Ukraine",
    university: "Zaporizhzhya National Technical University ",
    field: "Computer science",
    degree: "Master's degree",
    grade: "A",
    start: "September 2003",
    end: "June 2008 ",
  },
  experience: [
    {
      company: "Metabank",
      title: "Technical Support Specialist",
      location: "Zaporizhzhia, Ukraine",
      type: "Full-time",
      start: "January 2008",
      end: "August 2010",
      description:
        "Responding to customer inquiries and assisting in troubleshooting and resolving challenges.\nMaintaining system functionality. Installing and configuring computer systems and applications within the company.",
    },
    {
      company: "Security Service of Ukraine",
      title: "Officer",
      location: "Zaporizhzhia, Ukraine",
      type: "Full-time",
      start: "August 2010",
      end: "August 2020",
      description:
        "Operational Technology Department. Specifics is classified.",
    },
    {
      company: "Freelance",
      title: "Security consultant",
      location: "Zaporizhzhia, Ukraine",
      type: "Full-time",
      start: "August 2020",
      end: "Up to now",
      description:
        "Designing, implementing, and maintaining security protocols, policies, plans, and systems to cover all possible security threats.\nTesting and analyzing assets for potential security threats.\nIdentifying possible security threats and determining the best security measures. Suggesting improvements to existing security systems.",
    },
  ],
};
export default person;
