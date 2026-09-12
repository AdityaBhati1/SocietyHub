/**
 * Advanced client-side search and ranking utility for SocietyHub.
 *
 * Capabilities:
 * - Multi-field searching (name, category, tagline, about, whyJoin, annualEvent)
 * - Case-insensitive partial, prefix & substring matching
 * - Multi-word query support (all tokens must match)
 * - Specific domain inflection & terminology matching (coding ↔ code/programming/dsa, cars ↔ automotive/racing, theatre ↔ dramatics/stage/plays)
 * - Lightweight typo tolerance (Levenshtein distance <= 1 for words >= 5 chars, distance <= 2 for words >= 7 chars)
 * - Relevance scoring for ranking results
 * - Zero external dependencies, pure client-side
 */

// Stop words to ignore when doing prefix/fuzzy matches
const STOP_WORDS = new Set([
  'a', 'an', 'the', 'in', 'on', 'at', 'to', 'for', 'of', 'and', 'or', 'by', 'is', 'it', 'with', 'from', 'as'
]);

// Compute Levenshtein distance for typo tolerance
function levenshtein(a, b) {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;

  const matrix = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1,     // insertion
          matrix[i - 1][j] + 1      // deletion
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

// Tokenize text into normalized lowercase alphanumeric words
export function tokenize(text) {
  if (!text) return [];
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, ' ')
    .split(/[\s-]+/)
    .filter(Boolean);
}

/**
 * Check if a single search token matches a field token
 */
function tokenMatches(queryToken, fieldToken) {
  if (!queryToken || !fieldToken) return { matched: false, score: 0 };
  
  // Stop word protection
  if (STOP_WORDS.has(fieldToken) && queryToken !== fieldToken) {
    return { matched: false, score: 0 };
  }

  // 1. Exact match
  if (fieldToken === queryToken) return { matched: true, score: 10 };

  // 2. Plural / Singular match (e.g. cars ↔ car, society ↔ societies)
  if (queryToken.endsWith('s') && queryToken.slice(0, -1) === fieldToken) return { matched: true, score: 9 };
  if (fieldToken.endsWith('s') && fieldToken.slice(0, -1) === queryToken) return { matched: true, score: 9 };
  if (queryToken.endsWith('ies') && queryToken.slice(0, -3) + 'y' === fieldToken) return { matched: true, score: 9 };
  if (fieldToken.endsWith('ies') && fieldToken.slice(0, -3) + 'y' === queryToken) return { matched: true, score: 9 };

  // 3. Prefix match: query is a prefix of field token (e.g. "dev" -> "developer", "robot" -> "robotics", "photo" -> "photography")
  if (queryToken.length >= 3 && fieldToken.startsWith(queryToken)) {
    return { matched: true, score: 8 };
  }

  // 4. Substring match: query is inside field token (e.g. "code" inside "codeforces")
  if (queryToken.length >= 4 && fieldToken.includes(queryToken)) {
    return { matched: true, score: 6 };
  }

  // 5. English domain inflection & terminology matching
  // "coding" / "code" -> technical/coding/programming
  const isCodingQuery = queryToken === 'coding' || queryToken === 'code' || (queryToken.length >= 4 && levenshtein(queryToken, 'coding') <= 1);
  if (isCodingQuery &&
      (fieldToken.startsWith('cod') || fieldToken.startsWith('program') || fieldToken === 'developer' || fieldToken === 'developers' || fieldToken === 'software' || fieldToken === 'webdev' || fieldToken === 'dsa' || fieldToken === 'hackathon' || fieldToken === 'hackathons')) {
    return { matched: true, score: 8 };
  }

  // "cars" / "car" -> automotive / racing / motorsports
  const isCarsQuery = queryToken === 'cars' || queryToken === 'car' || (queryToken.length >= 4 && levenshtein(queryToken, 'cars') <= 1);
  if (isCarsQuery &&
      (fieldToken === 'automotive' || fieldToken === 'automotives' || fieldToken === 'racing' || fieldToken === 'motorsport' || fieldToken === 'motorsports' || fieldToken === 'formula')) {
    return { matched: true, score: 8 };
  }

  // "theatre" / "theater" -> stage / dramatics / theatrical / plays / nukkad
  const isTheatreQuery = queryToken === 'theatre' || queryToken === 'theater' || (queryToken.length >= 5 && (levenshtein(queryToken, 'theatre') <= 1 || levenshtein(queryToken, 'theater') <= 1));
  if (isTheatreQuery &&
      (fieldToken.startsWith('theat') || fieldToken === 'dramatics' || fieldToken === 'plays' || fieldToken === 'nukkad' || fieldToken === 'stage')) {
    return { matched: true, score: 8 };
  }

  // "social" -> social service, social entrepreneurship, community, society
  const isSocialQuery = queryToken.startsWith('social') || (queryToken.length >= 5 && levenshtein(queryToken, 'social') <= 1);
  if (isSocialQuery &&
      (fieldToken.startsWith('social') || fieldToken === 'community' || fieldToken === 'welfare' || fieldToken === 'underprivileged')) {
    return { matched: true, score: 8 };
  }

  // "finance" / "financial"
  const isFinanceQuery = queryToken.startsWith('financ') || (queryToken.length >= 5 && levenshtein(queryToken, 'finance') <= 1);
  if (isFinanceQuery && fieldToken.startsWith('financ')) {
    return { matched: true, score: 8 };
  }

  // 6. Typo tolerance (only for query words with length >= 5 to avoid 3/4-letter false positives)
  if (queryToken.length >= 5 && fieldToken.length >= 4) {
    const lenDiff = Math.abs(queryToken.length - fieldToken.length);
    if (lenDiff <= 2) {
      const dist = levenshtein(queryToken, fieldToken);
      if (dist === 1) return { matched: true, score: 5 };
      if (queryToken.length >= 7 && dist <= 2) return { matched: true, score: 4 };
    }
  }

  return { matched: false, score: 0 };
}

