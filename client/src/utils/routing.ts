/**
 * Format Url
 * Replaces whitespace with a dash and makes all characters lower case
 *
 * @param {*} url
 */
const formatUrl = (url: string) => {
  return url.replace(/\s+/g, '-').toLowerCase();
};

const replaceDashWithSpace = (text: string) => {
  return text.replace(/-/, ' ').toLowerCase();
};

const getCategoryName = (path: string) => {
  return path.replace(/^\/([^\/]*).*$/, '$1');
}

const getCategoryId = (id: string) => id.split('/').pop(-1);

export { 
  formatUrl, 
  replaceDashWithSpace, 
  getCategoryName, 
  getCategoryId 
};
