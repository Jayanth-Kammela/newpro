import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import LaptopOutlinedIcon from '@mui/icons-material/LaptopOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';

export interface MenuItemX {
  icon: React.ReactElement;
  primary: string;
  secondary: string;
}

export type Sponcard = {
  name: string;
  avatar: string;
  githubUsername: string;
}

export type Bulid = {
  text: string;
  time: string
}

export const menuItems: MenuItemX[] = [
  { icon: <FiberManualRecordOutlinedIcon />, primary: 'Actions', secondary: 'Automate any workflow' },
  { icon: <ViewInArOutlinedIcon />, primary: 'Packages', secondary: 'Host and manage packages' },
  { icon: <VerifiedUserOutlinedIcon />, primary: 'Security', secondary: 'Find and fix vulnerabilities' },
  { icon: <LaptopOutlinedIcon />, primary: 'Codespaces', secondary: 'Instant dev environments' },
  { icon: <SmartToyOutlinedIcon />, primary: 'Copilot', secondary: 'Write better code with AI' },
  { icon: <CodeOutlinedIcon />, primary: 'Code review', secondary: 'Manage code changes' },
  { icon: <RadioButtonCheckedOutlinedIcon />, primary: 'Issues', secondary: 'Plan and track work' },
  { icon: <SmsOutlinedIcon />, primary: 'Discussions', secondary: 'Collaborate outside of code' },
];

export interface ExploreItem {
  label: string;
}

export const exploreItems: ExploreItem[] = [
  { label: 'Explore' },
  { label: 'All features' },
  { label: 'Documentation' },
  { label: 'Github Sklls' },
  { label: 'Blog' },
];

export const NtwistItems: ExploreItem[] = [
  { label: 'Sustainability' },
  { label: 'Mineral Processing' },
  { label: 'Mine-to-mill-to-mine optimization' },
  { label: 'Github Sklls' },
  { label: 'Oil & Gas' },
];

export const bulidsteps = [
  { text: 'Initialize CodeQL', time: '1m 42s' },
  { text: 'Autobuil', time: '1m 24s' },
  { text: 'Perform CodeQL Analyses', time: '1m 36s' }
]


export interface MenuItem {
  title: string;
  items: string[];
}

export const menuSections: MenuItem[] = [
  {
    title: 'For',
    items: ['Enterprise', 'Teams', 'Starts', 'Education'],
  },
  {
    title: 'By Solution',
    items: ['CI/CD & Automation', 'DevOps', 'DevSecOps'],
  },
  {
    title: 'Resources',
    items: ['Learning Pathways', 'White papers, Ebooks, Webinars', 'Customer Stories', 'Partners'],
  },
];

export const menuSections1: MenuItem[] = [
  {
    title: 'GitHub Sponsors',
    items: ['Fund open source developers'],
  },
  {
    title: 'The ReadME Project',
    items: ['GitHub community articles'],
  },
  {
    title: 'Repositories',
    items: ['Topics', 'Trending', 'Collections'],
  },
];

export const accordionStyle = {
  border: 'none',
  boxShadow: 'none',
  borderRadius: '0',
  padding: 0,
  outline: 0
};

export const sponsors = [
  {
    name: "kazuya kawaguchi",
    avatar: "https://github.githubassets.com/assets/kazupon-d7aeb7b8df20.jpeg",
    githubUsername: "kazupon"
  },
  {
    name: "curl",
    avatar: "https://github.githubassets.com/assets/curl-24ff778d1afc.jpeg",
    githubUsername: "curl"
  },
  {
    name: "Samuel",
    avatar: "https://github.githubassets.com/assets/imolorhe-9d771b1d4332.jpeg",
    githubUsername: "imolorhe"
  },
  {
    name: "sindresorhus",
    avatar: "https://github.githubassets.com/assets/sindresorhus-d3224f241a4d.jpeg",
    githubUsername: "sindresorhus"
  },
  {
    name: "Evan You",
    avatar: "https://github.githubassets.com/assets/yyx990803-e11c7b140b17.jpeg",
    githubUsername: "yyx990803"
  },
  {
    name: "Nikema",
    avatar: "https://github.githubassets.com/assets/prophen-da9b089d8a25.jpeg",
    githubUsername: "prophen"
  },
  {
    name: "Directus",
    avatar: "https://github.githubassets.com/assets/directus-4da9e46da0ac.png",
    githubUsername: "directus"
  },
  {
    name: "ESLint",
    avatar: "https://github.githubassets.com/assets/eslint-33bd6140c37f.png",
    githubUsername: "eslint"
  },
  {
    name: "CommandPost",
    avatar: "https://github.githubassets.com/assets/commandpost-18d45fffda67.png",
    githubUsername: "commandpost"
  }
];

