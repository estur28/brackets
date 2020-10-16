function peek(stack) {
  return stack[stack.length - 1]; 
}

module.exports = function check(str, bracketsConfig) {
  
  
  let stack = [];
  stack.push();
  stack.pop();

  for (let i = 0; i < str.length; i++) {
    let letter = str.charAt(i);
    if (letter === '(' 
    || letter === '['
    || letter === '{' ) {
      stack.push(letter);
    } else if (letter === ')' || letter === ']'
    || letter === '}') {
      if (peek(stack) === '(' || peek(stack) === '['
      || peek(stack) === '{' || peek(stack) === '(]') {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}
