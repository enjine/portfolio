import Mock from '../mock'

const encodedEmail = 'nyrk@rawvar.arg'
const linkedInUrl = 'https://www.linkedin.com/in/adicandia/'

const database = {
  information: {
    firstName: 'Alessandro',
    lastName: 'Di Candia',
    aboutContent:
      'Customer-centric technology leader catalyzing growth in organizations and individuals. Experienced manager of remote and distributed teams. Hands-on software architect.',
    age: 44,
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
        'Hiring, motivating, and retaining distributed engineering teams is one of my strengths. Every team needs to cultivate its own identity; I provide a healthy space for it to grow. I build strong, accountable, unified teams founded on trust and empathy.'
    },
    {
      title: 'User Experience',
      type: 'product',
      icon: 'users',
      details:
        'Users and customers are first-class citizens in the technology ecosystem. Human or machine, they are on the receiving end of everything our teams do. I respect their position tremendously, and it is a significant factor for me when making business or technology decisions.'
    },
    {
      title: 'Domain Language',
      type: 'technical',
      icon: 'write',
      details:
        'To collaboratively solve problems and create effective solutions, teams must share an understanding of both the problem and the solution. I have successfully introduced Domain-Driven Design (DDD) as one way to avoid many of the struggles that befall cross-functional teams when defining technical requirements and acceptance criteria.'
    },
    {
      title: 'Platform Architecture',
      type: 'technical',
      icon: 'cloud-network',
      details:
        '20 years of experience designing scalable distributed systems for growth. Whether acting as VP, Manager, Tech Lead, or Individual Contributor, my approach is the same; gain a deep understanding of the problem space and strive for simple solutions.'
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
        'Modern systems require modern security practices. I understand what is required to keep networks secure, applications free from vulnerabilities, data protected at rest, over the wire, and even when shared with trusted 3rd parties.'
    },
    {
      title: 'Regulatory Compliance',
      type: 'technical',
      icon: 'stamp',
      details:
        'First-hand experience working directly with Legal and Compliance teams in the FinTech space to understand and implement the mandated requirements for both customer- and system-facing interactions.'
    },
    {
      title: 'Responsive Web Applications',
      type: 'technical',
      icon: 'laptop-phone',
      details:
        'The web is a multi-device experience. I deeply understand this medium and how to make those transitions seamless.'
    },
    {
      title: 'Java/JVM',
      type: 'technical',
      icon: 'java',
      details:
        'Experience with compiled languages on the JVM including Java, Scala, and Kotlin with Maven and Gradle as build tools.'
    },
    {
      title: 'JavaScript',
      type: 'technical',
      icon: 'code',
      details:
        'Specialization in creating web and native applications that are highly performant. Deep understanding of both server- and client-side environments. Experience creating and publishing private NPM packages.'
    },
    {
      title: 'HTML5/CSS3',
      type: 'technical',
      icon: 'bricks',
      details: "Mastery of the browser's building blocks."
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
      title: 'gopuff.com',
      subtitle:
        'Vertically integrated e-commerce platform. The place for Grocery, Alcohol, Home, and more for 18-35 year olds.',
      imageUrl: undefined,
      largeImageUrl: undefined,
      url: 'https://gopuff.com'
    },
    {
      id: 1,
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
        id: 1,
        year: 'Sept 2020 - Present',
        position: 'Principal Engineer',
        company: 'Gopuff',
        location: 'Remote',
        achievements: [],
        details:
          'Joined as the first Principal Engineer on the 80 person engineering team during a period of intense hyper-growth and helped scale it to nearly 300 in under 1 year. Successfully launched the company’s MVP AdTech platform that delivered $21MM in revenue in less than 12 months. Thought leader in the areas of eventing, domain driven design, enterprise data architecture, privacy and realtime architecture. Team lead, mentor, and expert facilitator of business + tech alignment.'
      },
      {
        id: 1,
        year: 'Aug 2017 - Jan 2020',
        position: 'VP Technology, Digital Platform',
        company: 'Group1001 / Gainbridge Life',
        location: 'Remote',
        achievements: [],
        details:
          'As a member of the senior leadership team, my colleagues and I collaborated to set the cultural and strategic vision for our fintech company, Gainbridge. Together, our Group1001-funded startup launched a digital, direct-to-consumer annuity platform that grew from 5 to 20 team members in 2 years and $1MM+/week in sales in under 12 months. As is the case in many startups, I wore multiple hats: VP of Tech, Engineering Manager, and Technical Product Owner. This role leveraged every one of my talents and challenged me to grow outside my comfort zones to meet the demands of an aggressive fintech startup.'
      },
      {
        id: 2,
        year: 'Mar 2014 - Aug 2017',
        position: 'Principal Engineer',
        company: 'Synacor',
        location: 'Remote',
        achievements: [],
        details:
          'Looking to expand my experience into more corporate/enterprise environments, I took a contract with Synacor as a Frontend Engineer on a fully distributed team. My technical contributions were predominantly full-stack front-end on top of a SOA backend. We had a robust CI pipeline and a formal change management process for releases that I helped to coordinate across all engineering teams. Shortly before my contract expired, I was asked to join as an FTE and take on the responsibilities of Tech Lead. I agreed, and in time was asked to fulfill additional roles as needed. I consulted across teams when technical expertise, rapid prototyping, or domain knowledge was needed and acted as interim Engineering Manager in absence of the role being filled. During my time here I was able to continue my passion for frontend work and creating great user experiences, but I was also given the opportunity to exercise my leadership skills in a formal management role.'
      },
      {
        id: 3,
        year: 'Feb 2009 - Mar 2014',
        position: 'Owner',
        company: 'Bitwise',
        location: 'Remote',
        achievements: [],
        details:
          'Having learned much of what it takes to be successful in professional services during my first 9 years of employment, I started my own consulting company where I succeeded (and failed) by my own accord – using each experience as an opportunity for growth. I performed CTO/Technical co-founder duties for several startups while also architecting and coding the applications from scratch and managing offshore teams of mobile developers. I was also hired into several agencies to contribute extra engineering capacity and train their teams to use new technologies, coding best-practices and delivery workflows. Even after my contracts had ended, I remained in touch with several clients, hearing much positive feedback about the residual effects of our engagement.'
      },
      {
        id: 4,
        year: 'May 2000 - Feb 2009',
        position: 'Director, Product Engineering',
        company: 'Ultrastar / LiveNation',
        location: 'NYC / Brooklyn',
        achievements: [],
        details:
          'After undergrad, I began work as webmaster at a startup founded by David Bowie. Part ISP, part subscription-fanclub/advance-ticketing platform. Early on, I was called upon to interact directly with fans as well as artists/clients. Clients included David himself, The Rolling Stones, The Who, Madonna, Mariah Carey, The Police, AC/DC and many others. My adept handling of those responsibilities allowed me to rapidly evolve into more of a player/coach as the team grew to 5+ designers and developers. I was responsible for ensuring our team delivered all client work as well as prototyping and pitching new features to prospective clients. Out of necessity, I invented my own processes, workflows and libraries to organize work for the company, set expectations with client managers, and provide engineers a high level of reusability and extensibility across projects. I also organized and executed exclusive members-only experiences, live chats and webcasts from venues.'
      }
    ],
    volunteerExperience: [
      {
        id: 1,
        year: '2020 - Present',
        position: 'Board Member',
        company: 'River Valley Waldorf School',
        details:
          'Member of the Board of Trustees responsible for guidance and governance of a faculty-centric school committed to modern Waldorf pedagogy.'
      },
      {
        id: 2,
        year: '2019 - 2020',
        position: 'Auction Committee Chair',
        company: 'River Valley Waldorf School',
        details:
          'Organized, planned and executed the Auction Gala, the largest annual fundraising project. Worked with the co-chair to recruit volunteers, procure items, sponsorships, and donations raising approximately $40K. Produced a digital playbook documenting the process for future committees; a first in the history of the school.'
      },
      {
        id: 3,
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
          "3.8 GPA, Dean's List",
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
