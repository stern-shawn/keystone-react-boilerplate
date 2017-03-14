import he from 'he';

/**
 * Get a human-readable date format from a given post's 'publishedDate' field
 *
 * @param {string} date   A publishedDate string
 *
 * @return {string|null} Returns either the formatted date, or throws an error
 */
export const getDate = (date) => {
  if (date === 'Invalid Date') {
    return null;
  }

  const d = new Date(date);
  // We only care about the date it was posted, use split to discard the time
  return `${d.toLocaleString().split(',')[0]}`;
};

/**
 * Strip HTML tags from given string for consistently-sized text. Converts any
 * special HTML encoded characters into their plaintext version
 *
 * @param {string} html   A publishedDate string
 *
 * @return {string} Returns raw text of given string, sans HTML tags
 */
export const htmlToString = (html) => {
  const strippedHtml = html.replace(/<[^>]+>/g, '');
  return he.decode(strippedHtml);
};


/**
 * Truncate string down to a maximum of 'limit' characters and add ellipsis if
 * too long.
 *
 * @param {string} string   A string
 * @param {number} limit    Maximum number of characters to return from string
 *
 * @return {string} Returns truncated string if input was longer than limit
 */
export const truncate = (string, limit) => {
  // Do an immediate return for short strings :)
  if (string.length <= limit) { return string; }

  const substring = string.substr(0, limit);
  // Track back to the end of the last whole word and replace with ellipsis so
  // that we don't have partially split word at the end...
  return substring.substr(0, substring.lastIndexOf(' ')).concat('...');
};
