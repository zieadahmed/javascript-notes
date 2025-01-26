// function check if string is an Anagram ?.
// An anagram 2 string, of a string is another string that contains the same characters,
// only the order of characters can be different.
// Example:
// 1/*The word "secure" is an anagram of "rescue."
// 2/*The word "Listen" is an anagram of "silent."

const isAnagram = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }
    const lowerStr1 = str1.toLowerCase();
    const lowerStr2 = str2.toLowerCase();
    if (lowerStr1 === lowerStr2) {
        return false;
    }
    const sortedStr1 = lowerStr1.split("").sort().join("");
    const sortedStr2 = lowerStr2.split("").sort().join("");
    return sortedStr1 === sortedStr2;
};
