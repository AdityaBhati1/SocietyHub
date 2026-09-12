/**
 * Official NSUT Societies Recruitment Dataset (54 Societies)
 *
 * NOTE: PROTOTYPE / DEMO DATA
 * All recruitment records, dates, stages, and roles are sample data
 * created to demonstrate the SocietyHub Recruitment Radar lifecycle.
 */

export const RECRUITMENT_STATUSES = {
  open: {
    id: 'open',
    label: 'Applications Open',
    shortLabel: 'Open',
    group: 'recruiting_now',
    color: 'var(--color-accent)',
    bg: 'var(--color-accent-soft)',
    border: 'var(--color-accent)',
    dotClass: 'bg-[var(--color-accent)] animate-pulse',
    badgeClass: 'bg-[var(--color-accent-soft)] text-[var(--color-accent)] border border-[var(--color-accent)]/30',
  },
  closing_soon: {
    id: 'closing_soon',
    label: 'Closing Soon',
    shortLabel: 'Closing Soon',
    group: 'recruiting_now',
    color: 'var(--color-warm-red)',
    bg: 'var(--color-warm-red-subtle)',
    border: 'var(--color-warm-red)',
    dotClass: 'bg-[var(--color-warm-red)] animate-pulse',
    badgeClass: 'bg-[var(--color-warm-red-subtle)] text-[var(--color-warm-red)] border border-[var(--color-warm-red)]/30',
  },
  upcoming: {
    id: 'upcoming',
    label: 'Opening Soon',
    shortLabel: 'Upcoming',
    group: 'opening_soon',
    color: 'var(--color-dusty-blue)',
    bg: 'var(--color-dusty-blue-subtle)',
    border: 'var(--color-dusty-blue)',
    dotClass: 'bg-[var(--color-dusty-blue)]',
    badgeClass: 'bg-[var(--color-dusty-blue-subtle)] text-[var(--color-dusty-blue)] border border-[var(--color-dusty-blue-border)]',
  },
  round_1: {
    id: 'round_1',
    label: 'Round 1 · Screening',
    shortLabel: 'Round 1',
    group: 'later_rounds',
    color: 'var(--color-lavender)',
    bg: 'var(--color-lavender-subtle)',
    border: 'var(--color-lavender)',
    dotClass: 'bg-[var(--color-lavender)]',
    badgeClass: 'bg-[var(--color-lavender-subtle)] text-[var(--color-lavender)] border border-[var(--color-lavender)]/30',
  },
  round_2: {
    id: 'round_2',
    label: 'Round 2 · Practical Tasks',
    shortLabel: 'Round 2',
    group: 'later_rounds',
    color: 'var(--color-peach)',
    bg: 'var(--color-peach-subtle)',
    border: 'var(--color-peach)',
    dotClass: 'bg-[var(--color-peach)]',
    badgeClass: 'bg-[var(--color-peach-subtle)] text-[var(--color-peach)] border border-[var(--color-peach)]/30',
  },
  interviews: {
    id: 'interviews',
    label: 'Interviews in Progress',
    shortLabel: 'Interviews',
    group: 'later_rounds',
    color: 'var(--color-warm-red)',
    bg: 'var(--color-warm-red-subtle)',
    border: 'var(--color-warm-red)',
    dotClass: 'bg-[var(--color-warm-red)]',
    badgeClass: 'bg-[var(--color-warm-red-subtle)] text-[var(--color-warm-red)] border border-[var(--color-warm-red)]/30',
  },
  results: {
    id: 'results',
    label: 'Results Announced',
    shortLabel: 'Results',
    group: 'closed_completed',
    color: 'var(--color-accent)',
    bg: 'var(--color-accent-subtle)',
    border: 'var(--color-accent)',
    dotClass: 'bg-[var(--color-accent)]',
    badgeClass: 'bg-[var(--color-accent-subtle)] text-[var(--color-accent)] border border-[var(--color-accent)]/30',
  },
  closed: {
    id: 'closed',
    label: 'Recruitment Closed',
    shortLabel: 'Closed',
    group: 'closed_completed',
    color: 'var(--color-text-tertiary)',
    bg: 'var(--color-surface-secondary)',
    border: 'var(--color-border)',
    dotClass: 'bg-[var(--color-text-tertiary)]',
    badgeClass: 'bg-[var(--color-surface-secondary)] text-[var(--color-text-secondary)] border border-[var(--color-border)]',
  },
};

export const RECRUITMENT_FILTER_TABS = [
  { id: 'all', label: 'All Statuses' },
  { id: 'open', label: 'Open Now' },
  { id: 'closing_soon', label: 'Closing Soon' },
  { id: 'upcoming', label: 'Opening Soon' },
  { id: 'round_1', label: 'Round 1' },
  { id: 'round_2', label: 'Round 2' },
  { id: 'interviews', label: 'Interviews' },
  { id: 'results', label: 'Results' },
  { id: 'closed', label: 'Closed' },
];

