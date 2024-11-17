import algopro from "../assets/project/algopro.svg";
import gourmet from "../assets/project/gourmet.svg";
import prepwise from "../assets/project/prepwise.svg";
import VoyageVault from "../assets/project/VoyageVault.svg";
import lipreader from "../assets/project/lipreader.svg";
import blogspot from "../assets/project/blogspot.svg";
import musicgenre from "../assets/project/musicgenre.svg";
import voicebhasha from "../assets/project/voicebhasha.svg";
import cinema from "../assets/project/cinema.svg";
import budgetbuddy from "../assets/project/budget_buddy.svg";
import captionme from "../assets/project/captionme.svg";
import todo from "../assets/project/todo.svg";
import sentiment from "../assets/project/sentiment.svg";
import blackbox from "../assets/blog/blackbox.svg";
import typo from "../assets/blog/typo.svg";


export const HERO_CONTENT = `A passionate Computer Science student delving into Machine Learning, Data Science, and Web Development. Enthusiastic about turning data into insights, and ideas into impactful solutions. Let’s explore the tech cosmos together and transform challenges into opportunities for growth!`;

export const ABOUT_TEXT = `Hello! I'm Aastha Gupta, currently in my final year of studying Computer Science and Engineering at Vellore Institute of Technology. My academic journey is driven by a passion for exploring the dynamic fields of Machine Learning, Data Science, and Web Development. I thrive on leveraging technology to solve real-world challenges, with a keen interest in data analysis, visualization, and deriving actionable insights. I also enjoy designing and developing user-centric solutions that blend creativity with functionality. Beyond my tech pursuits, I'm an avid reader and a certified Potterhead proudly sorted into Gryffindor. I find joy in listening to music, which fuels my creativity, and I'm always excited to embrace challenges that turn into opportunities for continuous learning and growth.`;

export const EXPERIENCES = [
  {
    year: "Jun 2024 - Aug 2024",
    role: "Application Developer Intern",
    company: "Schneider Electric",
    description: `Enhanced industrial automation solutions using C# for system optimization and efficiency.`,
    technologies: ["C#", "Industrial Automation"],
  },
  {
    year: "Aug 2023 - Dec 2023",
    role: "Data Science Intern",
    company: "Jio Platforms Limited",
    description: `Contributed to an audio content similarity project, utilizing advanced algorithms and deep learning techniques to enhance audio analysis and comparison.`,
    technologies: ["Deep Learning", "Audio Processing", "Python"],
  },
  {
    year: "Aug 2023 - Jan 2024",
    role: "Analysis and Data Science Intern",
    company: "IndiGG",
    description: `Executed diverse data-related tasks with precision, employing analytical skills and leveraging tools to ensure effective data management and insights generation.`,
    technologies: ["Data Analysis", "Python", "SQL"],
  },
  {
    year: "Mar 2022 - Present",
    role: "Marketing and Content Head",
    company: "Google Developers Students Club",
    description: `Led the Digital Marketing and Content Team, significantly increasing the platform reach by 2 million users through innovative strategies.`,
    technologies: ["Digital Marketing", "Content Creation", "Leadership"],
  },
  {
    year: "Mar 2022 - May 2023",
    role: "Public Speaker",
    company: "Toastmasters International",
    description: `Dynamic public speaker inspiring and motivating audiences through effective communication and leadership skills.`,
    technologies: ["Public Speaking", "Leadership", "Communication"],
  },
];