export const footerData = {
  Product: [
    'Product',
    'Features',
    'Enterprise',
    'Copilot',
    'Security',
    'Pricing',
    'Team',
    'Resources',
    'Roadmap',
    'Compare GitHub'
  ],
  Platform: [
    'Platform',
    'Developer API',
    'Partners',
    'Electron',
    'GitHub Desktop'
  ],
  Support: [
    'Support',
    'Docs',
    'Community Forum',
    'Professional Services',
    'Premium Support',
    'Skills',
    'Status',
    'Contact GitHub'
  ],
  Company: [
    'Company',
    'About',
    'Customer stories',
    'Blog',
    'The ReadME Project',
    'Careers',
    'Press',
    'Inclusion',
    'Social Impact',
    'Shop'
  ]
};


export interface GitHubActionsInfo {
  mainhead: string;
  subhead: string;
  actiontxt: string;
  imageurl: string;
}

export interface GitHubActionProps {
  data: GitHubActionsInfo;
}

export const githubActionsData: GitHubActionsInfo = {
  mainhead: "GitHub Actions",
  subhead: "Automates your build, test, and deployment workflow with simple and secure CI/CD.",
  actiontxt: "Discover GitHub Actions",
  imageurl: "https://github.githubassets.com/assets/illu-actions-2-c5178134f381.png?width=653&format=webp"
};

export const githubActionsData1: GitHubActionsInfo = {
  mainhead: "GitHub Advanced Security",
  subhead: "enables you to find and fix vulnerabilities with ease and ship secure code quickly.",
  actiontxt: "Dive into GitHub Advanced Security",
  imageurl: "https://github.githubassets.com/assets/illu-code-scanning-fc9dfb212aa3.png?width=772&format=webpll"
};

export const githubVcardData: GitHubActionsInfo = {
  mainhead: "GitHub Codespaces",
  subhead: "offers a complete dev environment in seconds. Code, build, test, and open pull requests from any repo.",
  actiontxt: "Check out GitHub Codespaces",
  imageurl: "https://github.githubassets.com/assets/illu-codespaces-1d2d17e8b2b7.png?width=1209&format=webpll"
};

export const githubVcardData1: GitHubActionsInfo = {
  mainhead: "GitHub Mobile",
  subhead: "fits your projects in your pocket, so you never miss a beat while on the go.",
  actiontxt: "Download GitHub Mobile",
  imageurl: "https://github.githubassets.com/assets/illu-mobile-4d51d19f769e.png?width=1208&format=webpll"
};

export const githubVcardData2: GitHubActionsInfo = {
  mainhead: "Dependabot",
  subhead: "makes it easy to find and fix vulnerable dependencies in your supply chain.",
  actiontxt: "Explore Dependabot",
  imageurl: "https://github.githubassets.com/assets/illu-dependabot-d98c73cc6724.png?width=724&format=webpll"
};

export const githubVcardData3: GitHubActionsInfo = {
  mainhead: "Secret scanning",
  subhead: "automatically looks for partner patterns and prevents fraudulent use of accidentally committed secrets.",
  actiontxt: "Read about secret scanning",
  imageurl: "https://github.githubassets.com/assets/illu-secret-scanning-2-88fb429376d6.png?width=724&format=webpll"
};

export const githubVcardData4: GitHubActionsInfo = {
  mainhead: "GitHub Discussions ",
  subhead: "creates space to ask questions and have open-ended conversations.",
  actiontxt: "Jump into GitHub Discussions",
  imageurl: "https://github.githubassets.com/assets/illu-discussions-2-b915a6dd867e.png?width=724&format=webpll"
};

