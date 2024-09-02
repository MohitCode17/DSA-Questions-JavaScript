/*
392. Is Subsequence

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true

Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false
*/

const isSubsequence = function (s, t) {
  let i = 0,
    j = 0;

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }

  return i === s.length;
};

/*
Explanation:

1. Initialization: We start with two pointers, i and j, both initialized to 0. i is used to traverse string s, and j is used to traverse string t.

2. Loop: We iterate through both strings using a while loop. The loop continues until either of the pointers reaches the end of their respective strings.

    Condition: Inside the loop, we check if the current character of s (s[i]) matches the current character of t (t[j]).
        If they match, we move the pointer i to the next character in s.
        Regardless of whether they match or not, we move the pointer j to the next character in t.

3. Final Check: After the loop, we check if i has reached the end of s. If it has, it means all characters in s were found in t in order, so we return true. Otherwise, we return false.
*/