export const recruitment = [
  {
    "societyId": "crosslinks",
    "societyName": "Crosslinks",
    "category": "PR Society",
    "status": "open",
    "isDemo": true,
    "openingDate": "10 Sep 2026",
    "deadline": "24 Sep 2026",
    "relativeDeadline": "Closes in 6 days",
    "currentStage": "Online Applications Open",
    "activeStageIndex": 0,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "General Operations",
      "Media & PR Coordinator",
      "Technical Associate",
      "Event Manager"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "Shortlisted candidates will be invited for online technical review.",
    "resultDate": "12 Oct 2026",
    "notes": "Review required technical and portfolio links before submitting your application.",
    "applicationUrl": "#demo-apply"
  },
  {
    "societyId": "enactus-nsut",
    "societyName": "Enactus NSUT",
    "category": "Social Entrepreneurship",
    "status": "open",
    "isDemo": true,
    "openingDate": "10 Sep 2026",
    "deadline": "24 Sep 2026",
    "relativeDeadline": "Closes in 6 days",
    "currentStage": "Online Applications Open",
    "activeStageIndex": 0,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "Community Project Lead",
      "Field Operations & Outreach",
      "Fundraising & Grants",
      "Volunteer Management"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "Shortlisted candidates will be invited for online technical review.",
    "resultDate": "12 Oct 2026",
    "notes": "Review required technical and portfolio links before submitting your application.",
    "applicationUrl": "#demo-apply"
  },
  {
    "societyId": "180-degrees-consulting-nsut",
    "societyName": "180 Degrees Consulting NSUT",
    "category": "Consulting Society",
    "status": "closing_soon",
    "isDemo": true,
    "openingDate": "08 Sep 2026",
    "deadline": "19 Sep 2026",
    "relativeDeadline": "Closes in 2 days",
    "currentStage": "Final Hours for Applications",
    "activeStageIndex": 0,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "Equity Research",
      "Management Consulting",
      "Financial Modeling",
      "Corporate Outreach"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "Interviews commence next weekend at Admin Block / Virtual meet.",
    "resultDate": "08 Oct 2026",
    "notes": "Portals close promptly at 11:59 PM. Late submissions are strictly discarded.",
    "applicationUrl": "#demo-apply"
  },
  {
    "societyId": "ashwamedh-stage",
    "societyName": "Ashwamedh Stage",
    "category": "Cultural Society",
    "status": "upcoming",
    "isDemo": true,
    "openingDate": "28 Sep 2026",
    "deadline": "12 Oct 2026",
    "relativeDeadline": "Opens in 5 days",
    "currentStage": "Applications Opening Soon",
    "activeStageIndex": 0,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "Stage Acting",
      "Vocalist / Instrumentalist",
      "Choreography",
      "Production & Logistics"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "Orientation deck and prompt teaser will release on Instagram handle.",
    "resultDate": "24 Oct 2026",
    "notes": "Follow announcements on Instagram for problem statement drops.",
    "applicationUrl": "#demo-apply"
  },
  {
    "societyId": "ashwamedh-street",
    "societyName": "Ashwamedh Street",
    "category": "Cultural Society",
    "status": "upcoming",
    "isDemo": true,
    "openingDate": "28 Sep 2026",
    "deadline": "12 Oct 2026",
    "relativeDeadline": "Opens in 5 days",
    "currentStage": "Applications Opening Soon",
    "activeStageIndex": 0,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "Stage Acting",
      "Vocalist / Instrumentalist",
      "Choreography",
      "Production & Logistics"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "Orientation deck and prompt teaser will release on Instagram handle.",
    "resultDate": "24 Oct 2026",
    "notes": "Follow announcements on Instagram for problem statement drops.",
    "applicationUrl": "#demo-apply"
  },
  {
    "societyId": "finance-and-economics-society",
    "societyName": "Finance and Economics Society",
    "category": "Finance Society",
    "status": "round_1",
    "isDemo": true,
    "openingDate": "01 Sep 2026",
    "deadline": "15 Sep 2026",
    "relativeDeadline": "Round 1 Active",
    "currentStage": "Round 1: Screening & Task Evaluation",
    "activeStageIndex": 1,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "Equity Research",
      "Management Consulting",
      "Financial Modeling",
      "Corporate Outreach"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "Offline aptitude and written ideation round scheduled at APJ Complex.",
    "resultDate": "05 Oct 2026",
    "notes": "Check your registered college email for assignment submission links.",
    "applicationUrl": "#demo-apply"
  },
  {
    "societyId": "devcomm-nsut",
    "societyName": "DevComm NSUT",
    "category": "Technical Society",
    "status": "round_2",
    "isDemo": true,
    "openingDate": "28 Aug 2026",
    "deadline": "10 Sep 2026",
    "relativeDeadline": "Round 2 in Progress",
    "currentStage": "Round 2: Practical Hack & Group Discussion",
    "activeStageIndex": 2,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "Frontend Dev (React)",
      "Backend & APIs (Node/Go)",
      "Machine Learning / AI",
      "DevOps & Systems"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "Group case presentation in Smart Classrooms, Block 4.",
    "resultDate": "02 Oct 2026",
    "notes": "Teams/slots will be allotted 24 hours prior via WhatsApp broadcast.",
    "applicationUrl": "#demo-apply"
  },
  {
    "societyId": "the-debugging-society",
    "societyName": "The Debugging Society",
    "category": "Technical Society",
    "status": "interviews",
    "isDemo": true,
    "openingDate": "25 Aug 2026",
    "deadline": "08 Sep 2026",
    "relativeDeadline": "Interviews Underway",
    "currentStage": "Personal & Technical Panel Interviews",
    "activeStageIndex": 3,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "Frontend Dev (React)",
      "Backend & APIs (Node/Go)",
      "Machine Learning / AI",
      "DevOps & Systems"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "One-on-one panel interviews with senior council and faculty advisors.",
    "resultDate": "28 Sep 2026",
    "notes": "Dress code: smart casuals. Carry hard copies of your CV / design portfolio.",
    "applicationUrl": "#demo-apply"
  },
  {
    "societyId": "ieee-nsut",
    "societyName": "IEEE NSUT",
    "category": "Technical Society",
    "status": "results",
    "isDemo": true,
    "openingDate": "15 Aug 2026",
    "deadline": "01 Sep 2026",
    "relativeDeadline": "Results Announced",
    "currentStage": "Selection List Published",
    "activeStageIndex": 4,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "Frontend Dev (React)",
      "Backend & APIs (Node/Go)",
      "Machine Learning / AI",
      "DevOps & Systems"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "All rounds concluded.",
    "resultDate": "15 Sep 2026",
    "notes": "Congratulations to all newly inducted members! Onboarding begins next week.",
    "applicationUrl": "#demo-apply"
  },
  {
    "societyId": "ecell-nsut",
    "societyName": "ECell NSUT",
    "category": "Entrepreneurship",
    "status": "closed",
    "isDemo": true,
    "openingDate": "10 Aug 2026",
    "deadline": "25 Aug 2026",
    "relativeDeadline": "Recruitment Concluded",
    "currentStage": "Cohort Finalized for 2026-27",
    "activeStageIndex": 5,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "Startup Incubation Analyst",
      "Venture Capital Liaison",
      "Product Management",
      "Pitch Deck Design"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "Recruitment drive closed.",
    "resultDate": "05 Sep 2026",
    "notes": "Next campus recruitment cycle will open during Monsoon Semester 2027.",
    "applicationUrl": "#demo-apply"
  },
  {
    "societyId": "crescendo",
    "societyName": "Crescendo",
    "category": "Cultural Society",
    "status": "closed",
    "isDemo": true,
    "openingDate": "10 Aug 2026",
    "deadline": "25 Aug 2026",
    "relativeDeadline": "Recruitment Concluded",
    "currentStage": "Cohort Finalized for 2026-27",
    "activeStageIndex": 5,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "Stage Acting",
      "Vocalist / Instrumentalist",
      "Choreography",
      "Production & Logistics"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "Recruitment drive closed.",
    "resultDate": "05 Sep 2026",
    "notes": "Next campus recruitment cycle will open during Monsoon Semester 2027.",
    "applicationUrl": "#demo-apply"
  },
  {
    "societyId": "mirage",
    "societyName": "Mirage",
    "category": "Cultural Society",
    "status": "closed",
    "isDemo": true,
    "openingDate": "10 Aug 2026",
    "deadline": "25 Aug 2026",
    "relativeDeadline": "Recruitment Concluded",
    "currentStage": "Cohort Finalized for 2026-27",
    "activeStageIndex": 5,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "Stage Acting",
      "Vocalist / Instrumentalist",
      "Choreography",
      "Production & Logistics"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "Recruitment drive closed.",
    "resultDate": "05 Sep 2026",
    "notes": "Next campus recruitment cycle will open during Monsoon Semester 2027.",
    "applicationUrl": "#demo-apply"
  },
  {
    "societyId": "junoon",
    "societyName": "Junoon",
    "category": "Media Society",
    "status": "open",
    "isDemo": true,
    "openingDate": "10 Sep 2026",
    "deadline": "24 Sep 2026",
    "relativeDeadline": "Closes in 6 days",
    "currentStage": "Online Applications Open",
    "activeStageIndex": 0,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "UI/UX Design",
      "Motion Graphics & 3D",
      "Cinematography & Photo",
      "Brand Strategy"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "Shortlisted candidates will be invited for online technical review.",
    "resultDate": "12 Oct 2026",
    "notes": "Review required technical and portfolio links before submitting your application.",
    "applicationUrl": "#demo-apply"
  },
  {
    "societyId": "rotaract-nsut",
    "societyName": "Rotaract NSUT",
    "category": "Service Club",
    "status": "open",
    "isDemo": true,
    "openingDate": "10 Sep 2026",
    "deadline": "24 Sep 2026",
    "relativeDeadline": "Closes in 6 days",
    "currentStage": "Online Applications Open",
    "activeStageIndex": 0,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "General Operations",
      "Media & PR Coordinator",
      "Technical Associate",
      "Event Manager"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "Shortlisted candidates will be invited for online technical review.",
    "resultDate": "12 Oct 2026",
    "notes": "Review required technical and portfolio links before submitting your application.",
    "applicationUrl": "#demo-apply"
  },
  {
    "societyId": "nakshatra",
    "societyName": "Nakshatra",
    "category": "Astronomy Society",
    "status": "closing_soon",
    "isDemo": true,
    "openingDate": "08 Sep 2026",
    "deadline": "19 Sep 2026",
    "relativeDeadline": "Closes in 2 days",
    "currentStage": "Final Hours for Applications",
    "activeStageIndex": 0,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "General Operations",
      "Media & PR Coordinator",
      "Technical Associate",
      "Event Manager"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "Interviews commence next weekend at Admin Block / Virtual meet.",
    "resultDate": "08 Oct 2026",
    "notes": "Portals close promptly at 11:59 PM. Late submissions are strictly discarded.",
    "applicationUrl": "#demo-apply"
  },
  {
    "societyId": "ares-robotics",
    "societyName": "ARES Robotics",
    "category": "Technical Society",
    "status": "upcoming",
    "isDemo": true,
    "openingDate": "28 Sep 2026",
    "deadline": "12 Oct 2026",
    "relativeDeadline": "Opens in 5 days",
    "currentStage": "Applications Opening Soon",
    "activeStageIndex": 0,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "Frontend Dev (React)",
      "Backend & APIs (Node/Go)",
      "Machine Learning / AI",
      "DevOps & Systems"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "Orientation deck and prompt teaser will release on Instagram handle.",
    "resultDate": "24 Oct 2026",
    "notes": "Follow announcements on Instagram for problem statement drops.",
    "applicationUrl": "#demo-apply"
  },
  {
    "societyId": "team-daedalus-racing-tdr",
    "societyName": "Team Daedalus Racing (TDR)",
    "category": "Technical Society",
    "status": "upcoming",
    "isDemo": true,
    "openingDate": "28 Sep 2026",
    "deadline": "12 Oct 2026",
    "relativeDeadline": "Opens in 5 days",
    "currentStage": "Applications Opening Soon",
    "activeStageIndex": 0,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "Frontend Dev (React)",
      "Backend & APIs (Node/Go)",
      "Machine Learning / AI",
      "DevOps & Systems"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "Orientation deck and prompt teaser will release on Instagram handle.",
    "resultDate": "24 Oct 2026",
    "notes": "Follow announcements on Instagram for problem statement drops.",
    "applicationUrl": "#demo-apply"
  },
  {
    "societyId": "capella",
    "societyName": "Capella",
    "category": "Cultural Society",
    "status": "round_1",
    "isDemo": true,
    "openingDate": "01 Sep 2026",
    "deadline": "15 Sep 2026",
    "relativeDeadline": "Round 1 Active",
    "currentStage": "Round 1: Screening & Task Evaluation",
    "activeStageIndex": 1,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "Stage Acting",
      "Vocalist / Instrumentalist",
      "Choreography",
      "Production & Logistics"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "Offline aptitude and written ideation round scheduled at APJ Complex.",
    "resultDate": "05 Oct 2026",
    "notes": "Check your registered college email for assignment submission links.",
    "applicationUrl": "#demo-apply"
  },
  {
    "societyId": "alliance",
    "societyName": "Alliance",
    "category": "Media Society",
    "status": "round_2",
    "isDemo": true,
    "openingDate": "28 Aug 2026",
    "deadline": "10 Sep 2026",
    "relativeDeadline": "Round 2 in Progress",
    "currentStage": "Round 2: Practical Hack & Group Discussion",
    "activeStageIndex": 2,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "UI/UX Design",
      "Motion Graphics & 3D",
      "Cinematography & Photo",
      "Brand Strategy"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "Group case presentation in Smart Classrooms, Block 4.",
    "resultDate": "02 Oct 2026",
    "notes": "Teams/slots will be allotted 24 hours prior via WhatsApp broadcast.",
    "applicationUrl": "#demo-apply"
  },
  {
    "societyId": "subhasha",
    "societyName": "Subhasha",
    "category": "Literary Society",
    "status": "interviews",
    "isDemo": true,
    "openingDate": "25 Aug 2026",
    "deadline": "08 Sep 2026",
    "relativeDeadline": "Interviews Underway",
    "currentStage": "Personal & Technical Panel Interviews",
    "activeStageIndex": 3,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "Debating (Parliamentary)",
      "Content & Editorial",
      "Creative Writing",
      "Public Speaking"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "One-on-one panel interviews with senior council and faculty advisors.",
    "resultDate": "28 Sep 2026",
    "notes": "Dress code: smart casuals. Carry hard copies of your CV / design portfolio.",
    "applicationUrl": "#demo-apply"
  },
  {
    "societyId": "debsoc",
    "societyName": "DebSoc",
    "category": "Literary Society",
    "status": "results",
    "isDemo": true,
    "openingDate": "15 Aug 2026",
    "deadline": "01 Sep 2026",
    "relativeDeadline": "Results Announced",
    "currentStage": "Selection List Published",
    "activeStageIndex": 4,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "Debating (Parliamentary)",
      "Content & Editorial",
      "Creative Writing",
      "Public Speaking"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "All rounds concluded.",
    "resultDate": "15 Sep 2026",
    "notes": "Congratulations to all newly inducted members! Onboarding begins next week.",
    "applicationUrl": "#demo-apply"
  },
  {
    "societyId": "canvas",
    "societyName": "Canvas",
    "category": "Cultural Society",
    "status": "closed",
    "isDemo": true,
    "openingDate": "10 Aug 2026",
    "deadline": "25 Aug 2026",
    "relativeDeadline": "Recruitment Concluded",
    "currentStage": "Cohort Finalized for 2026-27",
    "activeStageIndex": 5,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "Stage Acting",
      "Vocalist / Instrumentalist",
      "Choreography",
      "Production & Logistics"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "Recruitment drive closed.",
    "resultDate": "05 Sep 2026",
    "notes": "Next campus recruitment cycle will open during Monsoon Semester 2027.",
    "applicationUrl": "#demo-apply"
  },
  {
    "societyId": "clitch",
    "societyName": "Clitch",
    "category": "Fashion Society",
    "status": "closed",
    "isDemo": true,
    "openingDate": "10 Aug 2026",
    "deadline": "25 Aug 2026",
    "relativeDeadline": "Recruitment Concluded",
    "currentStage": "Cohort Finalized for 2026-27",
    "activeStageIndex": 5,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "General Operations",
      "Media & PR Coordinator",
      "Technical Associate",
      "Event Manager"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "Recruitment drive closed.",
    "resultDate": "05 Sep 2026",
    "notes": "Next campus recruitment cycle will open during Monsoon Semester 2027.",
    "applicationUrl": "#demo-apply"
  },
  {
    "societyId": "google-developer-groups-gdg-nsut",
    "societyName": "Google Developer Groups (GDG) NSUT",
    "category": "Technical Society",
    "status": "closed",
    "isDemo": true,
    "openingDate": "10 Aug 2026",
    "deadline": "25 Aug 2026",
    "relativeDeadline": "Recruitment Concluded",
    "currentStage": "Cohort Finalized for 2026-27",
    "activeStageIndex": 5,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "Frontend Dev (React)",
      "Backend & APIs (Node/Go)",
      "Machine Learning / AI",
      "DevOps & Systems"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "Recruitment drive closed.",
    "resultDate": "05 Sep 2026",
    "notes": "Next campus recruitment cycle will open during Monsoon Semester 2027.",
    "applicationUrl": "#demo-apply"
  },
  {
    "societyId": "intaglios",
    "societyName": "Intaglios",
    "category": "Design Society",
    "status": "open",
    "isDemo": true,
    "openingDate": "10 Sep 2026",
    "deadline": "24 Sep 2026",
    "relativeDeadline": "Closes in 6 days",
    "currentStage": "Online Applications Open",
    "activeStageIndex": 0,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "UI/UX Design",
      "Motion Graphics & 3D",
      "Cinematography & Photo",
      "Brand Strategy"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "Shortlisted candidates will be invited for online technical review.",
    "resultDate": "12 Oct 2026",
    "notes": "Review required technical and portfolio links before submitting your application.",
    "applicationUrl": "#demo-apply"
  },
  {
    "societyId": "ncc-nsut",
    "societyName": "NCC NSUT",
    "category": "Social Service",
    "status": "open",
    "isDemo": true,
    "openingDate": "10 Sep 2026",
    "deadline": "24 Sep 2026",
    "relativeDeadline": "Closes in 6 days",
    "currentStage": "Online Applications Open",
    "activeStageIndex": 0,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "Community Project Lead",
      "Field Operations & Outreach",
      "Fundraising & Grants",
      "Volunteer Management"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "Shortlisted candidates will be invited for online technical review.",
    "resultDate": "12 Oct 2026",
    "notes": "Review required technical and portfolio links before submitting your application.",
    "applicationUrl": "#demo-apply"
  },
  {
    "societyId": "iif-incubation-and-innovation-foundation",
    "societyName": "IIF (Incubation & Innovation Foundation)",
    "category": "Incubation Cell",
    "status": "closing_soon",
    "isDemo": true,
    "openingDate": "08 Sep 2026",
    "deadline": "19 Sep 2026",
    "relativeDeadline": "Closes in 2 days",
    "currentStage": "Final Hours for Applications",
    "activeStageIndex": 0,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "Startup Incubation Analyst",
      "Venture Capital Liaison",
      "Product Management",
      "Pitch Deck Design"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "Interviews commence next weekend at Admin Block / Virtual meet.",
    "resultDate": "08 Oct 2026",
    "notes": "Portals close promptly at 11:59 PM. Late submissions are strictly discarded.",
    "applicationUrl": "#demo-apply"
  },
  {
    "societyId": "venatus-gaming-society",
    "societyName": "Venatus Gaming Society",
    "category": "Gaming Society",
    "status": "upcoming",
    "isDemo": true,
    "openingDate": "28 Sep 2026",
    "deadline": "12 Oct 2026",
    "relativeDeadline": "Opens in 5 days",
    "currentStage": "Applications Opening Soon",
    "activeStageIndex": 0,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "Competitive Team Roster",
      "Tournament Operations",
      "Broadcast & Streaming",
      "Fitness & Tactical Strategy"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "Orientation deck and prompt teaser will release on Instagram handle.",
    "resultDate": "24 Oct 2026",
    "notes": "Follow announcements on Instagram for problem statement drops.",
    "applicationUrl": "#demo-apply"
  },
  {
    "societyId": "mudrakala",
    "societyName": "Mudrakala",
    "category": "Cultural Society",
    "status": "upcoming",
    "isDemo": true,
    "openingDate": "28 Sep 2026",
    "deadline": "12 Oct 2026",
    "relativeDeadline": "Opens in 5 days",
    "currentStage": "Applications Opening Soon",
    "activeStageIndex": 0,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "Stage Acting",
      "Vocalist / Instrumentalist",
      "Choreography",
      "Production & Logistics"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "Orientation deck and prompt teaser will release on Instagram handle.",
    "resultDate": "24 Oct 2026",
    "notes": "Follow announcements on Instagram for problem statement drops.",
    "applicationUrl": "#demo-apply"
  },
  {
    "societyId": "aagaaz",
    "societyName": "Aagaaz",
    "category": "Cultural Society",
    "status": "round_1",
    "isDemo": true,
    "openingDate": "01 Sep 2026",
    "deadline": "15 Sep 2026",
    "relativeDeadline": "Round 1 Active",
    "currentStage": "Round 1: Screening & Task Evaluation",
    "activeStageIndex": 1,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "Stage Acting",
      "Vocalist / Instrumentalist",
      "Choreography",
      "Production & Logistics"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "Offline aptitude and written ideation round scheduled at APJ Complex.",
    "resultDate": "05 Oct 2026",
    "notes": "Check your registered college email for assignment submission links.",
    "applicationUrl": "#demo-apply"
  },
  {
    "societyId": "shakesjeer",
    "societyName": "ShakesJeer",
    "category": "Literary Society",
    "status": "round_2",
    "isDemo": true,
    "openingDate": "28 Aug 2026",
    "deadline": "10 Sep 2026",
    "relativeDeadline": "Round 2 in Progress",
    "currentStage": "Round 2: Practical Hack & Group Discussion",
    "activeStageIndex": 2,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "Debating (Parliamentary)",
      "Content & Editorial",
      "Creative Writing",
      "Public Speaking"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "Group case presentation in Smart Classrooms, Block 4.",
    "resultDate": "02 Oct 2026",
    "notes": "Teams/slots will be allotted 24 hours prior via WhatsApp broadcast.",
    "applicationUrl": "#demo-apply"
  },
  {
    "societyId": "axiom",
    "societyName": "Axiom",
    "category": "Literary Society",
    "status": "interviews",
    "isDemo": true,
    "openingDate": "25 Aug 2026",
    "deadline": "08 Sep 2026",
    "relativeDeadline": "Interviews Underway",
    "currentStage": "Personal & Technical Panel Interviews",
    "activeStageIndex": 3,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "Debating (Parliamentary)",
      "Content & Editorial",
      "Creative Writing",
      "Public Speaking"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "One-on-one panel interviews with senior council and faculty advisors.",
    "resultDate": "28 Sep 2026",
    "notes": "Dress code: smart casuals. Carry hard copies of your CV / design portfolio.",
    "applicationUrl": "#demo-apply"
  },
  {
    "societyId": "antarmann",
    "societyName": "Antarmann",
    "category": "Mental Health Society",
    "status": "results",
    "isDemo": true,
    "openingDate": "15 Aug 2026",
    "deadline": "01 Sep 2026",
    "relativeDeadline": "Results Announced",
    "currentStage": "Selection List Published",
    "activeStageIndex": 4,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "General Operations",
      "Media & PR Coordinator",
      "Technical Associate",
      "Event Manager"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "All rounds concluded.",
    "resultDate": "15 Sep 2026",
    "notes": "Congratulations to all newly inducted members! Onboarding begins next week.",
    "applicationUrl": "#demo-apply"
  },
  {
    "societyId": "asme-nsut",
    "societyName": "ASME NSUT",
    "category": "Technical Society",
    "status": "closed",
    "isDemo": true,
    "openingDate": "10 Aug 2026",
    "deadline": "25 Aug 2026",
    "relativeDeadline": "Recruitment Concluded",
    "currentStage": "Cohort Finalized for 2026-27",
    "activeStageIndex": 5,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "Frontend Dev (React)",
      "Backend & APIs (Node/Go)",
      "Machine Learning / AI",
      "DevOps & Systems"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "Recruitment drive closed.",
    "resultDate": "05 Sep 2026",
    "notes": "Next campus recruitment cycle will open during Monsoon Semester 2027.",
    "applicationUrl": "#demo-apply"
  },
  {
    "societyId": "indian-game-theory-society",
    "societyName": "Indian Game Theory Society",
    "category": "Gaming Society",
    "status": "closed",
    "isDemo": true,
    "openingDate": "10 Aug 2026",
    "deadline": "25 Aug 2026",
    "relativeDeadline": "Recruitment Concluded",
    "currentStage": "Cohort Finalized for 2026-27",
    "activeStageIndex": 5,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "Competitive Team Roster",
      "Tournament Operations",
      "Broadcast & Streaming",
      "Fitness & Tactical Strategy"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "Recruitment drive closed.",
    "resultDate": "05 Sep 2026",
    "notes": "Next campus recruitment cycle will open during Monsoon Semester 2027.",
    "applicationUrl": "#demo-apply"
  },
  {
    "societyId": "dhirah",
    "societyName": "Dhirah",
    "category": "Spiritual Society",
    "status": "closed",
    "isDemo": true,
    "openingDate": "10 Aug 2026",
    "deadline": "25 Aug 2026",
    "relativeDeadline": "Recruitment Concluded",
    "currentStage": "Cohort Finalized for 2026-27",
    "activeStageIndex": 5,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "General Operations",
      "Media & PR Coordinator",
      "Technical Associate",
      "Event Manager"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "Recruitment drive closed.",
    "resultDate": "05 Sep 2026",
    "notes": "Next campus recruitment cycle will open during Monsoon Semester 2027.",
    "applicationUrl": "#demo-apply"
  },
  {
    "societyId": "d-code-nsut",
    "societyName": "D'Code NSUT",
    "category": "Technical Society",
    "status": "open",
    "isDemo": true,
    "openingDate": "10 Sep 2026",
    "deadline": "24 Sep 2026",
    "relativeDeadline": "Closes in 6 days",
    "currentStage": "Online Applications Open",
    "activeStageIndex": 0,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "Frontend Dev (React)",
      "Backend & APIs (Node/Go)",
      "Machine Learning / AI",
      "DevOps & Systems"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "Shortlisted candidates will be invited for online technical review.",
    "resultDate": "12 Oct 2026",
    "notes": "Review required technical and portfolio links before submitting your application.",
    "applicationUrl": "#demo-apply"
  },
  {
    "societyId": "finsoc-nsut",
    "societyName": "FinSoc NSUT",
    "category": "Finance Society",
    "status": "open",
    "isDemo": true,
    "openingDate": "10 Sep 2026",
    "deadline": "24 Sep 2026",
    "relativeDeadline": "Closes in 6 days",
    "currentStage": "Online Applications Open",
    "activeStageIndex": 0,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "Equity Research",
      "Management Consulting",
      "Financial Modeling",
      "Corporate Outreach"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "Shortlisted candidates will be invited for online technical review.",
    "resultDate": "12 Oct 2026",
    "notes": "Review required technical and portfolio links before submitting your application.",
    "applicationUrl": "#demo-apply"
  },
  {
    "societyId": "vajra",
    "societyName": "Vajra",
    "category": "Sports Society",
    "status": "closing_soon",
    "isDemo": true,
    "openingDate": "08 Sep 2026",
    "deadline": "19 Sep 2026",
    "relativeDeadline": "Closes in 2 days",
    "currentStage": "Final Hours for Applications",
    "activeStageIndex": 0,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "Competitive Team Roster",
      "Tournament Operations",
      "Broadcast & Streaming",
      "Fitness & Tactical Strategy"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "Interviews commence next weekend at Admin Block / Virtual meet.",
    "resultDate": "08 Oct 2026",
    "notes": "Portals close promptly at 11:59 PM. Late submissions are strictly discarded.",
    "applicationUrl": "#demo-apply"
  },
  {
    "societyId": "prayas",
    "societyName": "Prayas",
    "category": "Social Initiative",
    "status": "upcoming",
    "isDemo": true,
    "openingDate": "28 Sep 2026",
    "deadline": "12 Oct 2026",
    "relativeDeadline": "Opens in 5 days",
    "currentStage": "Applications Opening Soon",
    "activeStageIndex": 0,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "Community Project Lead",
      "Field Operations & Outreach",
      "Fundraising & Grants",
      "Volunteer Management"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "Orientation deck and prompt teaser will release on Instagram handle.",
    "resultDate": "24 Oct 2026",
    "notes": "Follow announcements on Instagram for problem statement drops.",
    "applicationUrl": "#demo-apply"
  },
  {
    "societyId": "humanica",
    "societyName": "Humanica",
    "category": "Management Society",
    "status": "upcoming",
    "isDemo": true,
    "openingDate": "28 Sep 2026",
    "deadline": "12 Oct 2026",
    "relativeDeadline": "Opens in 5 days",
    "currentStage": "Applications Opening Soon",
    "activeStageIndex": 0,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "General Operations",
      "Media & PR Coordinator",
      "Technical Associate",
      "Event Manager"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "Orientation deck and prompt teaser will release on Instagram handle.",
    "resultDate": "24 Oct 2026",
    "notes": "Follow announcements on Instagram for problem statement drops.",
    "applicationUrl": "#demo-apply"
  },
  {
    "societyId": "markstreet",
    "societyName": "Markstreet",
    "category": "Marketing Society",
    "status": "round_1",
    "isDemo": true,
    "openingDate": "01 Sep 2026",
    "deadline": "15 Sep 2026",
    "relativeDeadline": "Round 1 Active",
    "currentStage": "Round 1: Screening & Task Evaluation",
    "activeStageIndex": 1,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "General Operations",
      "Media & PR Coordinator",
      "Technical Associate",
      "Event Manager"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "Offline aptitude and written ideation round scheduled at APJ Complex.",
    "resultDate": "05 Oct 2026",
    "notes": "Check your registered college email for assignment submission links.",
    "applicationUrl": "#demo-apply"
  },
  {
    "societyId": "nss-nsut",
    "societyName": "NSS NSUT",
    "category": "Social Service",
    "status": "round_2",
    "isDemo": true,
    "openingDate": "28 Aug 2026",
    "deadline": "10 Sep 2026",
    "relativeDeadline": "Round 2 in Progress",
    "currentStage": "Round 2: Practical Hack & Group Discussion",
    "activeStageIndex": 2,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "Community Project Lead",
      "Field Operations & Outreach",
      "Fundraising & Grants",
      "Volunteer Management"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "Group case presentation in Smart Classrooms, Block 4.",
    "resultDate": "02 Oct 2026",
    "notes": "Teams/slots will be allotted 24 hours prior via WhatsApp broadcast.",
    "applicationUrl": "#demo-apply"
  },
  {
    "societyId": "bullet-hawk-racing-bhr",
    "societyName": "Bullet Hawk Racing (BHR)",
    "category": "Automotive Society",
    "status": "interviews",
    "isDemo": true,
    "openingDate": "25 Aug 2026",
    "deadline": "08 Sep 2026",
    "relativeDeadline": "Interviews Underway",
    "currentStage": "Personal & Technical Panel Interviews",
    "activeStageIndex": 3,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "Chassis & Suspension Design",
      "Powertrain & Battery Systems",
      "Telemetry & Embedded IoT",
      "Aerodynamics Simulation"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "One-on-one panel interviews with senior council and faculty advisors.",
    "resultDate": "28 Sep 2026",
    "notes": "Dress code: smart casuals. Carry hard copies of your CV / design portfolio.",
    "applicationUrl": "#demo-apply"
  },
  {
    "societyId": "spic-macay-nsut-chapter",
    "societyName": "SPIC MACAY NSUT Chapter",
    "category": "Cultural Society",
    "status": "results",
    "isDemo": true,
    "openingDate": "15 Aug 2026",
    "deadline": "01 Sep 2026",
    "relativeDeadline": "Results Announced",
    "currentStage": "Selection List Published",
    "activeStageIndex": 4,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "Stage Acting",
      "Vocalist / Instrumentalist",
      "Choreography",
      "Production & Logistics"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "All rounds concluded.",
    "resultDate": "15 Sep 2026",
    "notes": "Congratulations to all newly inducted members! Onboarding begins next week.",
    "applicationUrl": "#demo-apply"
  },
  {
    "societyId": "shatranj",
    "societyName": "Shatranj",
    "category": "Sports Society",
    "status": "closed",
    "isDemo": true,
    "openingDate": "10 Aug 2026",
    "deadline": "25 Aug 2026",
    "relativeDeadline": "Recruitment Concluded",
    "currentStage": "Cohort Finalized for 2026-27",
    "activeStageIndex": 5,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "Competitive Team Roster",
      "Tournament Operations",
      "Broadcast & Streaming",
      "Fitness & Tactical Strategy"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "Recruitment drive closed.",
    "resultDate": "05 Sep 2026",
    "notes": "Next campus recruitment cycle will open during Monsoon Semester 2027.",
    "applicationUrl": "#demo-apply"
  },
  {
    "societyId": "cdf-nsut-chapter",
    "societyName": "CDF NSUT Chapter",
    "category": "Social Society",
    "status": "closed",
    "isDemo": true,
    "openingDate": "10 Aug 2026",
    "deadline": "25 Aug 2026",
    "relativeDeadline": "Recruitment Concluded",
    "currentStage": "Cohort Finalized for 2026-27",
    "activeStageIndex": 5,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "Community Project Lead",
      "Field Operations & Outreach",
      "Fundraising & Grants",
      "Volunteer Management"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "Recruitment drive closed.",
    "resultDate": "05 Sep 2026",
    "notes": "Next campus recruitment cycle will open during Monsoon Semester 2027.",
    "applicationUrl": "#demo-apply"
  },
  {
    "societyId": "tatsam",
    "societyName": "Tatsam",
    "category": "Literary Society",
    "status": "closed",
    "isDemo": true,
    "openingDate": "10 Aug 2026",
    "deadline": "25 Aug 2026",
    "relativeDeadline": "Recruitment Concluded",
    "currentStage": "Cohort Finalized for 2026-27",
    "activeStageIndex": 5,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "Debating (Parliamentary)",
      "Content & Editorial",
      "Creative Writing",
      "Public Speaking"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "Recruitment drive closed.",
    "resultDate": "05 Sep 2026",
    "notes": "Next campus recruitment cycle will open during Monsoon Semester 2027.",
    "applicationUrl": "#demo-apply"
  },
  {
    "societyId": "team-kalpana",
    "societyName": "Team Kalpana",
    "category": "Aerospace Society",
    "status": "open",
    "isDemo": true,
    "openingDate": "10 Sep 2026",
    "deadline": "24 Sep 2026",
    "relativeDeadline": "Closes in 6 days",
    "currentStage": "Online Applications Open",
    "activeStageIndex": 0,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "Chassis & Suspension Design",
      "Powertrain & Battery Systems",
      "Telemetry & Embedded IoT",
      "Aerodynamics Simulation"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "Shortlisted candidates will be invited for online technical review.",
    "resultDate": "12 Oct 2026",
    "notes": "Review required technical and portfolio links before submitting your application.",
    "applicationUrl": "#demo-apply"
  },
  {
    "societyId": "the-nsut-quiz-club",
    "societyName": "The NSUT Quiz Club",
    "category": "Literary Society",
    "status": "open",
    "isDemo": true,
    "openingDate": "10 Sep 2026",
    "deadline": "24 Sep 2026",
    "relativeDeadline": "Closes in 6 days",
    "currentStage": "Online Applications Open",
    "activeStageIndex": 0,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "Debating (Parliamentary)",
      "Content & Editorial",
      "Creative Writing",
      "Public Speaking"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "Shortlisted candidates will be invited for online technical review.",
    "resultDate": "12 Oct 2026",
    "notes": "Review required technical and portfolio links before submitting your application.",
    "applicationUrl": "#demo-apply"
  },
  {
    "societyId": "asn-algorithm-society-of-nsut",
    "societyName": "ASN (Algorithm Society of NSUT)",
    "category": "Technical Society",
    "status": "closing_soon",
    "isDemo": true,
    "openingDate": "08 Sep 2026",
    "deadline": "19 Sep 2026",
    "relativeDeadline": "Closes in 2 days",
    "currentStage": "Final Hours for Applications",
    "activeStageIndex": 0,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "Frontend Dev (React)",
      "Backend & APIs (Node/Go)",
      "Machine Learning / AI",
      "DevOps & Systems"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "Interviews commence next weekend at Admin Block / Virtual meet.",
    "resultDate": "08 Oct 2026",
    "notes": "Portals close promptly at 11:59 PM. Late submissions are strictly discarded.",
    "applicationUrl": "#demo-apply"
  },
  {
    "societyId": "yuva",
    "societyName": "YUVA",
    "category": "Youth Movement",
    "status": "upcoming",
    "isDemo": true,
    "openingDate": "28 Sep 2026",
    "deadline": "12 Oct 2026",
    "relativeDeadline": "Opens in 5 days",
    "currentStage": "Applications Opening Soon",
    "activeStageIndex": 0,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "General Operations",
      "Media & PR Coordinator",
      "Technical Associate",
      "Event Manager"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "Orientation deck and prompt teaser will release on Instagram handle.",
    "resultDate": "24 Oct 2026",
    "notes": "Follow announcements on Instagram for problem statement drops.",
    "applicationUrl": "#demo-apply"
  },
  {
    "societyId": "solar-and-electric-driven-systems-seds",
    "societyName": "Solar and Electric Driven Systems (SEDS)",
    "category": "Automotive Society",
    "status": "upcoming",
    "isDemo": true,
    "openingDate": "28 Sep 2026",
    "deadline": "12 Oct 2026",
    "relativeDeadline": "Opens in 5 days",
    "currentStage": "Applications Opening Soon",
    "activeStageIndex": 0,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "Chassis & Suspension Design",
      "Powertrain & Battery Systems",
      "Telemetry & Embedded IoT",
      "Aerodynamics Simulation"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "Orientation deck and prompt teaser will release on Instagram handle.",
    "resultDate": "24 Oct 2026",
    "notes": "Follow announcements on Instagram for problem statement drops.",
    "applicationUrl": "#demo-apply"
  },
  {
    "societyId": "bio-wings",
    "societyName": "Bio Wings",
    "category": "Biotech Society",
    "status": "round_1",
    "isDemo": true,
    "openingDate": "01 Sep 2026",
    "deadline": "15 Sep 2026",
    "relativeDeadline": "Round 1 Active",
    "currentStage": "Round 1: Screening & Task Evaluation",
    "activeStageIndex": 1,
    "eligibility": "Open to 1st, 2nd & 3rd Year NSUT Undergraduates across all branches and campuses (Main & East).",
    "roles": [
      "General Operations",
      "Media & PR Coordinator",
      "Technical Associate",
      "Event Manager"
    ],
    "rounds": [
      {
        "id": "apps",
        "name": "Applications",
        "desc": "Online submission & profile screening"
      },
      {
        "id": "r1",
        "name": "Round 1",
        "desc": "Domain task & technical evaluation"
      },
      {
        "id": "r2",
        "name": "Round 2",
        "desc": "Group challenge / practical assessment"
      },
      {
        "id": "interview",
        "name": "Interview",
        "desc": "Panel discussion with council seniors"
      },
      {
        "id": "results",
        "name": "Results",
        "desc": "Final induction cohort announcement"
      }
    ],
    "interviewInfo": "Offline aptitude and written ideation round scheduled at APJ Complex.",
    "resultDate": "05 Oct 2026",
    "notes": "Check your registered college email for assignment submission links.",
    "applicationUrl": "#demo-apply"
  }
];

export function getRecruitmentById(societyId) {
  if (!societyId) return null;
  return recruitment.find((r) => r.societyId === societyId) || null;
}

export function getRecruitmentMetrics() {
  const metrics = {
    recruitingNow: 0,
    openingSoon: 0,
    inLaterRounds: 0,
    closedCompleted: 0,
    total: recruitment.length,
  };

  for (const item of recruitment) {
    if (item.status === 'open' || item.status === 'closing_soon') {
      metrics.recruitingNow++;
    } else if (item.status === 'upcoming') {
      metrics.openingSoon++;
    } else if (item.status === 'round_1' || item.status === 'round_2' || item.status === 'interviews') {
      metrics.inLaterRounds++;
    } else {
      metrics.closedCompleted++;
    }
  }

  return metrics;
}
