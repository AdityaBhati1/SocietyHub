/**
 * NSUT Official Societies Dataset
 * Source: NSUT Technical Societies Orientation Deck (54 Societies)
 */

export const CATEGORY_STYLES = {
  'Technical Society':       { color: 'var(--color-dusty-blue)',     bg: 'var(--color-dusty-blue-subtle)', icon: 'Code' },
  'Cultural Society':        { color: 'var(--color-peach)',          bg: 'var(--color-peach-subtle)',      icon: 'Music' },
  'Literary Society':        { color: 'var(--color-pale-yellow)',    bg: 'var(--color-pale-yellow-subtle)',icon: 'BookOpen' },
  'Consulting Society':      { color: 'var(--color-accent)',         bg: 'var(--color-accent-subtle)',     icon: 'TrendingUp' },
  'Finance Society':         { color: 'var(--color-accent-muted)',   bg: 'var(--color-accent-subtle)',     icon: 'Coins' },
  'Sports Society':          { color: 'var(--color-warm-red)',       bg: 'var(--color-warm-red-subtle)',   icon: 'Trophy' },
  'Gaming Society':          { color: 'var(--color-lavender)',       bg: 'var(--color-lavender-subtle)',   icon: 'Gamepad2' },
  'Media Society':           { color: 'var(--color-dusty-blue)',     bg: 'var(--color-dusty-blue-subtle)', icon: 'Video' },
  'Automotive Society':      { color: 'var(--color-warm-red)',       bg: 'var(--color-warm-red-subtle)',   icon: 'Car' },
  'Aerospace Society':       { color: 'var(--color-dusty-blue)',     bg: 'var(--color-dusty-blue-subtle)', icon: 'Send' },
  'Social Service':          { color: 'var(--color-accent)',         bg: 'var(--color-accent-subtle)',     icon: 'Heart' },
  'Social Entrepreneurship': { color: 'var(--color-peach)',          bg: 'var(--color-peach-subtle)',      icon: 'Sparkles' },
  'Entrepreneurship':        { color: 'var(--color-warm-red)',       bg: 'var(--color-warm-red-subtle)',   icon: 'Lightbulb' },
  'Incubation Cell':         { color: 'var(--color-accent)',         bg: 'var(--color-accent-subtle)',     icon: 'Building' },
  'Design Society':          { color: 'var(--color-lavender)',       bg: 'var(--color-lavender-subtle)',   icon: 'Palette' },
  'Fashion Society':         { color: 'var(--color-peach)',          bg: 'var(--color-peach-subtle)',      icon: 'Sparkles' },
  'Astronomy Society':       { color: 'var(--color-dusty-blue)',     bg: 'var(--color-dusty-blue-subtle)', icon: 'Compass' },
  'Biotech Society':         { color: 'var(--color-accent)',         bg: 'var(--color-accent-subtle)',     icon: 'Dna' },
  'PR Society':              { color: 'var(--color-dusty-blue)',     bg: 'var(--color-dusty-blue-subtle)', icon: 'Megaphone' },
  'Marketing Society':       { color: 'var(--color-peach)',          bg: 'var(--color-peach-subtle)',      icon: 'Target' },
  'Management Society':      { color: 'var(--color-accent)',         bg: 'var(--color-accent-subtle)',     icon: 'Briefcase' },
  'Service Club':            { color: 'var(--color-accent-muted)',   bg: 'var(--color-accent-subtle)',     icon: 'Shield' },
  'Social Initiative':       { color: 'var(--color-accent)',         bg: 'var(--color-accent-subtle)',     icon: 'Users' },
  'Social Society':          { color: 'var(--color-peach)',          bg: 'var(--color-peach-subtle)',      icon: 'Users' },
  'Spiritual Society':       { color: 'var(--color-pale-yellow)',    bg: 'var(--color-pale-yellow-subtle)',icon: 'Sun' },
  'Mental Health Society':   { color: 'var(--color-lavender)',       bg: 'var(--color-lavender-subtle)',   icon: 'HeartHandshake' },
  'Youth Movement':          { color: 'var(--color-warm-red)',       bg: 'var(--color-warm-red-subtle)',   icon: 'Flame' },
};

export const FILTER_GROUPS = [
  { id: 'all',                label: 'All Societies',       count: 54 },
  { id: 'technical',          label: 'Technical',           count: 9 },
  { id: 'cultural',           label: 'Cultural',            count: 9 },
  { id: 'literary',           label: 'Literary',            count: 6 },
  { id: 'consulting-finance',  label: 'Consulting & Finance', count: 3 },
  { id: 'automotive-aero',    label: 'Automotive & Aero',   count: 3 },
  { id: 'gaming-sports',      label: 'Sports & Gaming',     count: 4 },
  { id: 'social-service',     label: 'Social & Service',    count: 7 },
  { id: 'design-media',       label: 'Design & Media',      count: 4 },
  { id: 'entrepreneurship',   label: 'Entrepreneurship',    count: 5 },
  { id: 'special',            label: 'Special Interest',    count: 7 },
];

export const CATEGORIES = [
  { id: 'technical',          label: 'Technical',           icon: 'Code',          color: 'var(--color-dusty-blue)',     bg: 'var(--color-dusty-blue-subtle)' },
  { id: 'cultural',           label: 'Cultural',            icon: 'Music',         color: 'var(--color-peach)',           bg: 'var(--color-peach-subtle)' },
  { id: 'literary',           label: 'Literary',            icon: 'BookOpen',      color: 'var(--color-pale-yellow)',     bg: 'var(--color-pale-yellow-subtle)' },
  { id: 'consulting-finance',  label: 'Finance & Consulting',icon: 'TrendingUp',    color: 'var(--color-accent)',          bg: 'var(--color-accent-subtle)' },
  { id: 'gaming-sports',      label: 'Sports & Gaming',     icon: 'Trophy',        color: 'var(--color-warm-red)',        bg: 'var(--color-warm-red-subtle)' },
  { id: 'entrepreneurship',   label: 'Entrepreneurship',    icon: 'Lightbulb',     color: 'var(--color-lavender)',        bg: 'var(--color-lavender-subtle)' },
];

export function getCategoryMeta(categoryName) {
  if (!categoryName) return null;
  if (CATEGORY_STYLES[categoryName]) {
    return {
      label: categoryName,
      ...CATEGORY_STYLES[categoryName]
    };
  }
  return {
    label: categoryName,
    color: 'var(--color-accent)',
    bg: 'var(--color-accent-subtle)',
    icon: 'Compass'
  };
}

export function getCategoryColor(categoryName) {
  const meta = getCategoryMeta(categoryName);
  return meta ? meta.color : 'var(--color-accent)';
}