export const githubVcardData5: GitHubActionsInfo = {
  mainhead: "Pull requests Check out pull requests",
  subhead: "allow real-time communication and collaboration about code changes.",
  actiontxt: "Check out pull requests",
  imageurl: "https://github.githubassets.com/assets/illu-pull-requests-2-280cc958fc05.png?width=724&format=webpll"
};

export interface ntwistCard {
  mainhead: string;
  subhead: string;
  imageurl: string;
}

export interface ntwistCardProps {
  data: ntwistCard;
}

export interface ntwistCardLeft {
  mainhead: string;
  subhead: string;
  subhead1: string
  imageurl: string;
}

export interface ntwistCardPropsLeft {
  data: ntwistCardLeft;
}


export const ntwistRighrCard: ntwistCard = {
  mainhead: "Mine-To-Mill-To-Mine Optimization",
  subhead: "NTWIST’s newest product unlocks up to $250/oz in previously inaccessible value in open pit gold mines by connecting siloed data sources like block models, fleet management systems, stockpile surveys, and plant instruments. This allows your company to better track material flow, and feed properties, identify plan/production discrepancies, and correct resource models and production plans.",
  imageurl: "https://ntwist.com/wp-content/uploads/2023/01/iStock-1339284457-2048x1365.jpg"
};

export const ntwistRighrCard1: ntwistCard = {
  mainhead: "Mineral Processing",
  subhead: "NTWIST offers a number of solutions for mills, concentrators, and leach plants. Our solutions help operations to reduce the effect of feed variability, avoid downtime and increase peak throughput while decreasing energy and reagent consumption.",
  imageurl: "https://ntwist.com/wp-content/uploads/2021/12/iStock-1322302283.jpg"
};

export const ntwistCardleftImage: ntwistCardLeft = {
  mainhead: "Sustainability",
  subhead: "Environmental stewardship is a priority for NTWIST. We help our customers to minimize their sustainability  impact on the planet. Emissions or environmental targets are used alongside productivity targets to define success for our customers.",
  subhead1: "With the increasing relevance of carbon accounting and emissions tracking, NTWIST offers a suite of tools to increase visibility into environmental performance and help processing plants track, manage, optimize, and report key metrics.",
  imageurl: "https://ntwist.com/wp-content/uploads/2021/12/iStock-1284372575.jpg"
};

export const ntwistCardleftImage1: ntwistCardLeft = {
  mainhead: "Oil & Gas",
  subhead: "Oil and Gas plants require a high level of control and robustness in their operation due to the high risks to people and environment.",
  subhead1: "NTWIST helps Oil & Gas customers to analyze historical data, identify opportunities for process control improvements, and reduce variability in any part of the process, thus providing enhanced reliability and safety.",
  imageurl: "https://ntwist.com/wp-content/uploads/2022/03/2021-02-oil-and-gas-digital-hero-e1648984580884.png"
};

export type DrawerProps = {
  toggleDrawer: () => void
  drawerOpen: boolean
}


export const CustomHover = {
  navLink: {
    fontWeight: '700',
    fontSize: '24px',
    cursor: 'pointer',
    position: "relative",
    '&:before': {
      content: "''",
      marginBottom: '-3.5px',
      position: 'absolute',
      width: '0',
      height: '1.8px',
      bottom: '2px',
      left: '0',
      transform: 'translate(0%, -50%)',
      visibility: 'hidden',
      transition: 'all 0.3s ease-in-out',
      border: '1.5px solid #FFFF',
      borderRadius: '8px'
    },
    '&:hover:before': {
      visibility: 'visible',
      width: '100%',
    }
  }
}

export const CustomHover1 = {
  navLink: {
    margin: '10px',
    cursor: 'pointer',
    position: "relative",
    '&:before': {
      content: "''",
      marginBottom: '-3.5px',
      position: 'absolute',
      width: '0',
      height: '1.8px',
      bottom: '2px',
      left: '0',
      transform: 'translate(0%, -50%)',
      visibility: 'hidden',
      transition: 'all 0.3s ease-in-out',
      border: '1.5px solid black',
      borderRadius: '8px'
    },
    '&:hover:before': {
      visibility: 'visible',
      width: '100%',
      borderRadius: '8px',
    }
  }
}

export const ntwistMenu: string[] = ['Sustainbility', 'Mineral Processing', 'Mine-to-Mill-to-Mine Optimization', 'Olil & Gas']
