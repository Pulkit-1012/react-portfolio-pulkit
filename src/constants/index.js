import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I am a passionate Software Developer with a knack for crafting robust and scalable web applications. With 7 months of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MongoDB and other technologies like Deep Learning, and Python. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

//need
export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. Currently in my final year at Delhi Technological University, BTech(IT), I have worked with a variety of technologies, including React, Next.js, Node.js, MongoDB, Express.js, Python, Artificial Intelligence and Deep-Learning. My journey in web development began with a deep curiosity for how things work, and it has evolved into a passion where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy playing musical instruments, realism sketching and cooking.`;

export const EXPERIENCES = [
  {
    year: "June 2024 - July 2024",
    role: "Deep Learning Research Intern",
    company: "Delhi Technological University",
    description: `AI/Deep Learning Research Intern - Cardiology: Developed deep learning models to detect atrial fibrillation (AFib), reviewing 20+ papers and combining architectures like ResNet, DenseNet, and VGG16/19. Trained and fine-tuned models on curated datasets, optimizing performance and accuracy.`,
    technologies: ["Python", "VGG16/19", "Resnet", "Densenet"],
  },
  {
    year: "Jan 2023 - May 2023",
    role: "Frontend Developer",
    company: "Fresources.tech",
    description: `Contributed in the design and development of user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["React.js", "TailwindCSS", "Next.js"],
  },
];

export const PROJECTS = [
  {
    title: "StudyNotion – EdTech Platform",
    image: project1,
    description:
      " StudyNotion is a fully functional ed-tech platform that enables a user to create, consume and rate educational content.",
    technologies: ["Reactjs", "Tailwind", "Swiper.js", "Express.js", "Node.js", "MongoDB", "Redux.js"],
  },
  {
    title: "Fresources.tech - Website",
    image: project2,
    description:
      "Contributed in the development of an admin dashboard for efficient user management, content organization and Resource handling, streamlining administrative task and enhancing system functionality. ",
    technologies: ["React.js", "Tailwind", "Next.js", "Swiper.js"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React.js", "Tailwind"],
  },
  {
    title: "TruEducate - Website",
    image: project4,
    description:
      "TruEducate is a fully responsive and beautiful Ed-Tech landing page which lets a user to select a course of their choice. ",
    technologies: ["HTML", "CSS", "Javascript", "Formspree"],
  },
];

export const CONTACT = {
  address: "Punjabi Bagh, New Delhi",
  phoneNo: "+91 8860333183",
  email: "pulkit0it@gmail.com",
};
