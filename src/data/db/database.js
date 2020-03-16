import Mock from '../mock'

const database = {
  information: {
    firstName: 'Alessandro',
    lastName: 'Di Candia',
    aboutContent:
      'Customer-centric technology leader catalyzing growth in organizations and individuals. Expert leader of both remote and distributed teams.',
    age: 42,
    phone: '',
    nationality: '',
    language: '',
    email: 'alex@enjine.net',
    address: 'Ferndale, PA 18921',
    freelanceStatus: 'Available',
    socialLinks: {
      facebook: '',
      twitter: '',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/adicandia/',
      dribbble: '',
      github: 'https://github.com/enjine'
    },
    brandImage: '/images/brand-image.png',
    aboutImage: '/images/comin-atcha.gif',
    aboutImageLg: '/images/about-image-lg.png',
    cvfile: '/files/ADiCandia2020.pdf'
  },
  services: [
    {
      title: 'Team Culture',
      icon: 'grow',
      details:
        'Hiring, motivating, and retaining distributed engineering teams is one of my strengths. Every team needs to cultivate its own identity; I provide a healthy space for it to grow. I build strong, accountable, unified teams founded on trust and empathy.'
    },
    {
      title: 'User Experience',
      icon: 'users',
      details:
        'Users and customers are first-class citizens in the technology ecosystem. Human or machine, they are on the receiving end of everything our teams do. I respect their position tremendously, and it is a significant factor for me when making business or technology decisions.'
    },
    {
      title: 'Domain Language',
      icon: 'write',
      details:
        'To collaboratively solve problems and create effective solutions, teams must share an understanding of both the problem and the solution. I have successfully introduced Domain-Driven Design (DDD) as one way to avoid many of the struggles that befall cross-functional teams when defining technical requirements and acceptance criteria.'
    },
    {
      title: 'Platform Architecture',
      icon: 'cloudnetwork',
      details:
        '20 years of experience designing scalable distributed systems for growth. Whether acting as VP, Manager, Tech Lead, or Individual Contributor, my approach is the same; gain a deep understanding of the problem space and strive for simple solutions.'
    },
    {
      title: 'Event Driven Design',
      icon: 'bolt-alt',
      details:
        "In my experience building UI's and complex systems, event-driven design has proven to be a very effective, semantic way to loosely-couple components. I have extensive experience using Flux, Event Sourcing, and CQRS patterns to construct complex applications and distributed systems."
    },
    {
      title: 'Responsive Web Applications',
      icon: 'laptop-phone',
      details:
        'The web is a multi-device experience. I deeply understand this medium and how to make those transitions seamless.'
    },
    {
      title: 'Java/JVM',
      icon: 'java',
      details:
        'Experience with compiled languages on the JVM including Java, Scala, and Kotlin with Maven and Gradle as build tools.'
    },
    {
      title: 'JavaScript',
      icon: 'code',
      details:
        'Specialization in creating responsive web applications that are highly performant. Deep understanding of both server- and client-side environments. Experience creating and publishing private NPM packages.'
    },
    {
      title: 'HTML5/CSS3',
      icon: 'brick',
      details: "Mastery of the browser's building blocks."
    },
    {
      title: 'Docker/Kubernetes',
      icon: 'ship',
      details:
        'Experience working with large clusters of containerized microservices using managed Kubernetes (EKS) on AWS.'
    },
    {
      title: 'CI/CD',
      icon: 'rocket',
      details:
        'Delivery becomes a competitive advantage when your teams can ship high-quality work quickly. I understand what is needed to assemble a pipeline that builds, tests, and deploys projects into a cluster, but also fails-fast if quality standards are not met.'
    },
    {
      title: 'Regulatory Compliance',
      icon: 'stamp',
      details:
        'First-hand experience working directly with Legal and Compliance teams in the FinTech space to understand and implement the mandated requirements for both customer- and system-facing interactions.'
    },
    {
      title: 'INFOSEC',
      icon: 'shield',
      details:
        'Modern systems require modern security practices. I understand what is required to keep, networks secure, applications free from vulnerabilities, data protected at rest, over the wire, and even when shared with trusted 3rd parties.'
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
        'Multi-tenant TV Everywhere product enabling cable subscribers to watch TV and movies on any device from anywhere.',
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
    }
  ],
  experience: {
    totalYears: 20,
    workingExperience: [
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
        year: '2019 - 2020',
        position: 'Auction Committee Chair',
        company: 'River Valley Waldorf School',
        details:
          'Organized, planned and executed the Auction Gala, the largest annual fundraising project. Worked with the co-chair to recruit volunteers, procure items, sponsorships, and donations raising approximately $40K. Produced a digital playbook documenting the process for future committees; a first in the history of the school.'
      },
      {
        id: 2,
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
    phoneNumbers: ['', ''],
    emailAddress: ['', ''],
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
