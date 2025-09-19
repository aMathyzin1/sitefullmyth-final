import { AboutContent, HomeContent, LegalContent } from '../types';

export const homeContentEn: HomeContent = {
  navigation: [
    { label: 'Home', href: '/en' },
    { label: 'Projects', href: '/en/#projects' },
    { label: 'About', href: '/en/info/about' },
    { label: 'Videos', href: '/en/#videos' },
    { label: 'Community', href: '/en/#community' },
    { label: 'Downloads', href: '/en/downloads' }
  ],
  hero: {
    eyebrow: 'High performance tweaks',
    title: 'aMathyzin',
    subtitle:
      'Advanced optimizations and free tools that unlock the full potential of your computer for gaming and productivity.',
    primaryCta: { label: 'Browse downloads', href: '/en/downloads' },
    secondaryCta: { label: 'Watch the latest tutorial', href: 'https://www.youtube.com/watch?v=RzapmonmPp4' },
    stats: [
      { value: '4+', label: 'Years improving performance' },
      { value: '70k+', label: 'Downloads served' },
      { value: '3k+', label: 'Members in our community' }
    ]
  },
  featuredProjectsHeading: 'Featured projects',
  featuredProjectsDescription:
    'Tools designed to deliver stable FPS, faster workflows and reliable maintenance routines for Windows.',
  featuredProjects: [
    {
      slug: 'robooster2',
      title: 'RoBooster 2',
      description:
        'Optimizer connected to Bloxstrap that applies safe adjustments to Roblox for stable FPS and latency control.',
      videoEmbed: 'https://drive.google.com/file/d/1biF5hgcND6I1r5Xg6lvW0Pm-TLqqMyNj/preview',
      ctaLabel: 'Open project'
    },
    {
      slug: '3kpack',
      title: 'aMathyzin 3k Pack',
      description:
        'Celebration pack with exclusive scripts, automations and performance profiles created for the first 3,000 subscribers.',
      videoEmbed: 'https://www.youtube.com/embed/Pxcaxgx_j-0',
      ctaLabel: 'Pack details'
    },
    {
      slug: 'batchclick',
      title: 'BatchClick Pack',
      description:
        'Collection of batch automations that clean deeply, tune the registry and configure essential Windows services.',
      videoEmbed: 'https://www.youtube.com/embed/iN5C3KDIGH8',
      ctaLabel: 'Explore automations'
    }
  ],
  about: {
    heading: 'About aMathyzin',
    paragraphs: [
      'aMathyzin is a performance enthusiast with over four years of experience delivering free solutions to get the most out of PCs.',
      'On GitHub we share projects such as the “aMathyzin 3K Pack” and proprietary Windows automation tools.',
      'We created “RoBooster”, an optimizer for Roblox that integrates seamlessly with Bloxstrap.',
      'Our community keeps an active Discord server with support, giveaways and exclusive resources.',
      'On YouTube you will find videos like “OPTIMIZE YOUR PC WITH ONE COMMAND IN 1 MINUTE”, proving quick and safe improvements.'
    ],
    cta: { label: 'Official community', href: '/en/discord' }
  },
  innovations: {
    heading: 'Projects and innovations',
    description:
      'We combine product design, engineering and support to deliver unique performance solutions with open code and active monitoring.',
    cards: [
      {
        title: 'Futuristic interface',
        excerpt: 'Immersive dashboards with micro interactions that react to the user context.',
        details:
          'See how our futuristic interfaces merge modern aesthetics with real time telemetry, offering complete control over adjustments and optimizations.'
      },
      {
        title: 'Smart optimization',
        excerpt: 'Algorithms that monitor PC resources and apply safe tweaks in real time to reach top performance.',
        details:
          'Dynamic adjustments guarantee consistent FPS and thermal stability while preserving security and automatic rollback points.'
      },
      {
        title: 'Exclusive tools',
        excerpt: 'Proprietary apps, auditable scripts and modular panels for effortless maintenance.',
        details:
          'Every tool is continuously audited, fully documented and available in portable or installable flavours.'
      }
    ],
    githubCta: { label: 'Visit GitHub', href: 'https://github.com/amathyzin' }
  },
  videos: {
    heading: 'Recent videos',
    items: [
      {
        title: 'Roblox Optimization - RoBooster',
        description: 'Complete integration with Bloxstrap to guarantee a smooth Roblox experience.',
        embedUrl: 'https://www.youtube.com/embed/ylDMxtM9zTs',
        watchUrl: 'https://www.youtube.com/watch?v=ylDMxtM9zTs'
      },
      {
        title: 'aMathyBoost',
        description: 'Advanced PC optimizer developed by Memphis for different hardware profiles.',
        embedUrl: 'https://www.youtube.com/embed/RzapmonmPp4',
        watchUrl: 'https://www.youtube.com/watch?v=RzapmonmPp4'
      },
      {
        title: 'Terminal Optimizer 1.0',
        description: 'Command line tool created by Seven for instant adjustments.',
        embedUrl: 'https://www.youtube.com/embed/ciHfcpppItg',
        watchUrl: 'https://www.youtube.com/watch?v=ciHfcpppItg'
      },
      {
        title: 'BatchClick Pack',
        description: 'Unique pack with batch based automations for modest PCs.',
        embedUrl: 'https://www.youtube.com/embed/iN5C3KDIGH8',
        watchUrl: 'https://www.youtube.com/watch?v=iN5C3KDIGH8'
      },
      {
        title: 'Terminal Optimizer 1.0',
        description: 'Complete guide showing how to use Terminal Optimizer safely.',
        embedUrl: 'https://www.youtube.com/embed/E26PVIiKWbQ',
        watchUrl: 'https://www.youtube.com/watch?v=E26PVIiKWbQ'
      },
      {
        title: 'Valorant error fixes',
        description: 'Step-by-step instructions to solve Valorant issues.',
        embedUrl: 'https://www.youtube.com/embed/7qV-fDkxeVc',
        watchUrl: 'https://www.youtube.com/watch?v=7qV-fDkxeVc'
      },
      {
        title: 'aMathyzin 3k Pack',
        description: 'The most complete pack on the channel, celebrating 3,000 subscribers.',
        embedUrl: 'https://www.youtube.com/embed/Pxcaxgx_j-0',
        watchUrl: 'https://www.youtube.com/watch?v=Pxcaxgx_j-0'
      },
      {
        title: 'How optimizations work',
        description: 'Detailed explanation about how each optimization behaves.',
        embedUrl: 'https://www.youtube.com/embed/ceBDhpBqe08',
        watchUrl: 'https://www.youtube.com/watch?v=ceBDhpBqe08'
      },
      {
        title: 'Optimize your PC in 1 minute',
        description: 'One safe command to boost Windows immediately.',
        embedUrl: 'https://www.youtube.com/embed/YG5O3CB3nWk',
        watchUrl: 'https://www.youtube.com/watch?v=YG5O3CB3nWk'
      }
    ]
  },
  channel: {
    title: 'Follow the channel on YouTube',
    description:
      'Tutorials, exclusive releases and performance comparisons updated every week.',
    subscribeCta: { label: 'Subscribe now', href: '/en/youtube' },
    image: '/images/screens/canal.PNG',
    social: [
      { label: 'YouTube', href: 'https://www.youtube.com/@aMathyzin' },
      { label: 'Instagram', href: 'https://www.instagram.com/amathyzin' },
      { label: 'Twitter', href: 'https://twitter.com/amathyzin' }
    ]
  },
  community: {
    title: 'Join our community',
    description:
      'Get tailored support, giveaways and live monitoring sessions on the official Discord server.',
    cta: { label: 'Join Discord', href: 'https://amathyzin.com/discord' },
    widgetUrl: 'https://discord.com/widget?id=1210446694953779260&theme=dark'
  }
};

