/**
 * Recommendation Engine for "Find My Society"
 *
 * 100% Client-side, deterministic matching against the verified 54-society dataset.
 * No external AI API, no backend, completely explainable scoring based directly on:
 * - Category matching
 * - Society tagline, about, whyJoin, annualEvent text matching
 * - User selected interests, experience goals, and community culture
 */

export const INTEREST_OPTIONS = [
  {
    id: 'technical',
    label: 'Technical',
    categories: ['Technical Society', 'Biotech Society', 'Astronomy Society'],
    keywords: ['technical', 'technology', 'engineering', 'science', 'stem', 'compute', 'hardware', 'software'],
  },
  {
    id: 'coding_ai',
    label: 'Coding / AI',
    categories: ['Technical Society'],
    keywords: ['coding', 'code', 'programming', 'ai', 'artificial intelligence', 'machine learning', 'developer', 'algorithm', 'web', 'app', 'software', 'hackathon'],
  },
  {
    id: 'business',
    label: 'Business',
    categories: ['Management Society', 'Marketing Society', 'Incubation Cell', 'Entrepreneurship'],
    keywords: ['business', 'management', 'startup', 'incubation', 'marketing', 'enterprise', 'corporate'],
  },
  {
    id: 'finance',
    label: 'Finance',
    categories: ['Finance Society'],
    keywords: ['finance', 'economics', 'trading', 'markets', 'investment', 'equity', 'fintech', 'portfolio'],
  },
  {
    id: 'consulting',
    label: 'Consulting',
    categories: ['Consulting Society'],
    keywords: ['consulting', 'case study', 'strategy', 'advisory', 'problem solving', 'client', 'solution'],
  },
  {
    id: 'entrepreneurship',
    label: 'Entrepreneurship',
    categories: ['Entrepreneurship', 'Incubation Cell', 'Social Entrepreneurship'],
    keywords: ['entrepreneurship', 'startup', 'founder', 'incubation', 'pitch', 'venture', 'e-cell', 'innovate'],
  },
  {
    id: 'design',
    label: 'Design',
    categories: ['Design Society', 'Fashion Society'],
    keywords: ['design', 'graphic', 'ui', 'ux', 'art', 'fine arts', 'canvas', 'creativity', 'visual', 'fashion'],
  },
  {
    id: 'photography_media',
    label: 'Photography / Media',
    categories: ['Media Society', 'PR Society'],
    keywords: ['photography', 'photo', 'media', 'cinematography', 'video', 'pr', 'public relations', 'journalism', 'camera', 'film'],
  },
  {
    id: 'music_performance',
    label: 'Music / Performance',
    categories: ['Cultural Society'],
    keywords: ['music', 'instrumental', 'vocal', 'band', 'choir', 'classical', 'singing', 'dance', 'drama', 'theatre', 'stage', 'street play', 'nukkad'],
  },
  {
    id: 'writing_debate',
    label: 'Writing / Debate',
    categories: ['Literary Society'],
    keywords: ['debate', 'debating', 'literary', 'writing', 'poetry', 'literature', 'mun', 'quiz', 'quizzing', 'oratory', 'speech'],
  },
  {
    id: 'sports',
    label: 'Sports',
    categories: ['Sports Society'],
    keywords: ['sports', 'athletics', 'fitness', 'football', 'cricket', 'basketball', 'chess', 'tournament', 'physical'],
  },
  {
    id: 'gaming',
    label: 'Gaming',
    categories: ['Gaming Society'],
    keywords: ['gaming', 'esports', 'games', 'game theory', 'game design', 'competitive gaming', 'bgmi', 'valorant', 'chess'],
  },
  {
    id: 'automotive',
    label: 'Automotive',
    categories: ['Automotive Society'],
    keywords: ['automotive', 'motorsports', 'racing', 'formula', 'baja', 'vehicle', 'car', 'electric vehicle', 'mechanical'],
  },
  {
    id: 'aerospace',
    label: 'Aerospace',
    categories: ['Aerospace Society', 'Astronomy Society'],
    keywords: ['aerospace', 'astronomy', 'space', 'rocket', 'rover', 'satellite', 'celestial', 'stargazing', 'telescope'],
  },
  {
    id: 'social_impact',
    label: 'Social Impact',
    categories: ['Social Service', 'Social Entrepreneurship', 'Service Club', 'Social Initiative', 'Social Society', 'Youth Movement'],
    keywords: ['social', 'community', 'service', 'welfare', 'volunteering', 'underprivileged', 'education', 'ngo', 'impact', 'nss', 'rotaract'],
  },
  {
    id: 'something_else',
    label: 'Something else',
    categories: ['Spiritual Society', 'Mental Health Society', 'Biotech Society', 'Astronomy Society', 'Special Interest'],
    keywords: ['multidisciplinary', 'unique', 'mental health', 'wellbeing', 'spiritual', 'wellness', 'culture', 'diversity'],
  },
];