export function getSocietyById(id) {
  if (!id) return null;
  return societies.find((s) => s.id === id) || null;
}

export function matchSocietyGroup(society, groupId) {
  if (!groupId || groupId === 'all') return true;
  const cat = (society.category || '').toLowerCase();
  switch (groupId) {
    case 'technical':
      return cat.includes('technical');
    case 'cultural':
      return cat.includes('cultural');
    case 'literary':
      return cat.includes('literary');
    case 'consulting-finance':
      return cat.includes('consulting') || cat.includes('finance');
    case 'automotive-aero':
      return cat.includes('automotive') || cat.includes('aerospace');
    case 'gaming-sports':
      return cat.includes('sports') || cat.includes('gaming');
    case 'social-service':
      return cat.includes('social') || cat.includes('service') || cat.includes('youth');
    case 'design-media':
      return cat.includes('design') || cat.includes('media') || cat.includes('fashion');
    case 'entrepreneurship':
      return cat.includes('entrepreneurship') || cat.includes('incubation') || cat.includes('management') || cat.includes('marketing');
    case 'special':
      return cat.includes('astronomy') || cat.includes('biotech') || cat.includes('spiritual') || cat.includes('mental') || cat.includes('pr');
    default:
      return true;
  }
}

export const societies = [
  {
    "id": "crosslinks",
    "name": "Crosslinks",
    "tagline": "The Student Relations & Public Relations Cell.",
    "category": "PR Society",
    "logo": "/logos/crosslinks.jpeg",
    "about": "Managing university public relations, corporate sponsorships, media outreach, and official affairs.",
    "whyJoin": "Master corporate communication, event management, media pitching, and executive PR operations.",
    "annualEvent": "Farewell, Scribble day, NSUTTHON",
    "instagram": "crosslinks.nsut",
    "poc": [
      {
        "name": "Ashish",
        "phone": "62068 14632"
      },
      {
        "name": "Rishit",
        "phone": "+91 97976 45770"
      }
    ],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 3
  },
  {
    "id": "enactus-nsut",
    "name": "Enactus NSUT",
    "tagline": "A Head for Business. A Heart for the World.",
    "category": "Social Entrepreneurship",
    "logo": "/logos/enactus-nsut.jpeg",
    "about": "Creating sustainable social business models to uplift underprivileged communities self-sufficiently.",
    "whyJoin": "Create real community enterprises, build business acumen, and compete at Enactus World Cup.",
    "annualEvent": "Aspire",
    "instagram": "enac.nsut",
    "faculty": [
      "Mr Vicky Suri (ICE)",
      "Dr Shiksha Kushwaha (Mgt)"
    ],
    "poc": [
      {
        "name": "Aryan",
        "phone": "+919911111265"
      }
    ],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 4
  },
  {
    "id": "180-degrees-consulting-nsut",
    "name": "180 Degrees Consulting NSUT",
    "tagline": "Consulting for Social Good.",
    "category": "Consulting Society",
    "logo": "/logos/180-degrees-consulting-nsut.jpeg",
    "about": "Providing high-impact management consulting services to non-profits and social enterprises worldwide.",
    "whyJoin": "Solve real strategic business problems, build high-value case frameworks, and prepare for premier consulting firms.",
    "annualEvent": "Symposium",
    "instagram": "180dcnsut",
    "faculty": [
      "Dr Sameer Gokarn (Mgt)",
      "Dr Rituraj Singh (ECE)"
    ],
    "poc": [
      {
        "name": "Vaibhav",
        "phone": "+91 96678 25965"
      },
      {
        "name": "Ritu",
        "phone": "+91 98176 8599"
      },
      {
        "name": "Echit",
        "phone": "+91 98107 991"
      }
    ],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 5
  },
  {
    "id": "ashwamedh-stage",
    "name": "Ashwamedh Stage",
    "tagline": "The Stage Dramatics Society.",
    "category": "Cultural Society",
    "logo": "/logos/ashwamedh-stage.jpeg",
    "about": "Showcasing theatrical excellence through full-length stage productions, monoacts, and classical plays.",
    "whyJoin": "Develop stagecraft, acting voice modulation, scriptwriting, and lighting direction for grand productions.",
    "annualEvent": "Parwaaz",
    "instagram": "ashwamedh.nsut",
    "faculty": [
      "Dr Amarjit Malhotra (IT)"
    ],
    "poc": [
      {
        "name": "Vedika Choudhary",
        "phone": "+91 73039 15884",
        "email": "ashwamedh.nsit@gmail.com"
      }
    ],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 6
  },
  {
    "id": "ashwamedh-street",
    "name": "Ashwamedh Street",
    "tagline": "The Nukkad Natak Society.",
    "category": "Cultural Society",
    "logo": "/logos/ashwamedh-street.jpeg",
    "about": "Driving socio-political awareness through raw energy, drumbeats, and compelling open-air street plays.",
    "whyJoin": "Build supreme vocal projection, team coordination, rhythm timing, and compete at national fest arenas.",
    "annualEvent": "Parwaaz",
    "instagram": "ashwamedh.nsut",
    "faculty": [
      "Dr Jyoti Yadav (ICE)",
      "Dr Leena Aggarwal (Chem)"
    ],
    "poc": [
      {
        "name": "Ankush",
        "phone": "+91 87000 84372",
        "email": "ashwamedh.nsit@gmail.com"
      },
      {
        "name": "Vedika Choudhary",
        "phone": "+91 73039 188",
        "email": "ashwamedh.nsit@gmail.com"
      }
    ],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 7
  },
  {
    "id": "finance-and-economics-society",
    "name": "Finance and Economics Society",
    "tagline": "Decoding Markets & Macroeconomics.",
    "category": "Finance Society",
    "logo": "/logos/finance-and-economics-society.jpeg",
    "about": "Promoting financial literacy, equity research, macroeconomic analysis, and stock market trading.",
    "whyJoin": "Master financial modeling, portfolio management, valuation techniques, and market research.",
    "annualEvent": "CONSILIUM",
    "instagram": "fes.nsut",
    "faculty": [
      "Dr Renu Ghosh (Mgt)",
      "Dr Ritika (Mgt)"
    ],
    "poc": [
      {
        "name": "Shreya Nagpal",
        "phone": "+91 99580 50046",
        "email": "fes@nsut.ac.in"
      }
    ],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 8
  },
  {
    "id": "devcomm-nsut",
    "name": "DevComm NSUT",
    "tagline": "Build Open Source. Build Impact.",
    "category": "Technical Society",
    "logo": "/logos/devcomm-nsut.jpeg",
    "about": "Fostering an open-source developer community through peer learning and modern web architecture.",
    "whyJoin": "Contribute to real open-source repositories, learn production web frameworks, and win hackathons.",
    "annualEvent": "AVINYA",
    "instagram": "devcomm.nsut",
    "faculty": [
      "Dr Deepika Kukreja (IT)",
      "Dr Surendra Nagar (CSE)"
    ],
    "poc": [
      {
        "name": "Kanishk",
        "phone": "7547977295"
      },
      {
        "name": "Snehil",
        "phone": "9628327405"
      }
    ],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 9
  },
  {
    "id": "the-debugging-society",
    "name": "The Debugging Society",
    "tagline": "Inspect. Fix. Optimize.",
    "category": "Technical Society",
    "logo": "/logos/the-debugging-society.jpeg",
    "about": "Mastering code inspection, memory leak analysis, syntax debugging, and software testing methodologies.",
    "whyJoin": "Identify complex code bugs under time pressure and master software optimization tools.",
    "annualEvent": "AI ethics and safety workshop",
    "instagram": "thedebuggingsocietynsut",
    "faculty": [
      "Dr Devender Kumar (IT)",
      "Dr Abhinav Tomar (CSE)"
    ],
    "poc": [
      {
        "name": "Ishita Papnai",
        "phone": "+91 93158 92172",
        "email": "thedebuggingsociety@nsut.ac.in"
      }
    ],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 10
  },
  {
    "id": "ieee-nsut",
    "name": "IEEE NSUT",
    "tagline": "Advancing Technology for Humanity.",
    "category": "Technical Society",
    "logo": "/logos/ieee-nsut.jpeg",
    "about": "Fostering technological innovation, academic research, and professional development in engineering.",
    "whyJoin": "Gain access to global IEEE research publications, high-impact workshops, and worldwide networks.",
    "annualEvent": "Techweek",
    "instagram": "ieee_nsut",
    "faculty": [
      "Prof Prerna Gaur",
      "Dr Poonam Rani (CSE)",
      "Dr Bhavnesh (ICE)",
      "Dr Anjanee Kumar Mishra (EE)"
    ],
    "poc": [
      {
        "name": "Bhaavin Jain",
        "phone": "+91 96508 06136",
        "email": "ieee@nsut.ac.in"
      }
    ],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 11
  },
  {
    "id": "ecell-nsut",
    "name": "ECell NSUT",
    "tagline": "Entrepreneurship Cell of NSUT.",
    "category": "Entrepreneurship",
    "logo": "/logos/ecell-nsut.jpeg",
    "about": "Incubating student startups, fostering entrepreneurial mindset, and connecting founders with VCs.",
    "whyJoin": "Pitch to angel investors, participate in E-Summits, and build viable startup business models.",
    "annualEvent": "ESummit",
    "instagram": "ecell.nsut",
    "faculty": [
      "Dr Pragati Singh (Mgt)",
      "Dr Sameer Gokarn (Mgt)"
    ],
    "poc": [
      {
        "name": "Tanishq",
        "phone": "7015942778"
      },
      {
        "name": "Divina",
        "phone": "8980745768"
      }
    ],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 12
  },
  {
    "id": "crescendo",
    "name": "Crescendo",
    "tagline": "The Music Society of NSUT.",
    "category": "Cultural Society",
    "logo": "/logos/crescendo.jpeg",
    "about": "Uniting vocalists and instrumentalists across classical, rock, pop, and fusion genres.",
    "whyJoin": "Jam with elite campus musicians, perform live concert gigs, and compete in Battle of the Bands.",
    "annualEvent": "Respelagus",
    "instagram": "crescendonsut",
    "faculty": [
      "Dr. Shivam Kumar Singh (Maths)",
      "Dr. Uma Narang (Chem)",
      "Dr Dipika Sharma (Chemistry)",
      "Dr Ram Shringar Raw (CSE-E)"
    ],
    "poc": [
      {
        "name": "Kajal Soni",
        "phone": "+91 78270 44075",
        "email": "crescendo.nsit@nsitonline.in"
      }
    ],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 13
  },
  {
    "id": "mirage",
    "name": "Mirage",
    "tagline": "The Choreography & Classical Dance Society.",
    "category": "Cultural Society",
    "logo": "/logos/mirage.jpeg",
    "about": "Blending classical Indian dance forms with contemporary thematic choreography and storytelling.",
    "whyJoin": "Learn intricate classical mudras, thematic group choreography, and perform at national fests.",
    "annualEvent": "Oorja, Step up, Zephyr",
    "instagram": "miragedancecrew.nsut",
    "faculty": [
      "Dr Narendra Kumar (MPAE)",
      "Dr Pooja Bansal (maths)",
      "Dr Manisha Malik (Maths)"
    ],
    "poc": [
      {
        "name": "Nikhil",
        "phone": "+91 87007 64596"
      },
      {
        "name": "Shaila Pandey",
        "phone": "+91 74835 24164",
        "email": "mirage.society@nsut.ac.in"
      }
    ],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 14
  },
  {
    "id": "junoon",
    "name": "Junoon",
    "tagline": "The Photography Club of NSUT.",
    "category": "Media Society",
    "logo": "/logos/junoon.jpeg",
    "about": "Capturing moments, mastering camera optics, photojournalism, and filmmaking aesthetics.",
    "whyJoin": "Master DSLR/Mirrorless cinematography, color grading, photowalks, and official fest coverage.",
    "annualEvent": "Ethnic Day",
    "instagram": "junoon.nsut",
    "faculty": [
      "Dr Jugal Bori (Chem)",
      "Dr Astitva Kumar (EE)",
      "Dr Navdeep Agrawal (West)"
    ],
    "poc": [
      {
        "name": "Vidhi",
        "phone": "+91 99873 89672",
        "email": "junoonnsut@gmail.com"
      }
    ],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 15
  },
  {
    "id": "rotaract-nsut",
    "name": "Rotaract NSUT",
    "tagline": "Fellowship Through Service.",
    "category": "Service Club",
    "logo": "/logos/rotaract-nsut.jpeg",
    "about": "Part of Rotary International, executing community development, youth leadership, and international service.",
    "whyJoin": "Build global youth networking, lead community projects, and earn Rotary international credentials.",
    "annualEvent": "Friendship Fiesta",
    "instagram": "rotaract.nsut",
    "poc": [
      {
        "name": "Vivek",
        "phone": "836 883 6998"
      }
    ],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 16
  },
  {
    "id": "nakshatra",
    "name": "Nakshatra",
    "tagline": "Explore Beyond the Stars.",
    "category": "Astronomy Society",
    "logo": "/logos/nakshatra.jpeg",
    "about": "Promoting astronomy, astrophysics, celestial mapping, and sky observation using optical telescopes.",
    "whyJoin": "Experience overnight telescope stargazing trips, learn astrophysics, and process satellite imagery data.",
    "annualEvent": "SpaceCon",
    "instagram": "nakshatra_nsut",
    "faculty": [
      "Dr Harish Parathasarthy (ECE)",
      "Dr Rudresh Dwivedi (CSE)",
      "Dr Shashi Prakash (Mech)"
    ],
    "poc": [
      {
        "name": "Aujasvi Saxena",
        "phone": "+91 90156 91795",
        "email": "nakshatransit@gmail.com"
      }
    ],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 17
  },
  {
    "id": "ares-robotics",
    "name": "ARES Robotics",
    "tagline": "Engineering Intelligent Machines.",
    "category": "Technical Society",
    "logo": "/logos/ares-robotics.jpeg",
    "about": "Building autonomous rovers and industrial robotic systems through multidisciplinary mechatronics.",
    "whyJoin": "Work on autonomous Mars rovers, custom microcontrollers, computer vision, and ROS software integration.",
    "instagram": "aresrobotics.nsut",
    "faculty": [
      "Dr Bhavnesh (ICE)",
      "Dr Ankush Jain (CSE)",
      "Dr Sanya Anees (ECE)",
      "Dr Ravinder Singh (EE)",
      "Dr Umer Ashraf (ECE)"
    ],
    "poc": [
      {
        "name": "Muskan Arora",
        "phone": "+91 93155 40941",
        "email": "teamaresnsit@gmail.com"
      }
    ],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 18
  },
  {
    "id": "team-daedalus-racing-tdr",
    "name": "Team Daedalus Racing (TDR)",
    "tagline": "Automotives Society",
    "category": "Technical Society",
    "logo": "/logos/team-daedalus-racing-tdr.jpeg",
    "about": "Designing, building, and racing high-performance automotive systems while pushing the boundaries of engineering innovation.",
    "whyJoin": "Gain hands-on experience in automotive design, manufacturing, and national-level competitions while working in a passionate engineering team.",
    "annualEvent": "ATVC",
    "instagram": "tdr.nsut",
    "faculty": [
      "Dr Andriya Narasimhulu (ME)",
      "Mr Manish (WC MPAE/Mech)",
      "Dr Narendra Kumar (MPAE/Mech)",
      "Dr Simran Jeet Singh (Mech)"
    ],
    "poc": [
      {
        "name": "Nikhil",
        "phone": "+91 87007 64596",
        "email": "teamdaedalusracing@gmail.com"
      },
      {
        "name": "Ritul",
        "phone": "+91 98176 85996"
      },
      {
        "name": "Echit",
        "phone": "+91 98107 991",
        "email": "ritul.ma5@nsut.ac.in"
      }
    ],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 19
  },
  {
    "id": "capella",
    "name": "Capella",
    "tagline": "The Western Dance Society.",
    "category": "Cultural Society",
    "logo": "/logos/capella.jpeg",
    "about": "Delivering high-voltage Western dance, hip-hop, urban routines, and synchronized choreography.",
    "whyJoin": "Perform energetic group routines, compete at premier inter-college dance battles, and boost stage confidence.",
    "annualEvent": "Kalakriti, Mudra, Footloose",
    "instagram": "capella.nsut",
    "faculty": [
      "Dr Vandana Bhatia (CSE)",
      "Dr Rashmi Rani (maths)",
      "Dr Parul Manchanda (Mgt)"
    ],
    "poc": [
      {
        "name": "Aakash",
        "phone": "+91 88008 20574",
        "email": "capellansut1@gmail.com"
      }
    ],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 20
  },
  {
    "id": "alliance",
    "name": "Alliance",
    "tagline": "The Newspaper & Publication Society.",
    "category": "Media Society",
    "logo": "/logos/alliance.jpeg",
    "about": "Curating stories, publishing official campus journalism, and documenting university life with creative precision.",
    "whyJoin": "Hone investigative writing, master print editing, cover university events, and lead campus journalism.",
    "instagram": "alliance_nsut",
    "faculty": [
      "Dr Akhilesh Dubey (BSE)",
      "Dr Urvashi Bhansal (ECE)"
    ],
    "poc": [
      {
        "name": "Sarthak Deora",
        "phone": "8375010867"
      },
      {
        "name": "Saumya Lehri",
        "phone": "7678334545"
      }
    ],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 21
  },
  {
    "id": "subhasha",
    "name": "Subhasha",
    "tagline": "The Vernacular & Regional Literature Club.",
    "category": "Literary Society",
    "logo": "/logos/subhasha.jpeg",
    "about": "Celebrating regional Indian languages, poetry, storytelling, and vernacular literary heritage.",
    "whyJoin": "Participate in multi-lingual Kavi Sammelans, publish regional poetry compilations, and express creative writing.",
    "annualEvent": "Raabta / Sahityam",
    "instagram": "subhasha.nsut",
    "faculty": [
      "Dr Nancy (Chem)",
      "Dr Jugal Bori (Chem)",
      "Dr Akhilesh Dubey (Biotech)",
      "Dr Samiksha Dabasi (Phy)"
    ],
    "poc": [
      {
        "name": "Ashutosh Kumar",
        "phone": "+91 85951 81098",
        "email": "subhashansut@gmail.com"
      }
    ],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 22
  },
  {
    "id": "debsoc",
    "name": "DebSoc",
    "tagline": "The Debating Society of NSUT.",
    "category": "Literary Society",
    "logo": "/logos/debsoc.jpeg",
    "about": "Fostering critical thinking, parliamentary debate, and public speaking across national circuits.",
    "whyJoin": "Hone argument articulation, represent NSUT at national Parliamentary Debates, and build sharp rhetoric.",
    "annualEvent": "COLLOQUIUM",
    "instagram": "debsocnsut",
    "faculty": [
      "Dr Juhi Raghuvanshi (IEV Main)",
      "Dr Atul Kumar Biltoria (West)"
    ],
    "poc": [
      {
        "name": "Bhavya Walia",
        "phone": "+91 93114 50826",
        "email": "debsoc.nsut@gmail.com"
      }
    ],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 23
  },
  {
    "id": "canvas",
    "name": "Canvas",
    "tagline": "The Fine Arts Society.",
    "category": "Cultural Society",
    "logo": "/logos/canvas.jpeg",
    "about": "Celebrating visual art, painting, digital illustrations, installations, and creative aesthetics.",
    "whyJoin": "Design major fest decor, showcase personal art exhibitions, and master digital graphic design.",
    "annualEvent": "Mosaic",
    "instagram": "canvasnsut",
    "faculty": [
      "Dr Amita Sharma",
      "Dr Uma Narang (Chem)",
      "Dr Manisha Malik (Maths)",
      "Dr Subhadip Saha"
    ],
    "poc": [
      {
        "name": "Raghav Bansal",
        "phone": "+91 88006 91802",
        "email": "canvasnsut@gmail.com"
      }
    ],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 24
  },
  {
    "id": "clitch",
    "name": "Clitch",
    "tagline": "The Fashion Society of NSUT",
    "category": "Fashion Society",
    "logo": "/logos/clitch.jpeg",
    "about": "Celebrating fashion through design, styling, runway shows, and creative expression.",
    "whyJoin": "Express your creativity, master fashion styling, and showcase your talent through runway productions and design events.",
    "annualEvent": "Rougue",
    "instagram": "clitchnsut",
    "faculty": [
      "Dr Ankita Srivastava (Design)",
      "Dr Parul Manchanda (Mgt)",
      "Dr Vandana Bhatia (CSE)",
      "Dr K. N. Chatterjee (Design)-guide"
    ],
    "poc": [
      {
        "name": "Suhani",
        "phone": "+91 84484 12443",
        "email": "clitch.society@nsut.ac.in"
      }
    ],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 25
  },
  {
    "id": "google-developer-groups-gdg-nsut",
    "name": "Google Developer Groups (GDG) NSUT",
    "tagline": "Learn. Build. Grow.",
    "category": "Technical Society",
    "logo": "/logos/google-developer-groups-gdg-nsut.jpeg",
    "about": "Connecting student developers to Google technologies through hands-on workshops, cloud labs, and hackathons.",
    "whyJoin": "Get hands-on experience with Android, Flutter, Cloud, & AI, participating in community hackathons.",
    "annualEvent": "Shunya",
    "instagram": "gdgnsut",
    "faculty": [
      "Dr Gaurav Singhal (CSE)",
      "Dr Shailesh Mishra (ECE)",
      "Dr Satish Kumar Singh (IT)"
    ],
    "poc": [
      {
        "name": "Jatin",
        "phone": "+91 70155 66146",
        "email": "gdsc@nsut.ac.in"
      }
    ],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 26
  },
  {
    "id": "intaglios",
    "name": "Intaglios",
    "tagline": "The Graphic Design Society.",
    "category": "Design Society",
    "logo": "/logos/intaglios.jpeg",
    "about": "Creating digital art, UI/UX design interfaces, brand identities, and visual media branding.",
    "whyJoin": "Master Adobe Creative Suite, Figma UI/UX prototyping, and build a professional design portfolio.",
    "instagram": "intaglios.nsut",
    "faculty": [
      "Dr K.N. Chatterjee (Design)-guide",
      "Dr Aarati (Design) guide",
      "Mr Saurav Sharma (Design)",
      "Dr Pramendra Kumar Bajpai (MPAE)",
      "Dr Manohar Mahato (Design)"
    ],
    "poc": [
      {
        "name": "Aman",
        "phone": "+91 99689 66408",
        "email": "intagliosnsut@gmail.com"
      }
    ],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 27
  },
  {
    "id": "ncc-nsut",
    "name": "NCC NSUT",
    "tagline": "Unity and Discipline.",
    "category": "Social Service",
    "logo": "/logos/ncc-nsut.jpeg",
    "about": "Developing disciplined, confident, and service-oriented leaders through military training, adventure activities, and community service.",
    "whyJoin": "Build leadership, discipline, and resilience while earning NCC certifications, attending prestigious camps, and preparing for careers in the Armed Forces and beyond.",
    "instagram": "nsut_ncc",
    "faculty": [
      "Dr Sushmita",
      "Dr Amit Sanger",
      "Guided by NCC"
    ],
    "poc": [
      {
        "name": "Komal Dagar",
        "phone": "+91 87004 70628",
        "email": "ncc@nsut.ac.in"
      }
    ],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 28
  },
  {
    "id": "iif-incubation-and-innovation-foundation",
    "name": "IIF (Incubation & Innovation Foundation)",
    "tagline": "Nurturing Campus Startups.",
    "category": "Incubation Cell",
    "logo": "/logos/iif-incubation-and-innovation-foundation.jpeg",
    "about": "Providing seed funding, incubation infrastructure, and patent support to student innovators.",
    "whyJoin": "Transform technical final projects into funded startups with official incubation grants and mentorship.",
    "annualEvent": "AI4Humanity Summit and Innovation Challenge",
    "instagram": "iifnsut",
    "poc": [
      {
        "name": "Shubham",
        "phone": "81308 43191"
      }
    ],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 29
  },
  {
    "id": "venatus-gaming-society",
    "name": "Venatus Gaming Society",
    "tagline": "Play. Compete. Conquer.",
    "category": "Gaming Society",
    "logo": "/logos/venatus-gaming-society.jpeg",
    "about": "Fostering competitive esports tournaments, game development, and gaming culture across platforms.",
    "whyJoin": "Compete in inter-college esports leagues, learn 3D game engines (Unreal/Unity), and join gamer community.",
    "annualEvent": "Resurrect & Dynamo",
    "instagram": "venatusnsut",
    "faculty": [
      "Dr. Parveen Siroha",
      "Dr. Pargin Bangotra",
      "Mr. Ajay Kataria",
      "Dr. Sushmita Yadav",
      "Dr. Astitva Kumar"
    ],
    "poc": [
      {
        "name": "Manav",
        "phone": "9654573105"
      },
      {
        "name": "Rushil",
        "phone": "9654173264"
      }
    ],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 30
  },
  {
    "id": "mudrakala",
    "name": "Mudrakala",
    "tagline": "The Traditional Arts & Culture Society.",
    "category": "Cultural Society",
    "logo": "/logos/mudrakala.jpeg",
    "about": "Preserving India’s rich classical dance heritage through graceful performances, dedicated training, and artistic excellence.",
    "whyJoin": "Master timeless dance forms, perform on prestigious stages, and celebrate culture with a passionate community.",
    "annualEvent": "Mudra munch, Dharaa, Adiyogi",
    "instagram": "mudrakala.nsut",
    "faculty": [
      "Dr Swapnil Sonawane (Chem-M)",
      "Dr Aswathy R (CE-W)"
    ],
    "poc": [
      {
        "name": "Vikrant",
        "phone": "+91 96506 27642",
        "email": "mudrakala.society@nsut.ac.in"
      }
    ],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 31
  },
  {
    "id": "aagaaz",
    "name": "Aagaaz",
    "tagline": "Voices of Social Change.",
    "category": "Cultural Society",
    "logo": "/logos/aagaaz.jpeg",
    "about": "Empowering students through street play, social activism, and impactful theatrical performances.",
    "whyJoin": "Master street theatre skills, perform across national collegiate fests, and champion vital socio-cultural issues.",
    "annualEvent": "Raabta",
    "instagram": "aagaznsut",
    "faculty": [
      "Dr Nancy (Chem)",
      "Dr Jugal Bori (Chem)",
      "Dr Akhilesh Dubey (Biotech)",
      "Dr Samiksha Dabasi (Phy)"
    ],
    "poc": [
      {
        "name": "Muskan",
        "phone": "+91 97112 34030"
      }
    ],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 32
  },
  {
    "id": "shakesjeer",
    "name": "ShakesJeer",
    "tagline": "The English Stage Society.",
    "category": "Literary Society",
    "logo": "/logos/shakesjeer.jpeg",
    "about": "Staging classic and contemporary English plays, satirical comedies, and theatrical adaptations.",
    "whyJoin": "Master English dramatic delivery, character immersion, scriptwriting, and stage production.",
    "annualEvent": "Open Mics",
    "instagram": "shakesjeer.nsut",
    "faculty": [
      "Dr Akhilesh Dubey (BSE)",
      "Dr Urvashi Bhansal (ECE)"
    ],
    "poc": [
      {
        "name": "Ribhu",
        "phone": "+91 98913 52828",
        "email": "shakesjeer.nsut@gmail.com"
      }
    ],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 33
  },
  {
    "id": "axiom",
    "name": "Axiom",
    "tagline": "PHILOSPHICAL SOCIETY",
    "category": "Literary Society",
    "logo": "/logos/axiom.jpeg",
    "about": "Exploring philosophy, ethics, logic, and critical thinking through discussions, debates, and intellectual inquiry. Encouraging meaningful conversations that challenge perspectives and inspire thoughtful reasoning.",
    "whyJoin": "Engage in thought-provoking discussions, sharpen analytical thinking, and explore timeless philosophical ideas with curious minds.",
    "annualEvent": "Axiom Day",
    "instagram": "axiomnsut",
    "faculty": [
      "Dr Shilpa Sharma (BSE)",
      "Dr Umer Ashraf (ECE)",
      "Dr Amita Jain (ECE-E)",
      "Dr Ankur Gupta (CSE)",
      "Dr Vivek Mehta (CSE)"
    ],
    "poc": [
      {
        "name": "Bhavishya",
        "phone": "+91 92054 04959"
      }
    ],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 34
  },
  {
    "id": "antarmann",
    "name": "Antarmann",
    "tagline": "Express. Emotion. Evolve.",
    "category": "Mental Health Society",
    "logo": "/logos/antarmann.jpeg",
    "about": "Fostering mental well-being, empathy, and open conversations surrounding student mental health on campus.",
    "whyJoin": "Promote psychological wellness, organize interactive peer-support sessions, and lead mindful campus drives.",
    "annualEvent": "World Mental Health Day",
    "instagram": "antarmann.nsut",
    "poc": [
      {
        "name": "Ritul",
        "phone": "+91 98176 85996",
        "email": "ritul.ma25@nsut.ac.in"
      },
      {
        "name": "Echita",
        "phone": "+91 98107 93911",
        "email": "ritul.ma25@nsut.ac.in"
      }
    ],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 35
  },
  {
    "id": "asme-nsut",
    "name": "ASME NSUT",
    "tagline": "Design. Build. Innovate.",
    "category": "Technical Society",
    "logo": "/logos/asme-nsut.jpeg",
    "about": "Empowering mechanical design, thermal systems, and robotics fabrication through practical engineering.",
    "whyJoin": "Build real mechanical prototypes, master CAD modeling software, and represent NSUT in ASME international challenges.",
    "annualEvent": "ASME India EFx",
    "instagram": "asme.nsut",
    "faculty": [
      "Dr Vivek Kumar (Mech)",
      "Dr Shashi Prakask (Mech)",
      "Dr Vinay Panwar (Mech)",
      "Dr Simran Jeet Singh (Mech)"
    ],
    "poc": [
      {
        "name": "Gautam Jain",
        "phone": "+91 9289489393",
        "email": "asme@nsut.ac.in"
      }
    ],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 36
  },
  {
    "id": "indian-game-theory-society",
    "name": "Indian Game Theory Society",
    "tagline": "Gaming Society",
    "category": "Gaming Society",
    "logo": "/logos/indian-game-theory-society.jpeg",
    "about": "Bringing together gaming enthusiasts through esports tournaments, strategy games, and interactive community events. Promoting teamwork, competitive spirit, and strategic thinking.",
    "whyJoin": "Compete in exciting gaming tournaments, sharpen your strategic skills, and connect with a vibrant gaming community.",
    "instagram": "igts_nsut",
    "faculty": [
      "Dr Preeti Kaur (CSE)",
      "Dr Salini Rosaline Tharayil (Mgt)",
      "Dr Vikas Maheshkar (IT)"
    ],
    "poc": [
      {
        "name": "MANISH",
        "phone": "+91 78272 23740",
        "email": "igts@nsut.ac.in"
      }
    ],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 37
  },
  {
    "id": "dhirah",
    "name": "Dhirah",
    "tagline": "Spiritual Society",
    "category": "Spiritual Society",
    "logo": "/logos/dhirah.jpeg",
    "about": "Promoting spiritual growth through mindfulness, self-discovery, and meaningful discussions. Inspiring students to cultivate inner peace, purpose, and holistic well-being.",
    "whyJoin": "Embark on a journey of self-discovery while exploring spirituality, mindfulness, and personal growth.",
    "annualEvent": "Mind your Mind",
    "instagram": "dhirah.nsut",
    "faculty": [
      "Dr. Kunwar Singh",
      "Dr. Ankit Kumar Singh"
    ],
    "poc": [
      {
        "name": "Abhigyan Kumar Roy",
        "phone": "+91 87003 02661",
        "email": "dhirah.society@nsut.ac.in"
      }
    ],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 38
  },
  {
    "id": "d-code-nsut",
    "name": "D'Code NSUT",
    "tagline": "Code. Debug. Innovate.",
    "category": "Technical Society",
    "logo": "/logos/d-code-nsut.jpeg",
    "about": "Cultivating competitive programming excellence and algorithmic problem-solving across global platforms.",
    "whyJoin": "Master advanced DSA, crack contest platforms like Codeforces, and train for ICPC achievement.",
    "annualEvent": "Oblivion",
    "instagram": "dcode_nsut",
    "faculty": [
      "Dr Vijay Kumar Bohat (CSE)",
      "Dr Nisha Kandhaul (IT)"
    ],
    "poc": [
      {
        "name": "Kehkasha",
        "phone": "88606 96495"
      },
      {
        "name": "Kartik",
        "phone": "93107 36224"
      }
    ],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 39
  },
  {
    "id": "finsoc-nsut",
    "name": "FinSoc NSUT",
    "tagline": "The Financial Literacy Hub.",
    "category": "Finance Society",
    "logo": "/logos/finsoc-nsut.jpeg",
    "about": "Bridging theoretical economics with real-world corporate finance and investment banking skills.",
    "whyJoin": "Participate in virtual stock trading competitions, corporate valuation, and finance bootcamps.",
    "annualEvent": "Finance Week",
    "instagram": "finsoc.nsut",
    "poc": [
      {
        "name": "Daksh sharma",
        "phone": "84472 60788"
      }
    ],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 40
  },
  {
    "id": "vajra",
    "name": "Vajra",
    "tagline": "The Self-Defense & Martial Arts Club.",
    "category": "Sports Society",
    "logo": "/logos/vajra.jpeg",
    "about": "Teaching self-defense techniques, physical fitness, combat conditioning, and martial arts discipline.",
    "whyJoin": "Master practical self-defense maneuvers, improve physical stamina, and build mental focus.",
    "annualEvent": "Duncan Challenge",
    "instagram": "vajra.nsut",
    "faculty": [
      "Dr Akansha Kulshreshtha (BSE)",
      "Dr Sanyam Bahga (Archi-W)",
      "Dr Nazrul Islam (MEEV)",
      "Dr Rajshree Newar (Chem M)",
      "Dr Juhi Raghuvanshi (Mgt)",
      "Dr Vineet Kumar (M)",
      "Dr Devender Singh (Chem M)"
    ],
    "poc": [
      {
        "name": "Tarun",
        "phone": "98680 50488"
      }
    ],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 41
  },
  {
    "id": "prayas",
    "name": "Prayas",
    "tagline": "Educating Underserved Children.",
    "category": "Social Initiative",
    "logo": "/logos/prayas.jpeg",
    "about": "Providing free after-school academic tutoring and life-skills mentoring to underprivileged children near campus.",
    "whyJoin": "Teach elementary subjects, organize child joy events, and directly mentor young students in need.",
    "annualEvent": "KRITI",
    "instagram": "prayas.nsut",
    "faculty": [
      "Dr. Sujata Sengar"
    ],
    "poc": [
      {
        "name": "Aditya Singla",
        "phone": "+91 70155 72858",
        "email": "prayas.nsit@gmail.com"
      }
    ],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 42
  },
  {
    "id": "humanica",
    "name": "Humanica",
    "tagline": "The HR & Soft Skills Society.",
    "category": "Management Society",
    "logo": "/logos/humanica.jpeg",
    "about": "Developing interpersonal communication, organizational behavior, and human resource management skills.",
    "whyJoin": "Hone leadership soft skills, master corporate negotiation, and excel in group discussion rounds.",
    "instagram": "humanica.nsut",
    "faculty": [
      "Dr Salini Rosaline Tharayil (Mgt)",
      "Dr Swapnil Laxman Sonawane (chem)"
    ],
    "poc": [
      {
        "name": "Yashdeep",
        "phone": "+91 94163 28007"
      },
      {
        "name": "Divyansh",
        "phone": "+91 85955 58067"
      }
    ],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 43
  },
  {
    "id": "markstreet",
    "name": "Markstreet",
    "tagline": "The Marketing Society of NSUT.",
    "category": "Marketing Society",
    "logo": "/logos/markstreet.jpeg",
    "about": "Exploring brand strategy, digital marketing campaigns, consumer psychology, and market growth tactics.",
    "whyJoin": "Execute real digital marketing campaigns, master growth hacking, and craft brand strategies.",
    "annualEvent": "The great brand hunt",
    "instagram": "markstreet.nsut",
    "faculty": [
      "Dr Dinesh Kumar (Mgt)",
      "Dr Parul Manchanda"
    ],
    "poc": [
      {
        "name": "Punya Malhotra",
        "phone": "+91 81788 88725",
        "email": "markstreet.society@nsut.ac.in"
      }
    ],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 44
  },
  {
    "id": "nss-nsut",
    "name": "NSS NSUT",
    "tagline": "Not Me But You.",
    "category": "Social Service",
    "logo": "/logos/nss-nsut.jpeg",
    "about": "Organizing blood donation drives, health camps, literacy campaigns, and community service initiatives.",
    "whyJoin": "Earn official NSS service credits, lead community outreach, and drive social change.",
    "instagram": "nssnsutcell",
    "faculty": [
      "Dr Praveen Siroha (PE)",
      "Dr Anurag Gaur (Physics/PD)",
      "Guided by NSS"
    ],
    "poc": [
      {
        "name": "Prem",
        "phone": "96502 44501"
      }
    ],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 45
  },
  {
    "id": "bullet-hawk-racing-bhr",
    "name": "Bullet Hawk Racing (BHR)",
    "tagline": "Engineering Speed.",
    "category": "Automotive Society",
    "logo": "/logos/bullet-hawk-racing-bhr.jpeg",
    "about": "Designing and fabricating Formula Student combustion race cars for speed, endurance, and track racing.",
    "whyJoin": "Design and build a real Formula combustion race car from scratch and compete at Formula Student India.",
    "instagram": "bullethawk_racing",
    "faculty": [
      "Dr Andriya Narasimhulu (ME)",
      "Mr Manish (WC MPAE/Mech)",
      "Dr Narendra Kumar (MPAE/Mech)",
      "Dr Simran Jeet Singh (Mech)"
    ],
    "poc": [],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 46
  },
  {
    "id": "spic-macay-nsut-chapter",
    "name": "SPIC MACAY NSUT Chapter",
    "tagline": "Promoting Indian Classical Music & Culture.",
    "category": "Cultural Society",
    "logo": "/logos/spic-macay-nsut-chapter.jpeg",
    "about": "Hosting legendary maestros of Indian classical music, dance, folk arts, and heritage concerts on campus.",
    "whyJoin": "Interact directly with Padma awardee classical artists, organize heritage baithaks, and promote Indian arts.",
    "instagram": "spic.macay.nsut",
    "poc": [
      {
        "name": "Kajal",
        "phone": "78270 44075"
      }
    ],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 47
  },
  {
    "id": "shatranj",
    "name": "Shatranj",
    "tagline": "The Chess Club of NSUT.",
    "category": "Sports Society",
    "logo": "/logos/shatranj.jpeg",
    "about": "Fostering chess tactics, grandmaster analysis, blitz tournaments, and tactical depth on campus.",
    "whyJoin": "Compete in FIDE-rated inter-college tournaments, solve endgame puzzles, and boost Elo ratings.",
    "instagram": "nsut_chess_club",
    "faculty": [
      "Dr. Parveen Siroha",
      "Dr. Pargin Bangotra",
      "Mr. Ajay Kataria",
      "Dr. Sushmita Yadav",
      "Dr. Astitva Kumar"
    ],
    "poc": [
      {
        "name": "Diya joshi",
        "phone": "+91 90450 80617"
      },
      {
        "name": "Aditya",
        "phone": "+91 98739 51766"
      }
    ],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 48
  },
  {
    "id": "cdf-nsut-chapter",
    "name": "CDF NSUT Chapter",
    "tagline": "Connecting Dreams Foundation.",
    "category": "Social Society",
    "logo": "/logos/cdf-nsut-chapter.jpeg",
    "about": "Empowering underprivileged communities through sustainable development models and youth leadership.",
    "whyJoin": "Lead grassroots social projects, drive community education, and make real measurable impact.",
    "instagram": "cdf_nsut",
    "poc": [],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 49
  },
  {
    "id": "tatsam",
    "name": "Tatsam",
    "tagline": "The Hindi Literary & Debating Society.",
    "category": "Literary Society",
    "logo": "/logos/tatsam.jpeg",
    "about": "Promoting pure Hindi parliamentary debating, essay writing, poetry recitations, and youth discussions.",
    "whyJoin": "Compete in premier Hindi Parliamentary Debates across India and refine public speaking eloquence.",
    "annualEvent": "Raabta",
    "instagram": "tatsam.nsut",
    "faculty": [
      "Dr Nancy (Chem)",
      "Dr Jugal Bori (Chem)",
      "Dr Akhilesh Dubey (Biotech)",
      "Dr Samiksha Dabasi (Phy)"
    ],
    "poc": [
      {
        "name": "Sunny Sharma",
        "phone": "+91 93898 47523",
        "email": "tatsam@nsut.ac.in"
      }
    ],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 50
  },
  {
    "id": "team-kalpana",
    "name": "Team Kalpana",
    "tagline": "Imagine. Engineer. Fly.",
    "category": "Aerospace Society",
    "logo": "/logos/team-kalpana.jpeg",
    "about": "Designing, building, and flying high-altitude RC aircraft and unmanned aerial vehicles for national events.",
    "whyJoin": "Master aerodynamics, composite materials, and flight telemetry while fabricating real functional RC airplanes.",
    "instagram": "teamkalpanansut",
    "faculty": [
      "Dr Shweta Gautam (ECE)",
      "Dr Jehova Jire L. Hmar (PHY)"
    ],
    "poc": [
      {
        "name": "Jaindrashy",
        "phone": "+91 88399 32216"
      },
      {
        "name": "Jayant",
        "phone": "+91 85957 72382"
      }
    ],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 51
  },
  {
    "id": "the-nsut-quiz-club",
    "name": "The NSUT Quiz Club",
    "tagline": "Trivia, Knowledge & Curiosity.",
    "category": "Literary Society",
    "logo": "/logos/the-nsut-quiz-club.jpeg",
    "about": "Testing general knowledge across pop culture, history, science, sports, and business trivia circuit.",
    "whyJoin": "Compete in high-stakes inter-college quizzes, sharpen lateral thinking, and win cash prizes.",
    "instagram": "nsut_qc",
    "faculty": [
      "Dr Jyotsna Singh (ECE)",
      "Dr Sumita Dahiya (maths)",
      "Dr Shivam Kumar Singh (maths)"
    ],
    "poc": [
      {
        "name": "Eric",
        "phone": "+91 88510 48483",
        "email": "quizclub.society@nsut.ac.in"
      }
    ],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 52
  },
  {
    "id": "asn-algorithm-society-of-nsut",
    "name": "ASN (Algorithm Society of NSUT)",
    "tagline": "Think. Solve. Optimize.",
    "category": "Technical Society",
    "logo": "/logos/asn-algorithm-society-of-nsut.jpeg",
    "about": "Unraveling complex data structures, graph theory, and algorithmic optimization for problem solvers.",
    "whyJoin": "Sharpen core DSA problem-solving techniques, optimize time complexity, and excel in technical interviews.",
    "instagram": "asn.nsut",
    "faculty": [
      "Dr Mohit Sajwan (IT)",
      "Dr Sanya Anees (ECE)",
      "Dr Ankur Gupta (CSE)"
    ],
    "poc": [
      {
        "name": "Deepak",
        "phone": "820 981 5244"
      },
      {
        "name": "Harshit",
        "phone": "99715 08931"
      }
    ],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 53
  },
  {
    "id": "yuva",
    "name": "YUVA",
    "tagline": "Youth Empowerment & Nation Building.",
    "category": "Youth Movement",
    "logo": "/logos/yuva.jpeg",
    "about": "Channeling youth energy toward nation-building, social ethics, policy awareness, and civic duty.",
    "whyJoin": "Engage in youth policy parliament discussions, national social drives, and leadership conventions.",
    "annualEvent": "YUVA KUMBH",
    "instagram": "yuva.nsut",
    "poc": [],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 54
  },
  {
    "id": "solar-and-electric-driven-systems-seds",
    "name": "Solar and Electric Driven Systems (SEDS)",
    "tagline": "Automotives Society",
    "category": "Automotive Society",
    "logo": null,
    "about": "Building sustainable solar and electric mobility solutions through innovation, engineering, and hands-on vehicle development.",
    "whyJoin": "Gain practical EV and solar technology experience while developing vehicles for national competitions.",
    "instagram": null,
    "faculty": [
      "Dr Vinay Panwar (Mech)",
      "Dr Geetanjali Rathi (CSE)",
      "Dr V.S.K.V. Harish (EE)",
      "Dr Nazrul Islam (MEEV)",
      "Dr. Anjanee Kumar Mishra (MEEV and EE)"
    ],
    "poc": [],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 55
  },
  {
    "id": "bio-wings",
    "name": "Bio Wings",
    "tagline": "Innovating Biological Sciences.",
    "category": "Biotech Society",
    "logo": "/logos/bio-wings.jpeg",
    "about": "Advancing biotechnology research, bioinformatics, and biomedical innovation among engineering students.",
    "whyJoin": "Explore computational biology, lab research techniques, and healthcare technology projects.",
    "instagram": "biowings.nsut",
    "poc": [],
    "recruitment": {
      "status": null,
      "openRoles": [],
      "deadline": null,
      "criteria": []
    },
    "source": "NSUT Society Orientation 2026",
    "page": 56
  }
];
