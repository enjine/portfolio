import Mock from '../mock'

const database = {
  information: {
    firstName: 'Alessandro',
    lastName: 'Di Candia',
    aboutContent:
      'Product-centric Technology Leader. Specialization in managing distributed teams, front-end engineering, software quality, and CI/CD. Growth mindset for startups and product development/innovation.',
    age: 42,
    phone: '',
    nationality: '',
    language: 'English, Italian, Computer',
    email: 'alex[at]enjine.net',
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
    cvfile: '/files/Alessandro-Di-Candia-CV-2020-final.pdf'
  },
  services: [
    {
      title: 'Team Culture',
      icon: 'grow',
      details:
        "Hiring, managing, and retaining distributed engineering teams is my strong suit. Every team needs to develop it's own identity. I understand the value of on-site time as well as work-from-home time. I build strong, accountable, unified teams founded on trust."
    },
    {
      title: 'Domain Language',
      icon: 'write',
      details:
        'To collaboratively solve problems and create effective solutions, teams must share an understanding of both the problem and the solution. I have successfully introduced Domain Driven Design (DDD) as one way to avoid many of the struggles that befall cross-functional teams when defining technical requirements and acceptance criteria.'
    },
    {
      title: 'Platform Architecture',
      icon: 'cloudnetwork',
      details:
        '20 years of experience designing scalable, distributed systems for growth. Whether acting as manager, tech lead, or individual contributor, my approach is the same; gain a deep understanding of the problem space and strive for simple solutions.'
    },
    {
      title: 'Responsive Web Applications',
      icon: 'laptop-phone',
      details:
        'The web is a multi-device experience. I deeply understand this medium and how to make those transitions seamless.'
    },
    {
      title: 'JavaScript',
      icon: 'code',
      details:
        'Specialization in creating responsive, cross-browser applications that are performant. Node.js when needed, usually as serverless apps, npm packages, or parts of toolchains.'
    },
    {
      title: 'HTML5/CSS3',
      icon: 'brick',
      details: "Mastery of the browser's building blocks."
    },
    {
      title: 'CI/CD',
      icon: 'rocket',
      details:
        'Delivery becomes a competitive advantage when your teams are able to ship high quality work quickly. I understand what is needed to assemble a pipeline that builds, tests, and deploys projects into a cluster, but also fails-fast if quality standards are not met.'
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
        'Modern codebases require modern security practices. I understand what is required to maintain systems hardened against vulnerabilities and keep data secure at rest, over the wire, and when shared with trusted 3rd parties.'
    }
  ],
  reviews: [
    {
      id: 1,
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.',
      author: {
        name: '',
        designation: ''
      }
    }
  ],
  skills: [
    {
      title: 'Technology Leadership',
      value: 100
    },
    {
      title: 'Team Culture',
      value: 100
    },
    {
      title: 'Technical Product Ownership',
      value: 100
    },
    {
      title: 'UI / Frontend Engineering',
      value: 95
    },
    {
      title: 'Engineering Management',
      value: 98
    },
    {
      title: 'Interviewing / Hiring',
      value: 98
    },
    {
      title: 'Cross-Disciplinary Communications',
      value: 100
    }
  ],
  portfolios: [
    {
      id: 1,
      title: 'gainbridge.life',
      subtitle:
        'Fully digital retail annuity e-commerce platform. Purchase fixed annuities direct from the issuer, without an agent, on any device.',
      imageUrl: '/images/portfolio-image-1.png',
      largeImageUrl: ['/images/portfolio-image-1-lg.png'],
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
        "Official fanclub and advance ticketing platform for touring artists. Ultrastar Entertainment was founded in 1998 by David Bowie to create artist-powered, fan-driven internet communities. In 2007, David's pioneering community platform was purchased by Live Nation and continued to actualize his vision of artist-powered, fan-driven experiences.",
      imageUrl: '/images/portfolio-image-3.png',
      largeImageUrl: ['/images/portfolio-image-3-lg.png'],
      url: 'https://www.livenationentertainment.com/'
    }
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: 'Feb 2008 - Present',
        position: 'Member',
        company: 'Bitwise',
        location: 'Remote',
        details:
          'Single-member LLC created to offer freelance consulting services to startups and small businesses in NYC, Brooklyn, DC, Philadelphia, and CA. Developed a range of web-based software projects for high-profile clients and startups.'
      },
      {
        id: 2,
        year: 'Aug 2017 - Jan 2020',
        position: 'VP Technology, Digital Platform',
        company: 'Group1001',
        location: 'Remote',
        details:
          "VP of Tech for an internal startup creating a direct-to-consumer annuity sales platform. Responsible for all technology decisions and leadership. Reporting to CXO, managed delivery across multiple agency teams of 10+ people simultaneously, aligning each team's work to deliver just in time for integration. Built and managed an internal team of 10 engineers. Procured talent and conducted interviews for both Product and Engineering teams. Introduced DDD as a method of establishing shared understanding across teams. Individual contributions as a UI Engineer using React, Redux, Sagas, and Aphrodite."
      },
      {
        id: 3,
        year: 'Mar 2014 - Aug 2017',
        position: 'Principal Engineer',
        company: 'Synacor',
        location: 'Remote',
        details:
          'Joined as a UI Tech Lead and evolved into a cross-team consulting engineer. Worked across several high-profile projects within the company. Temporarily managed our distributed team during a period of re-organization.'
      },
      {
        id: 4,
        year: 'May 2000 - Feb 2008',
        position: 'Director, Product Engineering',
        company: 'Ultrastar / LiveNation',
        location: 'NYC / Brooklyn',
        details:
          'Pioneered development of a fanclub and advance ticket sales platform for David Bowie, The Rolling Stones, The Who, and many other LiveNation artists. Directed engineering team in delivery of client work, led concepting and development of innovative products to attract new artists to the company.'
      }
    ],
    volunteerExperience: [
      {
        id: 1,
        year: '2019 - 2020',
        position: 'Auction Committee Chair',
        company: 'River Valley Waldorf School',
        details:
          'Organized, planned and executed the largest annual fundraiser. Worked with the co-chair to recruit volunteers, procure items, sponsorships, and donations, and produce digital documentation operationalizing the process for future committees; a first in the history of the school.'
      },
      {
        id: 2,
        year: '2015 - 2018',
        position: 'IT Committee Chair',
        company: 'River Valley Waldorf School',
        details:
          'Helped update internal technology infrastructure, helped faculty and staff with tech-related operations.'
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: '1996 - 2000',
        graduation: 'BA, Advertising/Communications',
        university: 'Penn State University',
        details: 'Minors in Business Administration and Italian. Peer Mentor.'
      }
    ]
  },
  blogs: [
    {
      id: 1,
      title: 'Lorem Ipsum Dolor',
      imageUrl: '/images/blog-image-1.jpg',
      content: '',
      createTime: 'January 20th 2019'
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
