import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  shopee,
  nogle,
  line_taxi,
  appworks_school,
  cryptoTracker,
  portfolio,
  chatRoom,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: web,
  },
  {
    title: 'Overseas Working Experience',
    icon: mobile,
  },
  {
    title: 'Active Leaner',
    icon: backend,
  },
  {
    title: 'Team Player',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'Figma',
    icon: figma,
  },
  {
    name: 'Docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Front-End Engineer',
    company_name: 'Nogle',
    icon: nogle,
    iconBg: '#E6DEDD',
    date: 'Sep 2022 - Feb 2023',
    points: [
      'Create reusable Vue.js components and maintain component in Storybook on Payment project ',
      'Delegate landing page on credit card project, collaborating with PMs, designer and backend engineers',
      'Contribute on white label projects and customize the features of crypto trade applications for the cutomers’ requirements ',
      'Key Skills: Vue.js, i18n, yarn, Sass, Figma, Git, Postman, Storybook, Jira, Confluence, Agile, Scrum',
    ],
  },
  {
    title: 'Front-End Engineer',
    company_name: 'Shopee Singapore',
    icon: shopee,
    iconBg: '#E6DEDD',
    date: 'Nov 2020 - Aug 2022',
    points: [
      'Develop and maintain a service system for regional teams across 9 markets, and increase the usage of requesting tickets on the platform by an average of 300% growth after launching the system.',
      'Build ShopeePay applications by styled-components and Google Script API, deliver in Thailand as well as in Indonesia, generating over 10,000+ service requests in each region. Improve SEO by inserting meta tags and embed google tag management to collect the marketing data with local operation teams',
      'Maintain components styling with Design Team to make project design consistent adhering to Shopee branding design, and build internal shared UI components by using Figma as a communication tool',
      'Evaluate the feasibility of requirements with PM, designers, and Backend, discuss the better solution, prioritize the tasks, write and maintain technical documents, and complete the requirements on the scheduled timeline',
      'Create reusable react components, plan the structure of project from scratch, and lead the interns to complete the assigned projects',
      'Build a project of data dashboard by using the chart and statistic table to track the important index of the service system, and improve the efficiency of the operation team',
      'Key Skills: React Hooks, Redux, Webpack, Ant Design library, npm, styled-components, Sass, Figma, Git,	Postman, react-chart.js, Google Script API, Jira, Confluence',
    ],
  },
  {
    title: 'Front-End Engineer',
    company_name: 'LINE TAXI',
    icon: line_taxi,
    iconBg: '#E6DEDD',
    date: 'Dec 2019 - Nov 2020',
    points: [
      'Cooperate with the marketing team to build promotion events for a 2M+ users base, requiring 2000+ new users and increasing existing users activeness',
      'Complete detailed programming and development tasks for internal management websites used by customer service, operation, and marketing departments',
      'Improve pages to display users trip details and ride routes history by producing visual elements',
      'Implement pagination, filter, and keyword search on the explore page, allowing users to find their desired results efficiently',
      'Rebuild and refactor internal website by improving UI and creating reusable react components',
      'Key Skills: React Class Components, Gulp, CSS, Docker, LINE LIFF framework, Google Map Service, Third-party map service',
    ],
  },
  {
    title: 'Front-End Class Trainee',
    company_name: 'AppWorks School',
    icon: appworks_school,
    iconBg: '#E6DEDD',
    date: 'Jun 2019 - Oct 2019',
    points: [
      'Polished self-learning and problem-solving abilities on web development through deeply engaging in projects that required 75 hours per week over 16 weeks',
      'Built an e-commerce site with plain JavaScript in 3 weeks',
      'Independently completed a personal project Dumblr with React in 5 weeks, including designing UI, developing, refactoring and debuggingg',
      'Key Skills: HTML, CSS, JavaScript, Firebase, React, Material-UI, Git',
    ],
  },
];

const educations = [
  {
    experiences: [
      'Honor: Excellence Graduate Student Application Award (The 1st prize)',
      'Honor: Academic Excellence Award (Top 3)',
      'Overall GPA: 4.06 / 4.3',
    ],
    school_name: 'National Chiao Tung University ',
    duration: '09/2014 – 06/2017',
    major: 'Master of Communication and Technology',
  },
  {
    experiences: [
      'Leadership: The Student Association of Department − Vice President',
      'Minor major: The Applied English Program',
      'Overall GPA: 4.09 / 4.5',
    ],
    school_name: 'National Chung Cheng University',
    duration: '09/2010 – 06/2014',
    major: 'Bachelor of Communication',
  },
];

const projects = [
  {
    name: '3D Animation Portfolio',
    description:
      'Web-based portfolio is created by stunning 3D models and geometries with various lights, as well as understand the 3D world with a camera and positioning of an object in space. Viewers enable to send emails through a form on the website',
    tags: [
      {
        name: 'React & vite',
        color: 'blue-text-gradient',
      },
      {
        name: 'ThreeJS',
        color: 'green-text-gradient',
      },
      {
        name: 'React Three Fiber',
        color: 'pink-text-gradient',
      },
      {
        name: 'TailwindCSS',
        color: 'grey-text-gradient',
      },
    ],
    image: portfolio,
    source_code_link: 'https://github.com/elftvxq/3D_portfolio',
  },
  {
    name: 'Realtime Chat Room',
    description:
      'A realtime chat room implemented by Socket.io, TypeScript and TailwindCSS. Users are able to join the different rooms and send messages to each other. The chat room is responsive and can be used on mobile devices as well as on desktops',
    tags: [
      {
        name: 'TypeScript',
        color: 'blue-text-gradient',
      },
      {
        name: 'Socket.io',
        color: 'green-text-gradient',
      },
      {
        name: 'TailwindCSS',
        color: 'pink-text-gradient',
      },
    ],
    image: chatRoom,
    source_code_link: 'https://github.com/elftvxq/socket-chatroom',
  },
  {
    name: 'Crypto Price Tracker',
    description:
      'A mobile app implemented by Expo and React Native that users are able to view the current price, market cap rank, percentage change in 24h on chart and total volume. Fetch currency data by axios from CoinGecko API and display currency change on line graph ',
    tags: [
      {
        name: 'react-native',
        color: 'blue-text-gradient',
      },
      {
        name: 'Context API',
        color: 'green-text-gradient',
      },
      {
        name: 'CoinGeko API',
        color: 'pink-text-gradient',
      },
    ],
    image: cryptoTracker,
    source_code_link:
      'https://github.com/elftvxq/react-native-crypto-price-tracker',
  },
];

export { services, technologies, experiences, educations, projects };
