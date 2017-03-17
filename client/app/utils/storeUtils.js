// Replace all spaces and underscores with hypens, and convert to lowercase
const spinalCase = (str) => str.replace(/\s+|_+/g, '-').toLowerCase();

export {
  spinalCase,
};
