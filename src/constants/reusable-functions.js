export const isMappable = (array) => {
  if (!Array.isArray(array)) {
    return false;
  }
  if (array.length === 0) {
    return false;
  }
  return true;
};

export const emailRegex = (max = 50) => {
  return "^[A-Za-z0-9\\._%+-]+@[A-Za-z0-9\\.-]+\\.[A-Za-z]{2," + max + "}$";
};

export const getAsObjectFromLocalStorage = (index) => {
  try {
    const serializedData = localStorage.getItem(index);
    if (serializedData === null) {
      return undefined;
    }
    return JSON.parse(serializedData);
  } catch (err) {
    return err;
  }
};

export const saveObjectInLocalStorage = (key, value) => {
  try {
    const serializedData = JSON.stringify(value);
    localStorage.setItem(key, serializedData);
  } catch (err) {
    return err;
  }
};

export const replaceSpaceWithUnderscore = (stringToReplace) => {
  let results;
  try {
    results = stringToReplace.replace(/ /g, "_");
  } catch {}
  return results;
};

export const replaceUnderscoreWithSpace = (stringToReplace) => {
  let results;
  try {
    results = stringToReplace.replace(/_/g, " ");
  } catch {}
  return results;
};

export const checkRegexPattern = (myString, pattern) => {
  let regex = new RegExp(pattern);
  let regexState = regex.test(myString);
  return regexState;
};