const FIELD_WEIGHTS = {
  name: 12,
  category: 8,
  tagline: 6,
  annualEvent: 5,
  whyJoin: 4,
  about: 4,
};

// Cache tokenized fields and lowercase strings per society object to avoid re-tokenizing on every keystroke
const societyFieldsCache = new WeakMap();

function getSocietyFields(society) {
  let cached = societyFieldsCache.get(society);
  if (!cached) {
    cached = {
      tokens: {
        name: tokenize(society.name),
        category: tokenize(society.category),
        tagline: tokenize(society.tagline),
        annualEvent: tokenize(society.annualEvent),
        whyJoin: tokenize(society.whyJoin),
        about: tokenize(society.about),
      },
      rawLower: {
        name: (society.name || '').toLowerCase(),
        category: (society.category || '').toLowerCase(),
        tagline: (society.tagline || '').toLowerCase(),
        annualEvent: (society.annualEvent || '').toLowerCase(),
        whyJoin: (society.whyJoin || '').toLowerCase(),
        about: (society.about || '').toLowerCase(),
      },
    };
    societyFieldsCache.set(society, cached);
  }
  return cached;
}

/**
 * Score a society against the search query tokens
 */
function scoreSociety(society, queryTokens) {
  if (!queryTokens.length) return { matches: true, score: 0 };

  const { tokens: fields, rawLower } = getSocietyFields(society);

  let totalScore = 0;

  // Multi-word logic: EVERY query token must match somewhere in the society's fields
  for (const qToken of queryTokens) {
    let bestTokenScore = 0;

    for (const [fieldName, fieldTokens] of Object.entries(fields)) {
      const weight = FIELD_WEIGHTS[fieldName] || 1;

      // Exact substring on whole field string
      const rawField = rawLower[fieldName] || '';
      if (qToken.length >= 3 && rawField.includes(qToken)) {
        bestTokenScore = Math.max(bestTokenScore, 6 * weight);
      }

      for (const fToken of fieldTokens) {
        const { matched, score } = tokenMatches(qToken, fToken);
        if (matched) {
          bestTokenScore = Math.max(bestTokenScore, score * weight);
        }
      }
    }

    // If any query token fails to match, the society is excluded
    if (bestTokenScore === 0) {
      return { matches: false, score: 0 };
    }

    totalScore += bestTokenScore;
  }

  return { matches: true, score: totalScore };
}

/**
 * Filter and sort societies based on search query, category group, and sort order.
 *
 * @param {Array} societies - List of all societies
 * @param {string} query - Free-text search query
 * @param {string} groupId - Filter group identifier ('all', 'technical', etc.)
 * @param {string} sortOrder - Sort order ('default', 'name-asc', 'name-desc')
 * @param {Function} matchGroupFn - Function to match society against group
 * @returns {Array} Filtered and sorted societies
 */
export function filterAndSortSocieties(
  societies,
  query = '',
  groupId = 'all',
  sortOrder = 'default',
  matchGroupFn = null
) {
  if (!Array.isArray(societies)) return [];

  const queryTokens = tokenize(query.trim());

  // 1. Filter by category group and search query
  const scoredSocieties = [];

  for (const society of societies) {
    // Check group filter
    if (groupId && groupId !== 'all' && matchGroupFn) {
      if (!matchGroupFn(society, groupId)) {
        continue;
      }
    }

    // Check search query
    if (queryTokens.length > 0) {
      const { matches, score } = scoreSociety(society, queryTokens);
      if (!matches) continue;
      scoredSocieties.push({ society, score });
    } else {
      scoredSocieties.push({ society, score: 0 });
    }
  }

  // 2. Sort results
  if (sortOrder === 'name-asc') {
    scoredSocieties.sort((a, b) =>
      a.society.name.localeCompare(b.society.name, 'en', { sensitivity: 'base' })
    );
  } else if (sortOrder === 'name-desc') {
    scoredSocieties.sort((a, b) =>
      b.society.name.localeCompare(a.society.name, 'en', { sensitivity: 'base' })
    );
  } else {
    // 'default': if searching, sort by highest relevance score; otherwise retain dataset order
    if (queryTokens.length > 0) {
      scoredSocieties.sort((a, b) => b.score - a.score);
    }
  }

  return scoredSocieties.map((item) => item.society);
}