export const GOAL_OPTIONS = [
  {
    id: 'build_things',
    label: 'Build things',
    keywords: ['build', 'develop', 'software', 'vehicle', 'open-source', 'prototype', 'engineering', 'hardware', 'code', 'design', 'fabrication'],
    description: 'hands-on building',
  },
  {
    id: 'compete',
    label: 'Compete',
    keywords: ['compete', 'competition', 'hackathon', 'tournament', 'national', 'championship', 'cup', 'fest', 'contest', 'racing', 'debate'],
    description: 'competitions & tournaments',
  },
  {
    id: 'create',
    label: 'Create',
    keywords: ['create', 'design', 'art', 'production', 'creative', 'exhibition', 'film', 'writing', 'original'],
    description: 'creative creation',
  },
  {
    id: 'perform',
    label: 'Perform',
    keywords: ['perform', 'stage', 'play', 'music', 'dance', 'vocals', 'theatre', 'nukkad', 'acting', 'recital', 'showcase', 'live'],
    description: 'live performance',
  },
  {
    id: 'lead',
    label: 'Lead',
    keywords: ['lead', 'leader', 'organize', 'management', 'pr', 'corporate', 'sponsorship', 'president', 'convenor', 'head'],
    description: 'leadership & organizing',
  },
  {
    id: 'meet_people',
    label: 'Meet people',
    keywords: ['community', 'network', 'peer', 'social', 'team', 'connect', 'collaboration', 'seniors', 'family'],
    description: 'meeting peers & networking',
  },
  {
    id: 'learn',
    label: 'Learn',
    keywords: ['learn', 'workshop', 'mentorship', 'skills', 'guidance', 'curriculum', 'training', 'sessions', 'bootcamp', 'classes'],
    description: 'learning & skill building',
  },
  {
    id: 'solve_problems',
    label: 'Solve problems',
    keywords: ['problem', 'solving', 'case', 'consulting', 'strategy', 'analytics', 'analysis', 'logic', 'research', 'solution'],
    description: 'problem solving & strategy',
  },
  {
    id: 'help_people',
    label: 'Help people',
    keywords: ['help', 'social', 'welfare', 'community', 'service', 'underprivileged', 'uplift', 'volunteer', 'impact', 'support'],
    description: 'community service & social impact',
  },
  {
    id: 'explore_new',
    label: 'Explore something new',
    keywords: ['explore', 'curiosity', 'discover', 'interdisciplinary', 'passion', 'hobby', 'freshman', 'beginner', 'interest'],
    description: 'exploring new domains',
  },
];

export const COMMUNITY_OPTIONS = [
  {
    id: 'hands_on',
    label: 'Hands-on projects & engineering',
    keywords: ['build', 'development', 'prototype', 'hardware', 'engineering', 'project', 'lab', 'workshop'],
    description: 'a hands-on project culture',
  },
  {
    id: 'competitive',
    label: 'Competitive & high-drive teams',
    keywords: ['national', 'compete', 'racing', 'championship', 'tournament', 'hackathon', 'win', 'prize'],
    description: 'a competitive team environment',
  },
  {
    id: 'creative',
    label: 'Creative, artistic & expressive',
    keywords: ['arts', 'theatre', 'music', 'dance', 'creative', 'design', 'literature', 'expression'],
    description: 'a creative & expressive atmosphere',
  },
  {
    id: 'professional',
    label: 'Professional networking & career-focused',
    keywords: ['consulting', 'corporate', 'finance', 'business', 'enterprise', 'pr', 'career', 'industry'],
    description: 'a career-oriented professional circle',
  },
  {
    id: 'welcoming',
    label: 'Inclusive, casual & exploratory',
    keywords: ['community', 'peer', 'learn', 'inclusive', 'service', 'welfare', 'friendly', 'support'],
    description: 'a welcoming, exploratory community',
  },
];

/**
 * Score a society against the user's answers.
 * Completely deterministic and explainable.
 */
