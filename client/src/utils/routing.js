/**
 * Format Url
 * Replaces whitespace with a dash and makes all characters lower case
 *
 * @param {*} url
 */
export const formatUrl = (url) => {
  url = url.replace(/\s+/g, '-').toLowerCase();
  return url;
};