export const aboutContentEn: AboutContent = {
  hero: {
    title: 'About aMathyzin',
    subtitle: 'Learn about our story, mission and passion for optimizations that deliver measurable performance.'
  },
  story: [
    'Hi! I am aMathyzin — a PC optimization enthusiast with over four years of experience. My curiosity for technology led me to master JavaScript, Python, C++ and C#, in addition to web design, video editing, graphic design and app and game development.',
    'aMathyzin evolved into a collaborative project: we unite specialists to create the best optimization apps with a focus on satisfaction, top performance and safety — most of the projects have zero detections and open-source code on the official GitHub.',
    'Our ecosystem combines smart automations, futuristic dashboards and educational guides published weekly on YouTube. Every release is tested with the community and ships with clear documentation so anyone can apply the improvements with confidence.',
    'We keep expanding with Roblox integrations, celebration packs for Windows, mobile optimizations and tools commissioned inside the official Discord server.'
  ],
  mission: 'Deliver the maximum potential of each computer with innovative, safe and free solutions.',
  teamIntro: 'Our current team',
  team: [
    { name: 'aMathyzin', role: 'Founder & developer', avatar: '/images/team/amathyzin.jpg', email: 'contato@amathyzin.com' },
    { name: 'Musashi', role: 'Partner, director and instructor', avatar: '/images/team/musashi.png', email: 'musashi@amathyzin.com' },
    { name: 'Memphis', role: 'Developer and project architect', avatar: '/images/team/memphis.jpg', email: 'memphisdev@amathyzin.com' },
    { name: 'Vicente', role: 'Developer', avatar: '/images/team/vicente.jpg', email: 'zfoxtech974@proton.me' },
    { name: 'Unknow', role: 'Investor', avatar: '/images/team/unknow.jpg', disabled: true }
  ],
  community: {
    description:
      'Join our Discord server to receive support, follow releases, take part in giveaways and contribute with feedback.',
    cta: { label: 'Join Discord', href: 'https://amathyzin.com/discord' }
  }
};