export const PROJECTS = [
  {
    img: algopro,
    title: "AlgoPro",
    description:
      "A MERN stack-based DSA tracker with 450 questions, a code optimizer, and video tutorials, leveraging various APIs to enhance functionality and user experience.",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "API"],
    link: "https://drive.google.com/file/d/1dKZF9Sl-XkIASGx6b0EGqi9hL1_-6k7Y/view?usp=sharing",
    github: "https://github.com/aastha2003gupta/algoPro",
  },
  {
    img: gourmet,
    title: "Gourmet Guru",
    description:
      "AI-powered recipe app using React, Tailwind CSS, and Generative AI, providing personalized recipe recommendations based on user-input ingredients.",
    technologies: ["React", "Tailwind CSS", "Generative AI", "API"],
    link: "https://drive.google.com/file/d/1PGXE-EH_sRfTKOzeKAJLokoUyYbl4R-I/view?usp=drive_link",
    github: "https://github.com/aastha2003gupta/gourmet_guru",
  },
  {
    img: prepwise,
    title: "Prep Wise",
    description:
      "Your comprehensive interview preparation companion providing roadmaps, questions, cover letter generator, and notes for a successful career journey.",
    technologies: ["React", "Node.js", "Express.js"],
    link: "https://drive.google.com/file/d/1VBhBSCpPy1zZNkMr0pd4T1pK5HV1gjST/view?usp=sharing",
    github: "https://github.com/aastha2003gupta/PrepWise",
  },
  {
    img: VoyageVault,
    title: "Voyage Vault",
    description:
      "AI-powered travel app with top attractions, itinerary planning, language translation, expense tracking, and currency conversion.",
    technologies: ["React", "API", "Tailwind CSS"],
    link: "https://drive.google.com/file/d/1XDYr5Obk1tY5PBzKTw54oaFG08hEYRrW/view?usp=sharing",
    github: "https://github.com/aastha2003gupta/voyage-vault",
  },
  {
    img: lipreader,
    title: "Lip Reader",
    description:
      "End-to-end deep learning solution utilizing LSTM networks to decode spoken language from lip movements with high accuracy.",
    technologies: ["Python", "Deep Learning", "LSTM", "OpenCV"],
    link: "https://drive.google.com/file/d/17IvvQIToxA1pbXvuXmUxHIAmccC3gffl/view?usp=sharing",
    github: "https://github.com/smartinternz02/SI-GuidedProject-601538-1697561153",
  },
  {
    img: blogspot,
    title: "BlogSpot",
    description:
      "Full-stack blogging platform for content creators with features like post categorization, user authentication, and rich text editor support.",
    technologies: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/aastha2003gupta/blogspot",
  },
  {
    img: musicgenre,
    title: "Music Genre Classifier",
    description:
      "Deep learning model utilizing audio signal processing to classify music into genres based on spectral and temporal features.",
    technologies: ["Python", "TensorFlow", "Librosa", "Scikit-learn"],
    github: "https://github.com/aastha2003gupta/music-genre-classifier",
  },
  {
    img: voicebhasha,
    title: "Voice Bhasha",
    description:
      "Voice recognition and translation app supporting multiple Indian languages using Google's Speech-to-Text API.",
    technologies: ["React Native", "Speech-to-Text API"],
    github: "https://github.com/aastha2003gupta/voicebhasha",
  },
  {
    img: cinema,
    title: "Cinema Recommender",
    description:
      "Movie recommendation system using collaborative filtering techniques to provide personalized movie suggestions.",
    technologies: ["Python", "Pandas", "Scikit-learn"],
    github: "https://github.com/aastha2003gupta/cinema-recommender",
  },
  {
    img: budgetbuddy,
    title: "Budget Buddy",
    description:
      "Financial management tool with expense tracking, budget setting, and visual analytics to help users control spending.",
    technologies: ["React", "Node.js", "Chart.js"],
    github: "https://github.com/aastha2003gupta/budgetbuddy",
  },
  {
    img: captionme,
    title: "CaptionMe",
    description:
      "AI-powered tool to generate Instagram captions using a fine-tuned GPT model with real-time hashtag suggestions.",
    technologies: ["React", "OpenAI API"],
    github: "https://github.com/aastha2003gupta/captionme",
  },
  {
    img: todo,
    title: "ToDo List App",
    description:
      "A simple yet effective task management app built with React and Redux for enhanced state management.",
    technologies: ["React", "Redux"],
    github: "https://github.com/aastha2003gupta/todo-app",
  },
  {
    img: sentiment,
    title: "Sentiment Analyzer",
    description:
      "NLP-based sentiment analysis tool using VADER and RoBERTa models to classify text into positive, negative, or neutral sentiment.",
    technologies: ["Python", "NLTK", "Transformers"],
    github: "https://github.com/aastha2003gupta/sentiment-analyzer",
  },
];

export const BLOGS =  [
    {
      img:blackbox,
      title: "Typography and its Impact on Graphic Design",
      link: "https://medium.com/gdg-vit/typography-and-its-impact-on-graphic-design-a1bf3bdd62a0",
      description: "Uncover the influential role of typography in graphic design, delving into its transformative impact on visual communication through an insightful blog."
    },
    {
      img:typo,
      title: "Unboxing Complexity: Black Box Networks Demystified",
      link: "https://medium.com/gdg-vit/unboxing-complexity-black-box-networks-demystified-64c170067927",
      description: "Explore the depths of Blackbox Networks and Explainable AI in this blog, unraveling the mysteries of complex algorithms and demystifying the inner workings of artificial intelligence for a clearer understanding."
    },
  ];

export const CONTACT = {
  address: "Bengaluru, India ",
  phoneNo: "+12 4555 666 00 ",
  email: "agaasthagupta@gmail.com",
};