function scoreSociety(society, answers) {
  const { interests = [], goals = [], community = '' } = answers;

  let score = 0;
  const matchedInterests = [];
  const matchedGoals = [];
  let matchedCommunity = null;

  // Normalized search corpus for this society strictly from dataset fields
  const societyCorpus = [
    society.name,
    society.category,
    society.tagline,
    society.about,
    society.whyJoin,
    society.annualEvent,
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();

  // 1. Evaluate Interests
  interests.forEach((interestId) => {
    const interest = INTEREST_OPTIONS.find((i) => i.id === interestId);
    if (!interest) return;

    let interestMatched = false;

    // Check direct category match (+15 points)
    if (interest.categories && interest.categories.includes(society.category)) {
      score += 15;
      interestMatched = true;
    }

    // Check keyword hits in society corpus (+3 points per hit, max 12)
    const hits = interest.keywords.filter((kw) => societyCorpus.includes(kw));
    if (hits.length > 0) {
      score += Math.min(hits.length * 3, 12);
      interestMatched = true;
    }

    if (interestMatched) {
      matchedInterests.push(interest.label);
    }
  });

  // 2. Evaluate Experience Goals
  goals.forEach((goalId) => {
    const goal = GOAL_OPTIONS.find((g) => g.id === goalId);
    if (!goal) return;

    const hits = goal.keywords.filter((kw) => societyCorpus.includes(kw));
    if (hits.length > 0) {
      // Points scaled by relevance (up to 10 per goal)
      score += Math.min(hits.length * 2.5, 10);
      matchedGoals.push(goal.label.toLowerCase());
    }
  });

  // 3. Evaluate Community Culture
  if (community) {
    const comm = COMMUNITY_OPTIONS.find((c) => c.id === community);
    if (comm) {
      const hits = comm.keywords.filter((kw) => societyCorpus.includes(kw));
      if (hits.length > 0) {
        score += Math.min(hits.length * 2, 8);
        matchedCommunity = comm.description;
      }
    }
  }

  // Determine Match Strength
  let matchStrength = 'Worth exploring';
  if (score >= 28) {
    matchStrength = 'Strong match';
  } else if (score >= 15) {
    matchStrength = 'Good match';
  }

  // Generate Truthful, Grounded Explanation
  let matchExplanation = '';
  const matchPhrase = matchStrength === 'Worth exploring' ? 'Worth exploring' : `A ${matchStrength.toLowerCase()}`;
  if (matchedInterests.length > 0 && matchedGoals.length > 0) {
    matchExplanation = `${matchPhrase} because you selected ${matchedInterests.slice(0, 2).join(' + ')} with a focus on ${matchedGoals.slice(0, 2).join(' and ')}.`;
  } else if (matchedInterests.length > 0) {
    matchExplanation = `Directly matches your interest in ${matchedInterests.slice(0, 2).join(' & ')} through its core focus and active events.`;
  } else if (matchedGoals.length > 0) {
    matchExplanation = `Offers strong opportunities for ${matchedGoals.slice(0, 2).join(' and ')} based on its activities and initiatives.`;
  } else if (matchedCommunity) {
    matchExplanation = `Aligns well with your interest in ${matchedCommunity}.`;
  } else {
    matchExplanation = 'A broad campus society with open membership and active student initiatives.';
  }

  return {
    society,
    matchScore: Math.round(score),
    matchStrength,
    matchExplanation,
    matchedInterests,
    matchedGoals,
  };
}

/**
 * Calculate recommended societies based on user answers.
 *
 * @param {Object} answers { interests: string[], goals: string[], community: string }
 * @param {Array} societies Full 54-society dataset
 * @returns {Array} Sorted top matching societies with matchScore, matchStrength, and matchExplanation
 */
export function calculateRecommendations(answers, societies = []) {
  const { interests = [], goals = [], community = '' } = answers;

  // Edge case: user answered nothing
  if (interests.length === 0 && goals.length === 0 && !community) {
    const defaultIds = [
      'devcomm-nsut',
      'ashwamedh-stage',
      '180-degrees-consulting-nsut',
      'debsoc',
    ];
    return defaultIds
      .map((id) => societies.find((s) => s.id === id))
      .filter(Boolean)
      .map((society) => ({
        society,
        matchScore: 10,
        matchStrength: 'Worth exploring',
        matchExplanation: 'Flagship campus society with an active community and mentorship.',
      }));
  }

  // Score each society
  const scored = societies.map((society) => scoreSociety(society, answers));

  // Filter those with positive score
  const valid = scored.filter((item) => item.matchScore > 0);
  valid.sort((a, b) => b.matchScore - a.matchScore);

  // Return top 3 to 6
  if (valid.length >= 3) {
    return valid.slice(0, 6);
  }

  // If weak/sparse matches, backfill with diverse flagship societies
  const fallbackIds = ['devcomm-nsut', '180-degrees-consulting-nsut', 'ashwamedh-stage', 'debsoc'];
  const backfill = fallbackIds
    .filter((id) => !valid.some((v) => v.society.id === id))
    .map((id) => societies.find((s) => s.id === id))
    .filter(Boolean)
    .slice(0, Math.max(0, 4 - valid.length))
    .map((society) => ({
      society,
      matchScore: 6,
      matchStrength: 'Worth exploring',
      matchExplanation: 'Flagship society with diverse opportunities across campus.',
    }));

  return [...valid, ...backfill];
}
