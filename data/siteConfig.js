module.exports = {
  siteTitle: "Hi! I'm Carlos Mederos!",
  siteDescription: `This is my personal website`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Carlos Mederos',
  twitterUsername: 'krlosmederos',
  githubUsername: 'krlosmederos',
  authorAvatar: '/images/avatar.jpg',
  authorDescription: `I'm a Software Engineer, currently focused in .Net development and fintech solutions.<br/><br/>
  I worked in multiple stacks (.Net, Typescript, SQL, Azure) and I'm starting as a Gopher.<br/><br/>
  I currently work at a Chilean fintech as a Senior Software Developer and mainly working with <strong>ASP.NET Core, React, Azure, SQL Server</strong>`,
  skills: [
    {
      name: '.Net',
      level: 90,
    },
    {
      name: 'Azure',
      level: 85,
    },
    {
      name: 'SQL',
      level: 75,
    },
    {
      name: 'React',
      level: 65,
    },
    {
      name: 'Typescript',
      level: 60,
    },
    {
      name: 'Go',
      level: 10,
    },
    {
      name: 'Git',
      level: 75,
    },
    {
      name: 'Microservices',
      level: 60,
    },
  ],
  jobs: [
    {
      company: 'Tanner',
      begin: {
        month: 'nov',
        year: '2019',
      },
      duration: null,
      location: 'Santiago, CL',
      occupation: 'Senior Software Developer',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      company: 'Gosocket',
      begin: {
        month: 'dec',
        year: '2018',
      },
      duration: '1 year',
      location: 'Santiago, CL',
      occupation: 'Senior Software Developer',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      company: 'Freelance',
      begin: {
        month: 'apr',
        year: '2018',
      },
      duration: '9 months',
      location: 'Santiago, CL',
      occupation: 'Full Stack Developer',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      company: 'Universidad de la Isla de la Juventud',
      begin: {
        month: 'sept',
        year: '2017',
      },
      duration: '8 months',
      location: 'Isle of Youth, CU',
      occupation: 'Assistant Teacher',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ],
  publications: [
    {
      title: 'React Native intermediate level',
      company_medium: 'OpenWebinars',
      date: {
        month: 'jun',
        year: '2019',
      },
      link: 'https://openwebinars.net/cursos/react-native-intermedio/',
      description:
        'Online training recorded for spanish e-learning platform. The training is for developers who know a little bit of ReactNative and wants to learn more about the platform',
    },
    {
      title: 'React Native for beginners',
      company_medium: 'OpenWebinars',
      date: {
        month: 'jun',
        year: '2019',
      },
      link: 'https://openwebinars.net/cursos/react-native-principiantes/',
      description:
        'Online training recorded for spanish e-learning platform. The training is for JS developers willing to learn the basics of ReactNative',
    },
  ],
  education: [
    {
      school: 'Universidad Tecnologica de la Habana',
      degree: 'Bachelor degree',
      field: 'Process Control Engineering',
      startYear: 2012,
      endYear: 2017,
    },
  ],
  languages: [
    {
      language: 'Spanish',
      level: 'Native tongue',
      code: 'ES',
    },
    {
      language: 'English',
      level: 'Intermediate Written & Spoken',
      code: 'GB',
    },
  ],
  social: {
    twitter: 'https://twitter.com/krlosmederos/',
    linkedin: 'https://www.linkedin.com/in/krlosmederos/',
    github: 'https://github.com/krlosmederos/',
    email: 'krlosmederos@gmail.com',
  },
  hobbies: [
    {
      name: 'Baseball',
      icon: 'FaBaseballBall',
    },
    {
      name: 'Football',
      icon: 'FaFutbol',
    },
    {
      name: 'Code',
      icon: 'FaCode',
    },
    // {
    //   name: 'Traveling',
    //   icon: 'FaPlane',
    // },
    // {
    //   name: 'Movies & Series',
    //   icon: 'FaTv',
    // },
  ],
  siteUrl: 'https://krlosmederos.info',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-165032179-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  display: 'minimal-ui',
  icon: 'src/favicon.jpg',
  resume: '/not_found.pdf',
  headerLinks: [
    // {
    //   label: '@krlosmederos',
    //   url: '/',
    // },
    {
      label: 'About',
      url: 'about',
    },
    {
      label: 'Skills',
      url: 'skills',
    },
    {
      label: 'Experience',
      url: 'experience',
    },
    // {
    //   label: 'Publications',
    //   url: 'publications',
    // },
    {
      label: 'Education',
      url: 'education',
    },
    {
      label: 'Hobbies',
      url: 'hobbies',
    },
    // {
    //   label: 'Contact',
    //   url: 'contact',
    // },
  ],
}