export const legalEn: LegalContent = {
  terms: {
    updatedAt: '09/30/2024',
    version: '1.2.0',
    sections: [
      {
        title: 'Acceptance of terms',
        body:
          'By accessing and using the aMathyzin website you fully agree with these Terms of Service and their future updates. If you disagree with any part, please stop using the site.'
      },
      {
        title: 'Changes',
        body:
          'We may update or modify these Terms at any time without prior notice. Continued use of the site after changes means that you accept the revised conditions.'
      },
      {
        title: 'Permitted use',
        body:
          'You must use the website ethically and legally. Any fraudulent, malicious or harmful purpose is forbidden.'
      },
      {
        title: 'Intellectual property',
        body:
          'All texts, images, logos and graphics available on aMathyzin are protected by intellectual property laws. Any unauthorized use is strictly prohibited.'
      },
      {
        title: 'Disclaimer',
        body:
          'The site is provided “as is”, without express or implied warranties. aMathyzin is not liable for direct, indirect or consequential damages arising from the use or inability to use the site.'
      },
      {
        title: 'External links',
        body:
          'We may reference third-party websites. We are not responsible for their content and any access is the sole responsibility of the user.'
      },
      {
        title: 'Privacy',
        body:
          'Read our Privacy Policy to understand how we collect, store and protect your personal information.'
      },
      {
        title: 'Information security',
        body:
          'We adopt technical and administrative safeguards to protect stored data, but absolute inviolability of information transmitted over the internet cannot be guaranteed.'
      },
      {
        title: 'Applicable law',
        body:
          'Any disputes arising from the use of the site will be governed by Brazilian law. Mediation is recommended as the first step, followed by the user’s local court if necessary.'
      },
      {
        title: 'Contact',
        body:
          'If you have any questions about these Terms, send an email to contato@amathyzin.com.'
      }
    ]
  },
  privacy: {
    updatedAt: 'February 4, 2025',
    sections: [
      {
        title: 'Introduction',
        body:
          'This policy describes how we collect, use, store and protect your personal information when you use our website and services.'
      },
      {
        title: 'Information collection',
        list: [
          'User provided data such as name and email for support or contact.',
          'Browsing data including IP address, pages visited and time spent on the site.',
          'Cookies and similar technologies to remember preferences and analyse usage.'
        ]
      },
      {
        title: 'Use of information',
        list: [
          'Provide, maintain and improve our services.',
          'Personalize the user experience and send important communications.',
          'Respond to support requests and analyse site performance.'
        ]
      },
      {
        title: 'Cookies',
        body:
          'We use cookies to remember preferences, gather analytics and personalize content. You may disable cookies in your browser, although some features may not function properly.'
      },
      {
        title: 'Information sharing',
        body:
          'We do not sell or share your personal information with third parties without consent, except to comply with legal obligations or protect our rights.'
      },
      {
        title: 'Security',
        body:
          'We apply security measures to prevent unauthorized access, alteration or disclosure of your information.'
      },
      {
        title: 'Your rights',
        list: [
          'Access and correct your personal information.',
          'Request deletion of your data.',
          'Object to processing and request data portability.'
        ],
        body:
          'To exercise your rights, contact us at contato@amathyzin.com.'
      },
      {
        title: 'Changes to this policy',
        body:
          'We may update this policy periodically. We recommend checking this page regularly to stay informed about any changes.'
      }
    ]
  }
};

export { downloadProjectsEn } from '../projects-en';
