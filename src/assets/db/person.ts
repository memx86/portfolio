import photoSJpg from "assets/images/photo-s.jpg";
import photoS2xJpg from "assets/images/photo-s@2x.jpg";
import photoS3xJpg from "assets/images/photo-s@3x.jpg";
import photoLJpg from "assets/images/photo-l.jpg";
import photoL2xJpg from "assets/images/photo-l@2x.jpg";
import photoL3xJpg from "assets/images/photo-l@3x.jpg";
import photoSWebp from "assets/images/photo-s.webp";
import photoS2xWebp from "assets/images/photo-s@2x.webp";
import photoS3xWebp from "assets/images/photo-s@3x.webp";
import photoLWebp from "assets/images/photo-l.webp";
import photoL2xWebp from "assets/images/photo-l@2x.webp";
import photoL3xWebp from "assets/images/photo-l@3x.webp";

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
  photo: {
    jpgS: photoSJpg,
    jpgS2x: photoS2xJpg,
    jpgS3x: photoS3xJpg,
    jpgL: photoLJpg,
    jpgL2x: photoL2xJpg,
    jpgL3x: photoL3xJpg,
    webpS: photoSWebp,
    webpS2x: photoS2xWebp,
    webpS3x: photoS3xWebp,
    webpL: photoLWebp,
    webpL2x: photoL2xWebp,
    webpL3x: photoL3xWebp,
  },
  skills: [
    "JavaScript",
    "ES6+",
    "Typescript",
    "React.js",
    "Redux.js",
    "Node.js",
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
    },
    {
      title: "Filmoteka",
      url: "https://github.com/memx86/team-project-js",
      tech: ["JavaScript"],
    },
    {
      title: "Contacts Front-End",
      url: "https://github.com/memx86/goit-react-hw-08-phonebook",
      tech: ["React.js"],
    },
    {
      title: "Contacts Back-End",
      url: "https://github.com/memx86/nodejs-homework-template/tree/hw06-email",
      tech: ["Node.js "],
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
      title: "Technical Support Specialist",
      company: "Metabank",
      location: "Zaporizhzhia, Ukraine",
      type: "Full-time",
      start: "January 2008",
      end: "August 2010",
      description:
        "Responding to customer inquiries and assisting in troubleshooting and resolving challenges.\nMaintaining system functionality. Installing and configuring computer systems and applications within the company.",
    },
    {
      title: "Officer",
      company: "Security Service of Ukraine",
      location: "Zaporizhzhia, Ukraine",
      type: "Full-time",
      start: "August 2010",
      end: "August 2020",
      description: "Technical specialist. Classified.",
    },
    {
      title: "Security consultant",
      company: "Freelance",
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
