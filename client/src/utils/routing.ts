/**
 * Format Url
 * Replaces whitespace with a dash and makes all characters lower case
 *
 * @param {*} url
 */
export const formatUrl = (url: string) => {
  url = url.replace(/\s+/g, '-').toLowerCase();
  return url;
};

export const replaceDashWithSpace = (text: string) => {
  text = text.replace(/-/, ' ').toLowerCase();
  return text;
};

export const getCategoryName = (path: string) => path.replace(/^\/([^\/]*).*$/, '$1');

export const getCategoryId = (id: any) => id.split('/').pop(-1);
