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
