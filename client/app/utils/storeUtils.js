// Replace all spaces and underscores with hypens, and convert to lowercase
const spinalCase = (str) => str.replace(/\s+|_+/g, '-').toLowerCase();

// Helper function to insert a string/value at a certain index in given string
const insert = (str, index, value) =>
  str.substr(0, index) + value + str.substr(index);

// Convert raw value (includes cents) to a comma-separated number with cents
// in decimal, ex. 123456 => 1,234.56
const monify = (num) => {
  const numStr = num.toString();
  const valueWithCents = insert(numStr, numStr.length - 2, '.');
  const formattedValue = parseFloat(valueWithCents)
                         .toLocaleString('en-US', {
                           minimumFractionDigits: 2,
                           style: 'currency',
                           currency: 'USD',
                         });
  return formattedValue;
};

export {
  monify,
  spinalCase,
};
