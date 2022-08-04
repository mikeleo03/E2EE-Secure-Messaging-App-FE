export const sleep = async (ms: number): Promise<void> => {
  return new Promise((r) => setTimeout(r, ms));
};

export const trimString = (str = '') => {
  let spaceCount = 0;
  let endSpaceIndex = 0;
  const endWordIndex = 15;
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === ' ') {
      spaceCount++;
    }
    if (spaceCount === 2) {
      endSpaceIndex = i;
      break;
    }
  }
  const trimmedString =
    endSpaceIndex <= endWordIndex
      ? str.substring(0, endSpaceIndex)
      : str.substring(0, endWordIndex) + '...';

  return trimmedString;
};
