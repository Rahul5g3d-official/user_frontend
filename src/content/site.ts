import { ROUTES } from "../constants/routes";

export const siteContent = {
  brand: { name: "G4U", tagline: "Growth for you" },
  accessibility: { skipToContent: "Skip to main content" },
  common: { loading: "Loading" },
  navigation: {
    ariaLabel: "Primary navigation",
    main: [
      { label: "About", to: ROUTES.ABOUT },
      { label: "Services", to: ROUTES.SERVICES },
      { label: "Courses", to: ROUTES.COURSES },
      { label: "Our approach", to: ROUTES.APPROACH },
      { label: "Impact", to: ROUTES.IMPACT },
    ],
    action: "Login",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  home: {
    hero: {
      eyebrow: "Growth for you",
      title: "A clearer path",
      accent: " forward.",
      description:
        "“Grow beyond the classroom. Build skills, better habits, and a future you believe in.”",
      primary: { label: "Explore our services", to: ROUTES.SERVICES },
      secondary: { label: "Discover G4U", to: ROUTES.ABOUT },
      noteOne: "Opportunity starts\nwith one step.",
      noteTwo: "Built for\nreal life.",
      ringText: "GROWTH · ACCESS · POSSIBILITY · ",
    },
principles: [
  "Growth for you",
  "Progress with purpose",
  "Better, together",
],
services: {
  eyebrow: "Your journey, your growth",
  title: "Everything starts with a step forward.",
  description:
    "Discover your potential, develop real-world skills, and explore opportunities to build the future you want.",

  items: [
    {
      label: "Discover",
      title: "Find your strengths and your direction.",
    },
    {
      label: "Develop",
      title: "Build skills, habits, and confidence that last.",
    },
    {
      label: "Connect",
      title: "Discover people and opportunities that help you grow.",
    },
  ],
},
    approach: {
      eyebrow: "Progress, without the pressure",
      title: "Make room for your own version of success.",
      description:
        "We keep growth grounded in people: clear information, encouraging support and opportunities designed to move with your life.",
      points: [
        "Start from where you are today",
        "Choose steps that feel practical",
        "Keep moving with people beside you",
      ],
      action: "See our approach",
      artText: "ONE STEP · THEN ANOTHER · ",
    },
    quote: {
      eyebrow: "A sample community reflection",
      text: "G4U gave me a way to turn a big, uncertain goal into a next step I could actually take.",
      initials: "AS",
      name: "Sample participant",
      role: "Placeholder story — details to be confirmed",
    },
  },
  about: {
    hero: {
      eyebrow: "About G4U",
      title: "Growth deserves an open door.",
      description:
        "We are building a more accessible future for people ready to learn, contribute and move forward.",
    },
    story: {
      eyebrow: "Our story",
      title:
        "Built around a simple belief: opportunity should feel within reach.",
      paragraphs: [
        "G4U—Growth for You—is a platform with a people-first point of view. We believe progress becomes more possible when information, support and connection are easier to find.",
        "Our story, team details and milestones will be shared here as they are verified. Until then, this space explains the intention behind G4U: creating practical conditions for more people to grow.",
      ],
    },
    vision: {
      eyebrow: "Our vision",
      title: "A world where you can see a way forward.",
      description:
        "A future-facing aspiration, to be refined with G4U’s leadership team.",
    },
    mission: {
      eyebrow: "Our mission",
      title: "Turn possibility into practical momentum.",
      description:
        "We bring together learning, guidance and connection in ways that respect each person’s context.",
    },
    values: {
      eyebrow: "How we show up",
      title: "The values that guide our work.",
      items: [
        {
          title: "Accessible",
          description:
            "We design for clarity, inclusion and real-world constraints.",
        },
        {
          title: "Human",
          description:
            "We start with lived experience and listen before we build.",
        },
        {
          title: "Practical",
          description: "We focus on progress people can put into motion.",
        },
        {
          title: "Hopeful",
          description:
            "We make room for ambition without losing sight of today.",
        },
      ],
    },
    team: {
      eyebrow: "Our people",
      title: "A team profile belongs here.",
      description:
        "Team introductions and biographies are intentionally held as placeholders until approved information is available.",
    },
  },
  services: {
    hero: {
      eyebrow: "Our services",
      title: "Useful support for meaningful moves.",
      description:
        "Our service areas are designed to help people develop capability, find direction and connect to opportunity.",
    },
    items: [
      {
        kicker: "01 · Explore",
        title: "Clarity and guidance",
        description:
          "Tools, prompts and support that help make a next step easier to see.",
        benefits: [
          "Goal-setting resources",
          "Practical decision support",
          "Clear, accessible information",
        ],
      },
      {
        kicker: "02 · Build",
        title: "Skills and confidence",
        description:
          "Learning experiences shaped around practical progress and individual context.",
        benefits: [
          "Foundational learning",
          "Action-oriented practice",
          "Flexible ways to participate",
        ],
      },
      {
        kicker: "03 · Connect",
        title: "Community and opportunity",
        description:
          "Connections that help turn personal momentum into wider possibility.",
        benefits: [
          "Peer connection",
          "Opportunity pathways",
          "Supportive communities",
        ],
      },
    ],
  },
  courses: {
    eyebrow: "Learn at your pace",
    title: "Courses for your next step.",
    description:
      "Build practical skills, confidence and momentum with learning designed for real life.",
    action: "View all courses",
    items: [
      {
        slug: "finding-your-direction",
        category: "Explore",
        title: "Finding your direction",
        description: "Make sense of your strengths, interests and next possibilities.",
        duration: "4 lessons",
        level: "Beginner",
        overview:
          "A practical starting point for identifying what matters to you and choosing a direction that feels achievable.",
        outcomes: ["Recognise your strengths", "Explore possible paths", "Choose a useful next step"],
      },
      {
        slug: "skills-for-everyday-progress",
        category: "Develop",
        title: "Skills for everyday progress",
        description: "Create habits and skills that support steady, meaningful growth.",
        duration: "6 lessons",
        level: "Beginner",
        overview:
          "Learn approachable ways to build momentum, practise new skills and keep moving when life gets busy.",
        outcomes: ["Set realistic goals", "Build supportive habits", "Track your progress"],
      },
      {
        slug: "connecting-to-opportunity",
        category: "Connect",
        title: "Connecting to opportunity",
        description: "Find people, communities and opportunities that can help you grow.",
        duration: "5 lessons",
        level: "All levels",
        overview:
          "Discover practical ways to grow your network, ask for support and turn new connections into opportunity.",
        outcomes: ["Map your support network", "Communicate with confidence", "Find relevant opportunities"],
      },
    ],
  },
  coursesPage: {
    hero: {
      eyebrow: "Courses",
      title: "Learning that moves with you.",
      description:
        "Explore short, practical courses that help turn your goals into a next step.",
    },
    allCourses: "All courses",
    startCourse: "View course",
  },
  login: {
    hero: {
      eyebrow: "Welcome back",
      title: "Log in to continue growing.",
      description:
        "Sign in to continue your learning journey and keep track of your progress.",
    },
    emailLabel: "Email address",
    passwordLabel: "Password",
    action: "Log in",
    note: "Login is not connected yet. This form is ready to be linked to your approved sign-in process.",
  },
  approachPage: {
    hero: {
      eyebrow: "Our approach",
      title: "One thoughtful step at a time.",
      description:
        "G4U puts people at the centre of a simple, supportive growth process.",
    },
    steps: [
      {
        eyebrow: "Step 01",
        title: "Start with your reality.",
        description:
          "Everyone begins in a different place. We make space for current needs, strengths and ambitions.",
      },
      {
        eyebrow: "Step 02",
        title: "Choose a useful next move.",
        description:
          "Small, relevant actions can create clarity and build confidence over time.",
      },
      {
        eyebrow: "Step 03",
        title: "Keep the door open.",
        description:
          "Growth is not a straight line. We aim to make it easier to return, adjust and continue.",
      },
    ],
    participate: {
      eyebrow: "Take part",
      title: "Growth works better when it is shared.",
      description:
        "There are different ways to be part of G4U as the programme develops.",
      items: [
        {
          title: "Learn",
          description: "Explore practical resources and pathways.",
        },
        {
          title: "Contribute",
          description: "Share ideas, experience and feedback.",
        },
      ],
    },
  },
  impact: {
    hero: {
      eyebrow: "Our impact",
      title: "Measuring what moves people forward.",
      description:
        "We will share transparent, meaningful impact information here as verified data becomes available.",
    },
    note: "Sample data for design demonstration only. It is not a record of G4U outcomes.",
    metrics: [
      { value: "0,000+", label: "Placeholder people reached" },
      { value: "00", label: "Placeholder learning moments" },
      { value: "00%", label: "Placeholder next-step confidence" },
      { value: "00", label: "Placeholder community partners" },
    ],
    stories: {
      eyebrow: "Growth in practice",
      title: "Stories will make the numbers human.",
      description:
        "The following cards are structured placeholders for future, consented success stories.",
      items: [
        {
          tag: "Placeholder story",
          title: "Finding a first foothold",
          description:
            "A future story about turning uncertainty into a practical starting point.",
          action: "Story to come",
        },
        {
          tag: "Placeholder story",
          title: "Building momentum together",
          description:
            "A future story about collective support and confidence.",
          action: "Story to come",
        },
        {
          tag: "Placeholder story",
          title: "Making opportunity visible",
          description: "A future story about a new path becoming possible.",
          action: "Story to come",
        },
      ],
    },
  },
  careers: {
    hero: {
      eyebrow: "Careers",
      title: "Help make growth more possible.",
      description:
        "We are interested in people who combine care, curiosity and practical action.",
    },
    culture: {
      eyebrow: "Our culture",
      title: "Thoughtful work, made together.",
      description:
        "Our culture and opportunities will be developed with our team. This is a place for verified information about how G4U works and grows.",
      words: ["Curious", "Generous", "Grounded", "Purposeful"],
    },
    benefits: {
      eyebrow: "What matters to us",
      title: "An environment built for people.",
      items: [
        {
          title: "Meaningful contribution",
          description: "Make work that helps people find possibility.",
        },
        {
          title: "Shared learning",
          description: "Grow alongside thoughtful, curious colleagues.",
        },
        {
          title: "Flexible thinking",
          description: "Create ways of working that serve people well.",
        },
      ],
    },
    jobs: {
      eyebrow: "Open opportunities",
      title: "There are no listed roles right now.",
      description:
        "Please check back for verified openings, or send a general expression of interest.",
      action: "Express interest",
    },
  },
  contact: {
    hero: {
      eyebrow: "Contact us",
      title: "Start a conversation.",
      description:
        "Whether you have a question, an idea or an opportunity to share, we would be glad to hear from you.",
    },
    details: {
      eyebrow: "Get in touch",
      title: "We are listening.",
      description:
        "Contact information will be published here once it has been verified by G4U.",
      emailLabel: "Email",
      email: "[Contact email to be confirmed]",
      locationLabel: "Location",
      location: "[Location details to be confirmed]",
      socials: ["LinkedIn", "Instagram", "Facebook"],
    },
    form: {
      fields: [
        {
          name: "name",
          label: "Your name",
          placeholder: "Enter your name",
          type: "text",
        },
        {
          name: "email",
          label: "Email address",
          placeholder: "you@example.com",
          type: "email",
        },
        {
          name: "message",
          label: "How can we help?",
          placeholder: "Write your message here",
          type: "textarea",
        },
      ],
      action: "Send message",
      successTitle: "Thanks for getting in touch.",
      successDescription:
        "This demonstration form is ready to connect to G4U’s approved contact process.",
    },
  },
  faq: {
    hero: {
      eyebrow: "Frequently asked questions",
      title: "A few helpful answers.",
      description:
        "These starter questions can be adapted once G4U’s services and participation details are confirmed.",
    },
    items: [
      {
        question: "What is G4U?",
        answer:
          "G4U stands for Growth for You. This website introduces the initiative’s aim to make growth and opportunity easier to access.",
      },
      {
        question: "Who is G4U for?",
        answer:
          "G4U is designed around inclusive access. Specific audience and eligibility information will be published when verified.",
      },
      {
        question: "How can I take part?",
        answer:
          "You can contact the team to register interest or explore opportunities as they become available.",
      },
      {
        question: "Are the impact figures final?",
        answer:
          "No. Any figures marked as sample or placeholder are purely illustrative and will be replaced with verified data.",
      },
      {
        question: "How can I partner with G4U?",
        answer:
          "Use the contact page to share your interest. Partnership processes will be confirmed by the G4U team.",
      },
    ],
  },
  privacy: {
    hero: {
      eyebrow: "Privacy policy",
      title: "Your information, treated with care.",
      description:
        "This starter policy structure requires legal review and approved G4U details before publication.",
    },
    sections: [
      {
        title: "Information we collect",
        description:
          "This section will describe the categories of personal information collected through G4U channels, after the collection practices are confirmed.",
      },
      {
        title: "How information is used",
        description:
          "This section will explain approved purposes for using personal information, including communications and service delivery where applicable.",
      },
      {
        title: "Your choices",
        description:
          "This section will outline available rights, requests and contact points in accordance with applicable law.",
      },
    ],
  },
  terms: {
    hero: {
      eyebrow: "Terms and conditions",
      title: "Clear terms for using G4U.",
      description:
        "This starter structure requires legal review and approved G4U details before publication.",
    },
    sections: [
      {
        title: "Using this website",
        description:
          "This section will set out conditions for using the website and its materials once they have been legally approved.",
      },
      {
        title: "Content and intellectual property",
        description:
          "This section will identify rights and permissions relating to G4U content and brand materials.",
      },
      {
        title: "Contact and updates",
        description:
          "This section will explain how users can reach G4U and how terms changes will be communicated.",
      },
    ],
  },
  sharedCta: {
    eyebrow: "A next step can be small",
    title: "Let’s make growth more accessible.",
    description: "Start a conversation about what is possible.",
    action: "Get in touch",
    to: ROUTES.CONTACT,
  },
  footer: {
    description: "A platform for practical, people-centred growth.",
    links: [
      { label: "Careers", to: ROUTES.CAREERS },
      { label: "FAQ", to: ROUTES.FAQ },
      { label: "Privacy", to: ROUTES.PRIVACY },
      { label: "Terms", to: ROUTES.TERMS },
    ],
    copyright: "© 2026 G4U. All rights reserved.",
    placeholder: "Verified details to be added.",
  },
  notFound: {
    code: "404",
    eyebrow: "A small detour",
    title: "This page is not here yet.",
    description:
      "The page you are looking for may have moved, changed or never existed.",
    action: "Back to home",
  },
} as const;
