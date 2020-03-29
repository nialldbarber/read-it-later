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

export const getCategoryName = (path) => path.replace(/^\/([^\/]*).*$/, '$1');

export const getCategoryId = (id) => id.split('/').pop(-1);
