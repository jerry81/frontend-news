/*
A string S consisting of N characters is considered to be properly nested if any of the following conditions is true:

S is empty;
S has the form "(U)" or "[U]" or "{U}" where U is a properly nested string;
S has the form "VW" where V and W are properly nested strings. e.g. []()
For example, the string "{[()()]}" is properly nested but "([)()]" is not.

Write a function:

class Solution { public int solution(String S); }

that, given a string S consisting of N characters, returns 1 if S is properly nested and 0 otherwise.

For example, given S = "{[()()]}", the function should return 1 and given S = "([)()]", the function should return 0, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..200,000];
string S consists only of the following characters: "(", "{", "[", "]", "}" and/or ")".
*/

function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (S.length == 0) return 1;
  let stack = []
  for (let i in S) {
    let char = S[i];
    switch (char) {
      case "{": {
        s.push("{");
        break;
      }
      case "[": {
        s2.push("[");
        break;
      }
      case "(": {
        s3.push("(");
        break;
      }
      case "}": {
        if (s1.length < 1) return 0;
        s1.pop();
        break;
      }
      case "]": {
        if (s2.length < 1) return 0;
        s2.pop();
        break;
      }
      case ")": {
        if (s3.length < 1) return 0;
        s3.pop();
        break;
      }
      default: break
    }
  }
  console.log('s1,s2,s3', s1,s2,s3)
}

console.log("expect 1", solution("{[()()]}"));
console.log("expect 0", solution("([)()]"));

/*
'{[()()]}'
Output (stderr):
Invalid result type, integer expected, 'undefined' found
Perhaps you are missing a 'return'?
RUNTIME ERROR (tested program terminated with exit code 1)

Example test:   '([)()]'
*/
