import Mock from '../mock'

const encodedEmail = 'nyrk@rawvar.arg'
const linkedInUrl = 'https://www.linkedin.com/in/adicandia/'

const database = {
  information: {
    firstName: 'Alessandro',
    lastName: 'Di Candia',
    aboutContent:
      'Customer-centric technology leader catalyzing growth in organizations and individuals. Experienced manager of remote and distributed teams. Hands-on software architect.',
    age: 46,
    phone: '',
    nationality: '',
    language: '',
    email: encodedEmail,
    calendar:
      'https://calendly.com/dicandia?background_color=000000&text_color=FFFFFF&primary_color=efad39',
    address: 'Erwinna, PA 18920',
    freelanceStatus: 'Available',
    socialLinks: {
      angellist: 'https://angel.co/adicandia',
      facebook: '',
      twitter: '',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/adicandia',
      dribbble: '',
      github: 'https://github.com/enjine'
    },
    brandImage: '/images/brand-image.png',
    aboutImage: '/images/comin-atcha.gif',
    aboutImageLg: '/images/about-image-lg.png',
    cvfile: '/files/ADiCandia_Sr_Principal_Eng_2023.pdf',
    techSheet: '/files/ADiCandia_Technical_Appendix.pdf'
  },
  services: [
    {
      title: 'Team Culture',
      type: 'executive',
      icon: 'grow',
      details:
        'Building high-performing distributed engineering teams is one of my strengths. Every team needs to cultivate its own identity; I provide a healthy space for it to grow. I build accountable teams founded on trust and empathy.'
    },
    {
      title: 'User Experience',
      type: 'product',
      icon: 'users',
      details:
        'Users are first-class citizens in the technology ecosystem. Human or machine, they are on the receiving end of everything our teams do. I have significant regard their position when making decisions.'
    },
    {
      title: 'Domain Language',
      type: 'technical',
      icon: 'write',
      details:
        'Teams deliver effective solutions when they share a clear understanding of both the problem and the solution spaces. Domain-Driven Design (DDD) is one methodology that strives to avoid many of the struggles cross-functional teams face when defining technical requirements and acceptance criteria.'
    },
    {
      title: 'Event Driven Design',
      type: 'technical',
      icon: 'bolt-alt',
      details:
        "In my experience building UI's and complex systems, event-driven design has proven to be a very effective, semantic way to loosely-couple components. I have extensive experience using Flux, Event Sourcing, and CQRS patterns to construct complex applications and distributed systems."
    },
    {
      title: 'Enterprise Data Modeling',
      type: 'technical',
      icon: 'database',
      details:
        "Models are how humans understand the world around them. For a business' technology to flourish its data must be well modeled and carry ubiquitous meaning for all who interact with it. It also must be flexible enough to meet the changing needs of a growing business."
    },
    {
      title: 'INFOSEC',
      type: 'technical',
      icon: 'shield',
      details:
        'Modern systems require modern security practices. I understand what is required to keep networks secure, applications free from vulnerabilities, data protected at rest, over the wire, and when shared with trusted 3rd parties.'
    },
    {
      title: 'Regulatory Compliance',
      type: 'technical',
      icon: 'stamp',
      details:
        'First-hand experience working directly with Legal and Compliance teams in the FinTech space to understand and implement the mandated requirements for both customer- and system-facing interactions.'
    },
    {
      title: 'Java/JVM',
      type: 'technical',
      icon: 'java',
      details:
        'Experience with compiled languages on the JVM including Java, and Kotlin with Maven and Gradle as build tools.'
    },
    {
      title: 'JavaScript',
      type: 'technical',
      icon: 'code',
      details:
        'Specialization in creating web and native applications that are highly performant. Deep understanding of both server- and client-side environments. Experience creating and publishing private NPM packages.'
    },
    {
      title: 'Docker/Kubernetes',
      type: 'technical',
      icon: 'ship',
      details:
        'Experience working with large clusters of containerized microservices using managed Kubernetes (EKS) on AWS.'
    },
    {
      title: 'CI/CD',
      type: 'technical',
      icon: 'rocket',
      details:
        'Delivery becomes a competitive advantage when your teams can ship high-quality work quickly. I understand what is needed to assemble a pipeline that builds, tests, and deploys projects into a cluster, but also fails-fast if quality standards are not met.'
    }
  ],
  reviews: [
    {
      id: 1,
      content: '',
      author: {
        name: '',
        designation: ''
      }
    }
  ],
  skills: [
    {
      title: 'Executive Leadership',
      years: 3
    },
    {
      title: 'Strategic & Operational Leadership',
      years: 10
    },
    {
      title: 'Technology Leadership',
      years: 15
    },
    {
      title: 'People Management',
      years: 5
    },
    {
      title: 'Talent Acquisition & Development',
      years: 7
    },
    {
      title: 'Cross-Functional Communications',
      years: 20
    },
    {
      title: 'Business Analysis',
      years: 15
    },
    {
      title: 'Team Culture & Goal Setting',
      years: 18
    },
    {
      title: 'Product Development',
      years: 10
    },
    {
      title: 'Solution Design & Technical Ownership',
      years: 20
    },
    {
      title: 'UI / Front-end Engineering',
      years: 10
    }
  ],
  portfolios: [
    {
      id: 1,
      title: 'Atlas by Hunt Club',
      subtitle:
        'Network-first approach to managing your professional relationships. Know who you know, faster.',
      imageUrl: '/images/portfolio-atlas-image-1.png',
      largeImageUrl: ['/images/portfolio-atlas-image-1-lg.png'],
      url: 'https://exploreatlas.io'
    },
    {
      id: 12,
      title: 'gopuff.com',
      subtitle:
        'Vertically integrated e-commerce platform. The place for Grocery, Alcohol, Home, and more for 18-35 year olds.',
      imageUrl: undefined,
      largeImageUrl: undefined,
      url: 'https://gopuff.com'
    },
    {
      id: 13,
      title: 'gainbridge.life',
      subtitle:
        'Fully digital retail annuity e-commerce platform. Purchase fixed annuities direct from the issuer, without an agent, on any device.',
      imageUrl: '/images/portfolio-image-1.png',
      largeImageUrl: [
        '/images/portfolio-image-1-lg.png',
        '/images/portfolio-image-1a-lg.png',
        '/images/portfolio-image-1b-lg.png',
        '/images/portfolio-image-1c-lg.png',
        '/images/portfolio-image-1d-lg.png'
      ],
      url: 'https://gainbridge.life'
    },
    {
      id: 2,
      title: 'tv.verizon.com',
      subtitle:
        'Multi-tenant TV Everywhere product enabling cable subscribers to watch live TV, movies, and OTT content on any device from anywhere.',
      imageUrl: '/images/portfolio-image-2.png',
      largeImageUrl: ['/images/portfolio-image-2-lg.png'],
      url: 'https://tv.verizon.com'
    },
    {
      id: 3,
      title: 'Ultrastar/LiveNation',
      subtitle:
        "Official fanclub and advance ticketing platform for touring artists. Ultrastar Entertainment was founded in 1998 by David Bowie to create artist-powered, fan-driven internet communities. In 2007, David's pioneering community platform was purchased by Live Nation. To this day, David's vision of artist-powered, fan-driven experiences is <a href='https://en.wikipedia.org/wiki/LiveAndWell.com' target='_blank' rel='noopener noreferrer'>Live and Well</a> in their hands.",
      imageUrl: '/images/portfolio-image-3.png',
      largeImageUrl: [
        '/images/portfolio-image-3-lg.png',
        '/images/portfolio-image-3a-lg.png',
        '/images/portfolio-image-3b-lg.png',
        '/images/portfolio-image-3c-lg.png'
      ],
      url: 'https://www.livenationentertainment.com/'
    },
    {
      id: 4,
      title: 'Livetapp',
      subtitle:
        'Livetapp is a fan engagement platform for live music offering deals and promotions in exchange for "checking-in" as well as custom festival guides and artist and event suggestions. This project represents one of several startups I helped bring to market consulting as technical co-founder.',
      imageUrl: '/images/portfolio-image-4.png',
      largeImageUrl: [
        '/images/portfolio-image-4-lg.png',
        '/images/portfolio-image-4a-lg.png'
      ],
      url: 'http://www.livetapp.com/'
    }
  ],
  experience: {
    totalYears: 20,
    workingExperience: [
      {
        id: 5,
        year: 'June 2023 - June 2024',
        position: 'Principal Engineer',
        company: 'Atlas by Hunt Club',
        location: 'Remote',
        achievements: [],
        details:
          'Designed and implemented batch and streaming pipelines using Python Beam, transitioning the MVP design to an event-driven model. Delivered customer-facing features in NextJs/GraphQL/Relay, enhancing the user experience.'
      },
      {
        id: 5,
        year: 'Sept 2020 - June 2023',
        position: 'Principal Engineer',
        company: 'Gopuff',
        location: 'Remote',
        achievements: [],
        details:
          'Bar-raiser for interviews during a period of hyper-growth scaling the engineering team from 80 to 300. Successfully launched the MVP AdTech platform, generating $21MM in revenue in under 12 months. Pioneered eventing, domain-driven design, enterprise data architecture, privacy, and real-time architecture. Led, mentored, and aligned business and tech teams.'
      },
      {
        id: 4,
        year: 'Aug 2017 - Jan 2020',
        position: 'Head of Technology, Digital Platform',
        company: 'Group1001 / Gainbridge Life',
        location: 'Remote',
        achievements: [],
        details:
          'Set the cultural and strategic technical vision for a fintech startup, launching a direct-to-consumer annuity platform. This initiative grew the team from 5 to 20 members and achieved $1MM+/week in sales within 12 months. Fostered a strong sense of belonging and delivered results in a startup environment while serving as VP of Tech, Engineering Manager, and Technical Product Owner.'
      },
      {
        id: 3,
        year: 'Mar 2014 - Aug 2017',
        position: 'Principal Engineer',
        company: 'Synacor',
        location: 'Remote',
        achievements: [],
        details:
          'Served as a full-stack front-end engineer on a SOA backend and coordinated CI/CD adoption across engineering teams. Provided technical expertise, rapid prototyping, and domain knowledge as an FTE Tech Lead. Developed shared services and libraries, enabling teams to scale confidently with quality.'
      },
      {
        id: 2,
        year: 'Feb 2009 - Mar 2014',
        position: 'Owner',
        company: 'Bitwise',
        location: 'Remote',
        achievements: [],
        details:
          'Founded and operated Bitwise, performing CTO/Technical co-founder duties for startups, architecting and coding applications, and managing offshore teams. Provided engineering capacity to agencies and delivered transformative contributions that fostered lasting client relationships.'
      },
      {
        id: 1,
        year: 'May 2000 - Feb 2009',
        position: 'Director, Product Engineering',
        company: 'Ultrastar / LiveNation',
        location: 'NYC / Brooklyn',
        achievements: [],
        details:
          'Launched and maintained web properties for renowned artists such as David Bowie, The Rolling Stones, and Madonna. Grew the team to 5+ designers and developers, ensuring the delivery of client work and pitching new features. Developed internal processes, workflows, and libraries, reducing time to market from months to weeks. Executed exclusive members-only experiences, live chats, and webcasts.'
      }
    ],
    volunteerExperience: [
      {
        id: 4,
        year: '2020 - 2023',
        position: 'Board Member',
        company: 'River Valley Waldorf School',
        details:
          'Member of the Board of Trustees responsible for guidance and governance of a faculty-centric school committed to modern Waldorf pedagogy.'
      },
      {
        id: 3,
        year: '2021 - 2024',
        position: 'Advancement Committee Chair',
        company: 'River Valley Waldorf School',
        details:
          'Head of the Advancement Committee responsible for outreach, fundraising, and fostering the growth of the school. This committee is responsible for bringing in a large portion of the funds required to keep the school financially healthy, as well as fostering a sense of belonging among the community.'
      },
      {
        id: 2,
        year: '2019 - 2024',
        position: 'Auction Committee Chair',
        company: 'River Valley Waldorf School',
        details:
          'Organized, planned and executed the Auction Gala, the largest annual fundraising project. Worked with the co-chair to recruit volunteers, procure items, sponsorships, and donations raising approximately $40K. Produced a digital playbook documenting the process for future committees; a first in the history of the school.'
      },
      {
        id: 1,
        year: '2015 - 2018',
        position: 'IT Committee Chair',
        company: 'River Valley Waldorf School',
        details:
          'Revamped internal IT infrastructure including email, domain controller and website. Helped maintain smooth daily IT operations for faculty and staff.'
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: '1996 - 2000',
        graduation: 'BA, Advertising / Communications',
        university: 'Penn State University',
        achievements: [
          'Cum Laude',
          'Peer Mentor',
          'Work/study as Webmaster for College of Communications'
        ],
        details: 'Minors in Business Management and Italian.'
      }
    ]
  },
  blogs: [
    {
      id: 1,
      title: 'Open Letter',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/test.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020'
    }
  ],
  contactInfo: {
    phoneNumbers: [],
    emailAddress: [encodedEmail],
    linkedIn: linkedInUrl,
    address: ''
  }
}

Mock.onGet('/api/information').reply(config => {
  const response = database.information
  return [200, response]
})

Mock.onGet('/api/services').reply(config => {
  const response = database.services
  return [200, response]
})

Mock.onGet('/api/reviews').reply(config => {
  const response = database.reviews
  return [200, response]
})

Mock.onGet('/api/skills').reply(config => {
  const response = database.skills
  return [200, response]
})

Mock.onGet('/api/portfolios').reply(config => {
  const response = database.portfolios
  return [200, response]
})

Mock.onGet('/api/experience').reply(config => {
  const response = database.experience
  return [200, response]
})

Mock.onGet('/api/contactinfo').reply(config => {
  const response = database.contactInfo
  return [200, response]
})

Mock.onGet('/api/blog').reply(config => {
  const response = database.blogs
  return [200, response]
})
