import Mock from '../mock'

const database = {
  information: {
    firstName: 'Alessandro',
    lastName: 'Di Candia',
    aboutContent:
      'Product-centric Technology Leader. Specialization in managing distributed teams, front-end engineering, software quality, and CI/CD. Growth mindset well-suited to startups and product development.',
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
    aboutImage: '/images/about-image.jpg',
    aboutImageLg: '/images/about-image-lg.jpg',
    cvfile: '/files/Alessandro-Di-Candia-CV-2020-final.pdf'
  },
  services: [
    {
      title: 'Team Culture',
      icon: 'grow',
      details:
        "Hiring, managing, and retaining distributed engineering teams is one of my super powers. Every team needs to develop it's own identity. I understand the value of on-site time as well as work-from-home time and know how to blend them both successfully to build strong, accountable, and unified teams."
    },
    {
      title: 'Domain Language',
      icon: 'write',
      details:
        "To solve problems and create solutions effectively, you need all participants to share the same understanding of what's being solved/asked for. I have successfully introduced Domain Driven Design (DDD) as one way to avoid many of the struggles that befall cross functional teams when defining technical requirements and acceptance criteria."
    },
    {
      title: 'Platform Architecture',
      icon: 'cloudnetwork',
      details:
        'Architecting scalable, distributed systems for growth is where I have spent most of my career. As an individual contributor or tech lead, I always seek to gain a deep understanding of the problem space aiming to create simple solutions with low incidental complexity.'
    },
    {
      title: 'Responsive Web Applications',
      icon: 'laptop-phone',
      details:
        'People experience the internet across multiple screen sizes. I deeply understand this medium and how to make those transitions seamless.'
    },
    {
      title: 'JavaScript',
      icon: 'code',
      details:
        'Cross-browser specialization, performance-aware. Node.js applied when needed, usually as serverless apps, parts of toolchains, or standalone packages.'
    },
    {
      title: 'HTML/CSS',
      icon: 'brick',
      details: " Mastery of the browser's building blocks."
    },
    {
      title: 'CI/CD',
      icon: 'rocket',
      details:
        "'Good Code' is code that ships fast and is of high quality. I understand what is needed to assemble a pipeline that builds, tests, and deploys your project while failing-fast if things are not right."
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
        'Modern codebases need modern security practices. I understand what is required to maintain systems hardened against vulnerabilities and keep data secure at rest, over the wire, and when shared with trusted 3rd parties.'
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
        'Fully digital retail annuity e-commerce platform. Purchase fixed annuities direct from the issuer, without an agent.',
      imageUrl: '/images/portfolio-image-1.png',
      largeImageUrl: ['/images/portfolio-image-1-lg.png'],
      url: 'https://gainbridge.life'
    },
    {
      id: 2,
      title: 'tv.verizon.com',
      subtitle:
        'TV Everywhere product. Watch TV and movies on any device from anywhere using your cable provider account.',
      imageUrl: '/images/portfolio-image-2.png',
      largeImageUrl: ['/images/portfolio-image-2-lg.png'],
      url: 'https://tv.verizon.com'
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
          'Single-member LLC created to offer freelance consulting services to startups and small businesses in NYC, Brooklyn, DC, Philadelphia, and Napa, CA. Developed an array of web-based software projects; some for high-profile clients but mostly for startups.'
      },
      {
        id: 2,
        year: 'Aug 2017 - Jan 2020',
        position: 'VP Technology: Digital Platform',
        company: 'Group1001',
        location: 'Remote',
        details:
          "VP of Tech for an internal startup creating a retail annuity sales platform. Responsible for all technology decisions and leadership. Reporting to CXO, managed delivery across multiple agency teams of 10+ people simultaneously, aligning each team's work to deliver in time for integration. Built and managed an internal team of 10 engineers. Procured talent and conducted interviews for both Product and Engineering teams. Introduced DDD as a method of establishing shared understanding across teams."
      },
      {
        id: 3,
        year: 'Mar 2014 - Aug 2017',
        position: 'Principal Engineer',
        company: 'Synacor',
        location: 'Remote',
        details:
          'Decided I wanted to master frontend engineering. Joined as a UI Team lead but evolved into more of a cross-team consulting engineer. Worked across several high-profile projects within the company. Temporarily managed our distributed team while the open req was being filled.'
      },
      {
        id: 4,
        year: 'May 2000 - Feb 2008',
        position: 'Director, Product Engineering',
        company: 'Ultrastar / LiveNation',
        location: 'NYC',
        details:
          'Pioneered development of a fanclub and advance ticket sales platform for David Bowie, The Rolling Stones, The Who, and many other LiveNation artists. Directed engineering team in delivery of client work, led concepting and development of innovative products to attract new artists to the company.'
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
