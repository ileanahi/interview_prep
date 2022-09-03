// run through string
// if 

var lengthOfLongestSubstring = function(s) {
  let substringArray = [];
  let longestStringLength = "";

  for (i=0; i < s.length; i++) {
    const currentCharPos = substringArray.indexOf(s[i]);
    if (currentCharPos !== -1) {
      substringArray.splice(0, currentCharPos + 1);
    }

    substringArray.push(s[i]);

    longestStringLength = Math.max(
        longestStringLength,
        substringArray.length
    );
  }
      
  return longestStringLength;
};